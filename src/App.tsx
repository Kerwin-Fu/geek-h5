import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Login from '@/pages/Login'
import Layout from '@/pages/Layout'

function App() {
  return (
    <Router>
      <div className="app">
      
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <Redirect to={'/home'} />}
          ></Route>
          <Route path={'/login'} component={Login}></Route>
          <Route path={'/home'} component={Layout}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
