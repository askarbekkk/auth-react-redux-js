import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

const PrivateRoute = ({component: Component, ...rest}) => {
   const user = useSelector(store => store.user.user)
    return (
        <Route
            {...rest}
            render={(props) => {
                if(user){
                    return <Component/>
                } else {
                    return <Redirect
                        to={{
                        pathname: '/login',
                        state: { from: props.location}

                    }} />
                }
            }}

        />
    );
};

export default PrivateRoute;