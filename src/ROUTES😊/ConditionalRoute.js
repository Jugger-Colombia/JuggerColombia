import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';


function ConditionalRoute({ authSuccess: AuthSuccessComp, authFail: AuthFailCom, ...rest }) {
    const [isLogged, setIsLogged] = useState(true); ///Validacion

    return (
        <Route
            exact
            render={(props) =>
                /* verify integrity of the auth param */
                (isLogged !== undefined ? (
                    <>
                        {isLogged ? (

                            <AuthSuccessComp {...props} {...rest} {...{ authFail: AuthFailCom }} />
                        ) : (
                                /* auth fail */
                                <AuthFailCom />
                            )}
                    </>
                ) : (
                        // loading
                        <>
                            <h3 style={{ padding: '5em' }}>LOADING CREDENTIALS</h3>
                        </>
                    ))}
        />
    );
}

export default ConditionalRoute;
