import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
// import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import { Col, Row, Container } from "./components/Grid";
import Jumbotron from "./components/Jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Container fluid>
          <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>(React) Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
        <Switch>
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/saved" component={Saved} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
