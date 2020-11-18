import React from 'react';
import { Redirect } from 'react-router-dom';

import HomeView from '../../VIEWS📺/HomeView/HomeView';
import DocumentationView from '../../VIEWS📺/DocumentacionView/DocumentacionView';

const path = '';

const DummysRoutes = {
	[`${path}/documentos`]: {
		routeName: 'Documentation Page Page ',
		authSuccess: () => (<DocumentationView />),
		authFail: () => (<Redirect to={{ pathname: `${path}/` }} />),
	},
	[`${path}/home`]: {
		routeName: 'Home Page ',
		authSuccess: () => (<HomeView />),
		authFail: () => (<Redirect to={{ pathname: `${path}/` }} />),
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
