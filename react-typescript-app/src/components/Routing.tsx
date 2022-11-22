import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { routeJSONObject } from "./RouteJSON";

type routingProps = {
  RouteJSON: routeJSONObject[];
};

const Routing = (props: routingProps) => {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");

  /**
   * to return the component to be passed as an element
   * @param route
   * @returns
   */
  const returnHOC = (route: routeJSONObject) => {
    if (route.redirect) {
      return <Navigate to={route.redirect} replace />;
    } else {
      const componentPath = route.component || "./PageNotFound";
      const Component = React.lazy(() => import(`${componentPath}`));
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Component {...route} />
        </React.Suspense>
      );
    }
  };

  /**
   * to handle return routes
   * @param routeJSON
   * @returns
   */
  const handleReturnRoute = (routeJSON: routeJSONObject[]) => {
    return (
      routeJSON &&
      routeJSON.map((route, index) => (
        <Route key={index} path={route.path} element={returnHOC(route)}>
          {route.routes && handleReturnRoute(route.routes)}
        </Route>
      ))
    );
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "./home" : "./login"} />}
      ></Route>
      {handleReturnRoute(props.RouteJSON)}
    </Routes>
  );
};

export default Routing;
