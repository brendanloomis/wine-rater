import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Nav from '../Nav/Nav';
import WineList from '../WineList/WineList';
import WineDetail from '../WineDetail/WineDetail';

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
        <Route 
          exact
          path='/wines/:wine_id'
          render={(props) => (
            <WineDetail {...props} />
          )}
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