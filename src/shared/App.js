import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu'

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/about/:name" component={About}></Route>
                <Route path="/posts" component={Posts}></Route>
            </div>
        );
    }
}

export default App;