import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductListScreen from './screens/ProductListScreen/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={HomeScreen} />
      <Route exact={true} path='/games' component={ProductListScreen} />
      <Route
        exact={true}
        path='/game/:id/:slug'
        component={ProductDetailScreen}
      />
    </Switch>
  );
};

export default Routes;
