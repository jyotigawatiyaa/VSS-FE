import React from "react";
import "./dashboard.css";
import "../Dashboard/dashboard.css";
import { withRouter } from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Sidenav from "./Sidenav";
import Home from "../Dashboard/Home";
import Create from "../CreateOrder/CreateOrder";
import AddUser from "../AddUser/AddUser";
import Stocks from "../Stocks/Stocks";
import Purchase from "../Purchase/Purchase";
import PurchaseOrder from "../Purchase/Purchase_Order";
import ListOrder from "../ListOrder/ListOrder";
import ViewMoreList from "../ListOrder/ViewMoreList";
import PurchaseView from "../Purchase/PurchaseView";
import BillingList from "../Billing/BillingList";
import BillingMore from "../Billing/BillingMore";

const Dash_Home = ({ match, location, history }) => {
  // console.log(match);
  return (
    <>
      <Router>
        <div className="main_container">
          <Sidenav match={match.path} />
          <Link to={`${match.path}/create_order`}></Link>
          <Link to={`${match.path}/listOrder`}></Link>
          <Link to={`${match.path}/addUser`}></Link>
          <Link to={`${match.path}/stocks`}></Link>
          <Link to={`${match.path}/purchase`}></Link>
          <Link to={`${match.path}/purchase/:id`}></Link>
          <Link to={`${match.path}/purchase_order`}></Link>
          <Link to={`${match.path}/listOrder/:id`}></Link>
          <Link to={`${match.path}/billing/:id`}></Link>
          <Link to={`${match.path}/billing`}></Link>
          <Switch>
            <Route exact path={`${match.path}`}>
              <Home match={match.path} />
            </Route>
            <Route exact path={`${match.path}/create_order`}>
              <div className="create_section">
                <Create match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/listOrder`}>
              <div className="listOrder">
                <ListOrder match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/listOrder/:id`}>
              <div className="listOrder">
                <ViewMoreList match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/addUser`}>
              <div className="addUser">
                <AddUser />
              </div>
            </Route>
            <Route exact path={`${match.path}/stocks`}>
              <div className="stocks">
                <Stocks match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/purchase`}>
              <div className="purchase">
                <Purchase match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/purchase_order`}>
              <div className="purchase">
                <PurchaseOrder match={match.path} />
              </div>
            </Route>
          
            <Route exact path={`${match.path}/purchase/:id`}>
              <div className="purchase">
                <PurchaseView match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/billing`}>
              <div className="purchase">
                <BillingList match={match.path} />
              </div>
            </Route>
            <Route exact path={`${match.path}/billing/:id`}>
              <div className="billing">
                <BillingMore match={match.path} />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default withRouter(Dash_Home);
