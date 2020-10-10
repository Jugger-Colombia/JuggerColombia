import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { Config, RoutesList } from "./routes";
import ConditionalRoute from "./ConditionalRoute";


function Router() {

	const Routes = RoutesList.map(route => (
		// eslint-disable-next-line react/jsx-filename-extension
		<ConditionalRoute key={route} path={route} {...Config[route]} />
	));

	const fallback = <h2>LOADING SPINER</h2>

	return (
		<BrowserRouter>
			<Suspense fallback={fallback}>
				<Switch>{Routes}</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default Router;
