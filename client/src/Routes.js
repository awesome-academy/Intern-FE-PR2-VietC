import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductListScreen from './screens/ProductListScreen/ProductListScreen';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={HomeScreen} />
      <Route exact={true} path='/products' component={ProductListScreen} />
    </Switch>
  );
};

export default Routes;
