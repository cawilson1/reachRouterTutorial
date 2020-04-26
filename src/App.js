import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

const App = () => (
  <div>
    <h1>Tutorial!</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="dashboard">Dashboard</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <Invoice path="invoices/:invoiceId" />
    </Router>

    <Link to="invoices/123">Invoice 123</Link>
    {"   "}
    <Link to="invoices/hello">Invoice Hello</Link>
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

const Invoice = ({ invoiceId }) => {
  return <h2>{invoiceId}</h2>;
};

export default App;
