import React from 'react';
import { Route, Link } from "react-router-dom";
import restaurants from "../Data/Restaurants.json"
import Restaurants from "../Restaurants/Restaurants";
import Navbar from "../Navbar/Navbar"; 
import axios from'axios';

class RestaurantsHome extends React.Component{
state={
   restaurants: [],
      searchCalled:false,
      filteredRestaurants:[],
      noContent:false,

}
constructor(){
  super();
  this.state.restaurants=restaurants.map(restaurant=>restaurant)
  // console.log("Restaurants",this.state.restaurants);

}
sortAscending=()=>{
  console.log("Ascending");
  const restaurants=[...this.state.restaurants];
  const filteredRestaurants=[...this.state.filteredRestaurants]
  restaurants.sort((a,b)=>{
    return a.price-b.price;
  })
  filteredRestaurants.sort((a,b)=>{
    return a.price-b.price;
  })
  this.setState({
    restaurants:restaurants,
    filteredRestaurants:filteredRestaurants
  })
}
sortDescending=()=>{
  console.log("Descending");
  const restaurants=[...this.state.restaurants];
  const filteredRestaurants=[...this.state.filteredRestaurants]
  restaurants.sort((a,b)=>{
    return b.price-a.price;
  })
  filteredRestaurants.sort((a,b)=>{
    return b.price-a.price;
  })
  this.setState({
    restaurants:restaurants,
    filteredRestaurants:filteredRestaurants
  }) 
}
search=(event)=>{
  // console.log(event.target.value)
  let restaurants=[...this.state.restaurants]
  restaurants=restaurants.filter(restaurant=> ((restaurant.name).toLowerCase()).startsWith((event.target.value).toLowerCase()) ||  ((restaurant.neighborhood).toLowerCase()).startsWith((event.target.value).toLowerCase()))
  // console.log(restaurants)
  if(!restaurants.length)
    this.setState({
      noContent:true})
  else
    this.setState({
      noContent:false })
  
  if((event.target.value).length)
    this.setState({
      searchCalled:true})
  else
    this.setState({
      searchCalled:false,
      })
  
  this.setState({
    filteredRestaurants:restaurants
  })
}
passData=(id)=>{
  const restaurant=[...this.state.restaurants].find(restaurant=>
    restaurant.id ===id)
    console.log(restaurant)
    axios.post("/restaurant", restaurant)
    .then((res) => {
        console.log(res.data)
    }).catch((error) => {
        console.log(error)
    });
}
render(){
    let restaurants=null;
    // console.log("nocontent",this.state.noContent)
    if(this.state.noContent){
      restaurants=<div className="jumbotron jumbotron-fluid bg-light text-center">
      <div className="container">
        <h1 className="display-4">Aww Snap!!!</h1>
        <p className="lead">Sorry we can't find what you are looking for. :(</p>
      </div>
    </div>
    }
    else{
      if(!this.state.searchCalled){
        restaurants=
        this.state.restaurants.map(restaurant=>{
        return <Restaurants name={restaurant.name} key={restaurant.id} photograph={restaurant.photograph} address={restaurant.address} price={restaurant.price} city={restaurant.neighborhood}  click={this.passData.bind(this,restaurant.id)}></Restaurants>})
      }
      
      else{
        restaurants=
        this.state.filteredRestaurants.map(restaurant=>{
        return <Restaurants name={restaurant.name} key={restaurant.id} photograph={restaurant.photograph} address={restaurant.address} price={restaurant.price} city={restaurant.neighborhood} click={this.passData.bind(this,restaurant.id)} ></Restaurants>})}
    
    }
    // console.log(this.state)
    return (
      <div>
        <Navbar name="Restaurants" sortAsc={this.sortAscending} sortDesc={this.sortDescending} search={this.search}></Navbar>
        <div className="restaurants mt-4" style={{textAlign:"center"}}>
      {restaurants}
    </div>
      </div>
    
    );
}
}

export default RestaurantsHome;
