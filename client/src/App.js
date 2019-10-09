import React, { Component } from 'react'
import './style/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Routes
import Main from './routes/Main'
import Privacy from './routes/Privacy'
import Regpage from './routes/Regpage'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={Main} />
                <Route exact path='/privacy' component={Privacy} />
                <Route exact path='/request' component={Regpage} />
            </Router>
        )
    }
}
