import React, { useState, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Nav from '../Nav/Nav';
import WineList from '../WineList/WineList';
import WineDetail from '../WineDetail/WineDetail';
import config from '../config';
import WineContext from '../WineContext';
import AddWine from '../AddWine/AddWine';
import EditWine from '../EditWine/EditWine';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
  const initialState = {
    userInfo: {},
    loggedIn: false,
    checkIfLoggedIn: false,
    usernames: [],
    wines: [],
    loadedWines: false
  };

  const [stateData, setStateData] = useState({ ...initialState });

  // For some reason usernames are showing up as undefined 
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/users/usernames`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
        return res.json();
      })
      .then(usernames => {
        setStateData(prevStateData => ({ ...prevStateData, usernames }));
      })
      .catch(err => {
        console.error({ err });
      }); 

    // check if the user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      loginUser(loggedInUser);
      let userId = loggedInUser.user_id;
      if (!userId) {
        userId = stateData.userInfo.user_id;
      }
      fetch(`${config.API_ENDPOINT}/wines?userId=${userId}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'authorization': `bearer ${config.API_KEY}`
        }
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(error => {
              throw error;
            });
          }
          return res.json();
        })
        .then(wines => {
          getWines(wines);
        })
        .catch(error => {
          console.error({ error });
        });
    }
    setStateData(prevStateData => ({
      ...prevStateData,
      checkIfLoggedIn: true
    }));
  }, []);

  const renderRoutes = () => {
    // render routes after checking if the user is logged in
    if (stateData.checkIfLoggedIn) {
      return (
        <>
          <ErrorBoundary>
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
              render={() => (
                !stateData.loggedIn ? (
                  <Redirect to='/login' />
                ) : (
                  <WineList />
                )
              )}
            />
            </ErrorBoundary>
          {renderAfterLoadingWines()}
        </>
      )
    }
  }

  const renderAfterLoadingWines = () => {
    // render these routes after loading wines
    if (stateData.loadedWines) {
      return (
        <>
          <ErrorBoundary>
            <Route 
              exact
              path='/wines/:wine_id'
              render={(props) => (
                <WineDetail {...props} />
              )}
            />
            <Route
              exact
              path='/add-wine'
              render={(props) => (
                <AddWine {...props} />
              )}
            />
            <Route 
              exact
              path='/edit-wine/:wine_id'
              render={(props) => (
                <EditWine {...props} />
              )}
            />
          </ErrorBoundary>
        </>
      )
    } else if (!stateData.loggedIn) {
      // redirect to login page if user is not logged in
      return (
        <>
          <Route 
            path='/wines/:wine_id'
            render={() => (
              <Redirect to='/login' />
            )}
          />
          <Route
            path='/add-wine'
            render={() => (
              <Redirect to='/login' />
            )}
          />
          <Route
            path='/edit-wine/:wine_id'
            render={() => (
              <Redirect to='/login' />
            )}
          />
        </>
      )
    }
  } 

  // functions for updating state and context
  const loginUser = (user) => {
    setStateData(prevStateData => ({
      ...prevStateData,
      userInfo: user,
      loggedIn: true
    }));
  }

  const logoutUser = () => {
    setStateData(prevStateData => ({
      ...prevStateData,
      userInfo: {},
      loggedIn: false,
      wines: []
    }));
  }

  const getWines = (wines) => {
    setStateData(prevStateData => ({
      ...prevStateData,
      wines: wines,
      loadedWines: true
    }));
  }

  // add function
  const addWine = (wine) => {
    setStateData(prevStateData => ({
      ...prevStateData,
      wines: [ ...stateData.wines, wine ]
    }));
  }

  // update function
  const updateWine = (updatedWine) => {
    setStateData(prevStateData => ({
      ...prevStateData,
      wines: stateData.wines.map(w => 
        (w.wine_id !== updatedWine.wine_id) ? w : updatedWine
      )
    }));
  }

  // delete function
  const deleteWine = (wineId) => {
    const newWines = stateData.wines.filter(w => (
      w.wine_id !== wineId
    ));
    setStateData( prevStateData => ({
      ...prevStateData,
      wines: newWines
    }));
  }

  const contextValue = {
    userInfo: stateData.userInfo,
    loggedIn: stateData.loggedIn,
    wines: stateData.wines,
    usernames: stateData.usernames,
    loginUser: loginUser,
    logoutUser: logoutUser,
    getWines: getWines,
    addWine: addWine,
    updateWine: updateWine,
    deleteWine: deleteWine,
  }

  return (
    <WineContext.Provider value={contextValue}>
      <div className='App'>
        <header>
          <h1>Wine Tracker</h1>
        </header>
        <ErrorBoundary>
          <Nav />
        </ErrorBoundary>
        <main className='main'>
          {renderRoutes()}
        </main>
        <footer>
          <p>© Brendan Loomis</p>
        </footer>
      </div>
    </WineContext.Provider>
  );
}

export default App;