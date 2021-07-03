import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useLocation } from 'react-router-dom';

import TrackerPage from '../App/Screens/Tracker/Tracker';
import ReportPage from '../App/Screens/Report/Report';
import InfoPage from '../App/Screens/Info/Info';
import LoaderPage from '../App/Screens/Loader/Loader'

import NAV_CONSTANTS from '../Constants/NavigationConstants';
import {history} from "../index";
import {isAlreadyVisited} from "../App/core/localStorageHandler";

let timeOut = null;

const Routes = ({isReady}) => {
  let location = useLocation();
  const [readyToShowMainPage, setReadyToShowMainPage] = useState(false);
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    timeOut = setTimeout(() => setReadyToShowMainPage(true), 500);
    return () => clearTimeout(timeOut);
  },[]);

  useEffect(() => {
    if(isReady && readyToShowMainPage) {
      setShowRoutes('true');
    }
  },[isReady, readyToShowMainPage]);

  useEffect(() => {
    if(showRoutes && history.location.pathname === '/') {
      isAlreadyVisited() ? history.push(NAV_CONSTANTS.REPORTS) : history.push(NAV_CONSTANTS.TRACKER)
    }
  }, [showRoutes]);

  if (!showRoutes) return <LoaderPage/>;

    return <Switch>
      <Route exact path={NAV_CONSTANTS.ROOT} component={LoaderPage} />
      <Route path={NAV_CONSTANTS.REPORTS} component={ReportPage} />
      <Route path={NAV_CONSTANTS.TRACKER} component={TrackerPage} />
      <Route path={`${NAV_CONSTANTS.USER}/:id`} component={InfoPage} />
      <Route path="*">
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </Route>
    </Switch>;
};

const mapStateToProps = (state) => ({isReady: state.List.isListReady || false});

export default connect(mapStateToProps)(Routes);
