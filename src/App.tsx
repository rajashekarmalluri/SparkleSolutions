import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Offerings from "./pages/Offerings";
import Services from "./pages/Services";
import Team from "./pages/Team";
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import './App.css';


const App : React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          {/* <Route path="/" component={Login} exact={true}></Route> */}
          <Route path="/" component={Home} exact={true}></Route>
          <Route path="/about" component={About} exact={true}></Route>
          <Route path="/goals" component={Product} exact={true}></Route>
          <Route path="/solutions" component={Offerings} exact={true}></Route>
          <Route path="/services" component={Services} exact={true}></Route>
          <Route path="/team" component={Team} exact={true}></Route>
          <Route path="/contact" component={Home} exact={true}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
