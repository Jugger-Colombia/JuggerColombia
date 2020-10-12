import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

import BussinesRoutes from "./RouteGroups/BussinesRoutes";
/* import AdminRoutes from "./routeGroups/AdminRoutes"; */
import DummysRoutes from "./RouteGroups/DummysRoutes";


export var path = '/JuggerColombia'

export const RoutesList = [

    /*   `${path}/validator` */
    ...Object.keys(BussinesRoutes),
    ...Object.keys(DummysRoutes),
    `${path}`,
    ``,
];

export const Config = {
    [``]: {

        /*  [`${path}`]: { */

        routeName: "Defaul",
        authSuccess: () => (<Redirect to={{ pathname: `${path}/home` }} />),
        authFail: () => (<Redirect to={{ pathname: `${path}/home` }} />),
    },
    /*
   [`${path}/home`]: {
       routeName: "Home",
       authSuccess: AppHomeWithSideBar,
       //authSuccess: (props) => PermissionBuilder(AppHomeWithSideBar)(props),
       authFail: () => (<Redirect to={{ pathname: "/login" }} />),
   },
  
   ...AdminRoutes,
   */
    ...DummysRoutes,
    ...BussinesRoutes
}


