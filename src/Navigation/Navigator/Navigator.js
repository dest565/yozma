import React from 'react';
import { history } from '../../index'

import NAV_CONSTANTS from '../../Constants/NavigationConstants'

import './style.css'

const Navigator = () => {
  return <div className={'navigatorContainer'}>
    <div
      className={'navigatorItem'}
      onClick={() => history.push(NAV_CONSTANTS.TRACKER)}
    >Tracker</div>
    <div
      className={'navigatorItem'}
      onClick={() => history.push(NAV_CONSTANTS.REPORTS)}
    >Reports</div>
  </div>
};

export default Navigator;
