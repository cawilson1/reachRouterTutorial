import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="dashboard">Dashboard</Link>
      <Link to="invoices">Invoices</Link>
    </nav>
    <Router>
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

const Invoices = ({ children }) => (
  <div>
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

export default App;
