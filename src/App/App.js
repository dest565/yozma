import React from 'react';

import Header from './lib/Components/Header/Header'
import Navigator from '../Navigation/Navigator/Navigator'
import RouterConfig from '../Navigation/RouterConfig';
import DataLoader from './features/DataLoader/DataLoader'

import './App.css';

const App = () => {

  return (
    <div className="App">
      {/*Navigation sidebar*/}
      <Header >
        <Navigator />
      </Header>
      {/*Screens*/}
      <RouterConfig />
      {/*Handlers*/}
      <DataLoader />
    </div>
  );
};

export default App;
