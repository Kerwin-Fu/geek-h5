import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'

import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import PlayGround from '@/pages/Playground'
import ProfileEdit from './pages/Profile/Edit'

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
          <Route path={'/playGround'} component={PlayGround}></Route>
          <Route path="/profile/edit" component={ProfileEdit} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
