import React from 'react';
import TableBox from "./component/table_box";
import WaiterBox from "./component/waiterbox";
import OrderBox from "./component/orderbox";
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-extended bg-danger">
          <h4 className="nav-items text-light">Apna Dhaba</h4>
        </nav>
        <Route path="(/table|/)">
          <div>
            <h2 className="text-center mt-5">Select table</h2>
            <TableBox></TableBox>
          </div>
        </Route>
        <Route path="/waiter">
          <div>
            <h2 className="text-center mt-5">Select waiter</h2>
            <WaiterBox></WaiterBox>
          </div>
        </Route>
        <Route path="/order">
          <div>
            <h2 className="text-center mt-5">Place Order</h2>
            <OrderBox></OrderBox>
          </div>
        </Route>
        <Route path="/done">
          <div>
            <h1 className="text-center">Bill Generated succesfully</h1>
          </div>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
