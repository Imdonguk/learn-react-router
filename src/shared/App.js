import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from 'pages';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </div>
        );
    }
}

export default App;