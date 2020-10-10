import React from 'react';
import { lazy } from "react";
/* import MenuDecorator from "../../components/MenuDecorator/MenuDecorator"; */

/* const LandingPage = lazy(() => import('../../views/LandingPage/LandingPage'));
const AdminControl = lazy(() => import("../../views/AdminView/AdminView"));
const AdminControlWithMenuDecorator = MenuDecorator(AdminControl);

*/
let path = "";


const AdminRoutes = {
	/* 
		[`${path}/admin`]: {
			routeName: "Admin View",
			action: "access",
			permission: "ACCESS_DASHBOARD",
			authSuccess: (props) => (<PermissionValidatorForRoutes InnerComponent={AdminControlWithMenuDecorator} {...props} />),
			authFail: LandingPage
		}, */

};



export default AdminRoutes;





