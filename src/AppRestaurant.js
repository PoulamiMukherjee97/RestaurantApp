import React from 'react';
import RestaurantsHome from "./RestaurantsHome/RestaurantsHome";

import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Restaurant from './Restaurant/Restaurant';
import Cart from "./Cart/Cart"


class AppRestaurant extends React.Component{
render(){
  return <BrowserRouter>
  <Link to="/"></Link>
    <Route path="/" exact component={RestaurantsHome}></Route>
    <Route path="/restaurant"  component={Restaurant}></Route>
    <Route path="/cartData" exact  component={Cart}></Route>
  </BrowserRouter>


}}

export default AppRestaurant;
