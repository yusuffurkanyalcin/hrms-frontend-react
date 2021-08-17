import React from "react";
import { Route } from "react-router";
import Home from "../pages/Home";
import Categories from "../layouts/Categories";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJobAdvertisement from "../pages/AddJobAdvertisement";
import SignUpCandidate from "../pages/SignUpCandidate";
import SignUpEmployer from "../pages/SignUpEmployer";
import { Grid, Container } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div style={{ marginTop: 30 }}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/add-job-advertisement"
              component={AddJobAdvertisement}
              
            />
            <Route
              exact
              path="/sign-up-candidate"
              component={SignUpCandidate}
            />
            <Route exact path="/sign-up-employer" component={SignUpEmployer} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
