import react from 'react'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Home from '../views/Home'
import Counter from '../views/Counter'

const getRouter = () => {
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/counter">Counter</Link></li>
            </ul>
            <Switch>
                <Route exact path={Home}></Route>
                <Route path={Counter}></Route>
            </Switch>
        </div>
    </Router>
}

export default getRouter