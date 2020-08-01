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
          <Navbar.Brand><Link to='/pwa-blog-react/'>Blog</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to='/pwa-blog-react/'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/pwa-blog-react/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/pwa-blog-react/users'>Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact component={About} path='/pwa-blog-react/about'></Route>
          <Route exact component={Users} path='/pwa-blog-react/users'></Route>
          <Route exact component={Home} path='/pwa-blog-react/'></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
