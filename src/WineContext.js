import React from 'react';

const WineContext = React.createContext({
    userInfo: {},
    loggedIn: false,
    wines: [],
    usernames: [],
    loginUser: () => {},
    logoutUser: () => {},
    getWines: () => {},
    addWine: () => {},
    updateWine: () => {},
    deleteWine: () => {},
});

export default WineContext;