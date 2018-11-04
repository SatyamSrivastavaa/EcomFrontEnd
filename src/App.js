import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './layout/navbar';
import Dashboard from './dashboard/availableItems';
import CreateOrder from './orders/createOrder';
import ViewOrder from './orders/viewOrder';
import SignIn from './auth/signIn';
import SignUp from './auth/signUp';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard}></Route>
            <Route path="/createOrder" component={CreateOrder}></Route>
            <Route path="/viewOrder" component={ViewOrder}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
