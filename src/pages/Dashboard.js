import React from "react";
import { Route } from "react-router";
import Home from "../pages/Home";
import Categories from "../layouts/Categories";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-4  ">
          <Categories />
        </div>
        <div className="col-md-8">
          <Route exact path="/" component={Home} />
        </div>
      </div>
    </div>
  );
}
