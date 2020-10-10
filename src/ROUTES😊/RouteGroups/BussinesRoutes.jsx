import React from 'react';
import { Redirect } from 'react-router-dom';
import HomeView from '../../VIEWS📺/HomeView/HomeView';

const path = '';

const DummysRoutes = {
  [`${path}/home`]: {
    routeName: 'View PDF Validator ',
    authSuccess: () => (
      <>
        <HomeView />
      </>
    ),
    authFail: () => (
      <>
        <Redirect to={{ pathname: '/home' }} />
      </>
    ),
  },
  /*
    [`${path}/spinner`]: {
        routeName: "Spinners Samples",
        authSuccess: () => (
            <>
                <Spinner text={'SPIN Route Auth'}></Spinner>
                <SettingsButton></SettingsButton>
            </>
        ),
        authFail: () => (<Spinner text={'SPIN Route NO Auth'}></Spinner>)
    } */
};

export default DummysRoutes;
