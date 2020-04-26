import React from "react";
import { Link, Router, navigate } from "@reach/router";

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="invoices">Invoices</Link>
    </nav>
    <Router>
      <NotFound default />
      <Home path="/" />
      <Dashboard path="dashboard" />
      <Invoices path="invoices">
        <InvoicesIndex path="/" />
        <Invoice path=":invoiceId" />
      </Invoices>
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const Invoice = ({ invoiceId }) => (
  <div>
    <h2>Invoice {invoiceId} </h2>
  </div>
);

const Invoices = ({ children, navigate }) => (
  <div>
    <form
      onSubmit={event => {
        event.preventDefault();
        {
          console.log(event.target.elements[0].name); //key in js
          console.log(event.target.elements[0].value); //value
          console.log(event.target.elements[0].formAction);
          console.log(event.target.elements);
        }
        const id = event.target.elements[0].value;
        event.target.reset();

        // navigate(`/invoices/${id}`);//one way
        navigate(id); //another way
      }}
    >
      <p>
        <label>
          New Invoice ID: <input type="text" name="invoice" />
          <button type="submit">Create</button>
        </label>
      </p>
    </form>

    <h2>Invoices</h2>
    <ul>
      <li>
        <Link to="123">Invoice 123</Link>
      </li>
      <li>
        <Link to="abc">Invoice ABC</Link>
      </li>
    </ul>
    {children}
  </div>
);

const InvoicesIndex = () => (
  <>
    <p>Maybe put some pretty graphs here</p>
  </>
);

const NotFound = () => {
  return <p>Sorry, nothing here</p>;
};

export default App;
