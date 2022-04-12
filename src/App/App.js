import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Nav from '../Nav/Nav';
import WineList from '../WineList/WineList';

function App() {

  const renderRoutes = () => {
    return (
      <>
        <Route 
          exact
          path='/'
          component={Landing}
        />
        <Route
          exact
          path='/signup'
          component={Signup}
        />
        <Route
          exact
          path='/login'
          component={Login}
        />
        <Route
          exact
          path='/wines'
          component={WineList}
        />
      </>
    )
  }

  return (
    <div className='App'>
      <header>
        <h1>Wine Tracker</h1>
      </header>
      <Nav />
      <main className='main'>
        {renderRoutes()}
      </main>
      <footer>
        <p>© Brendan Loomis</p>
      </footer>
    </div>
  );
}

export default App;