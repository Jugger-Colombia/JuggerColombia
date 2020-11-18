import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

import BussinesRoutes from "./RouteGroups/BussinesRoutes";
/* import AdminRoutes from "./routeGroups/AdminRoutes"; */
import DummysRoutes from "./RouteGroups/DummysRoutes";


export var path = '/'

export const RoutesList = [

    ...Object.keys(BussinesRoutes),
    ...Object.keys(DummysRoutes),
    `${path}`,
    ``
];

export const Config = {
    [`/`]: {
        /*  [`${path}`]: { */
        routeName: "Defaul",
        authSuccess: () => (<Redirect to={{ pathname: `${path}home` }} />),
        authFail: () => (<Redirect to={{ pathname: `${path}home` }} />),
    },
    ...DummysRoutes,
    ...BussinesRoutes
}


