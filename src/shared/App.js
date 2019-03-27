import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, MyPage, Login, NotFound } from 'pages';
import Menu from 'components/Menu'

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route path="/about/:name" component={About}></Route>
                    <Route path="/posts" component={Posts}></Route>
                    <Route path="/me" component={MyPage}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default App;