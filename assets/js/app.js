import React, { Component } from 'react';
import { Route,  Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Layout from './containers/Layout/Layout';
import Login from './containers/Auth/Auth';
import Home from './containers/Home/Home';
import Users from './containers/Users/Users';
import Plate from './containers/PlatePage/Plate';
import Logout from './containers/Auth/Logout/Logout'

class App extends Component {

    render(){

        let routes =
        <Switch>
            <Route path='/' exact component={Login}/> 
            <Redirect from='/' to='/'/>
        </Switch>

        if(this.props.token) {
            routes = 
            <Layout user={this.props.user}>
                <Switch>   
                    <Route path="/home" exact component={Home}/>
                    <Route path='/users' exact component={Users}/>
                    <Route path='/logout' exact component={Logout}/>
                    <Route path='/plate' exact component={Plate}/>
                    <Redirect from='/' to='/home'/>
                </Switch>
            </Layout>
        }

        return routes
    }

}
    
const mapStateToProps = state => {
    return {
        token: state.token,
        user: state.user
    }
}

export default connect(mapStateToProps)(App);