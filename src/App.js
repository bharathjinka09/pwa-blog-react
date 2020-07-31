import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Users from './Users'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand><Link to='/'>Blog</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route component={About} path='/about'></Route>
          <Route component={Users} path='/users'></Route>
          <Route component={Home} path='/'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
