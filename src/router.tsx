import React, { Suspense, lazy } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/Home"));

const Loading = () => <h1>Carregando...</h1>;

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={Loading}>
      <Switch>
        <Route component={HomePage} path={"/"} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
