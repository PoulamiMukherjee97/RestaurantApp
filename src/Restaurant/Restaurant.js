
import React from "react";
import axios from 'axios';
import Navbar from "../Navbar/Navbar";
import MenuComponent from "../Menu/MenuComponent";
import Reviews from '../Reviews/Reviews';
import "./Restaurant.css"

class Restaurant extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { restaurant:{},
        cartData:[],
        count:0,
    total:0 };
    }
    add=(item)=>{
        console.log("From Parent",item)
        item.isAdded=true;
        let count=this.state.count;
        let total=this.state.total;
        this.setState(
        { count:count+1,
        total:total+item.price}
        )
    
    }

    componentDidMount() {
        axios.get('/restaurant')
            .then(res => {
                console.log("res",res.data)
                this.setState({ restaurant: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    render(){
        let total=null;
        let cart=null;
        if(this.state.cartData!=null && this.state.cartData!=undefined){
            total=this.state.cartData.map(item=>item.total)}
        
        const style={
            backgroundSize: "cover",
            height:"500px",
            background:'linear-gradient(rgba(0,0,0,.70), rgba(0,0,0,.70)),url("https://static.toiimg.com/thumb/59268557.cms?width=1200&height=900") no-repeat center center fixed'
        }
        console.log("restaurant",this.state.restaurant)
        let operating_hours=null;
        let menuAppetizer=null;
        let menuMainCourse=null;
        let menuDessert=null;
        let reviews=null;

        if(this.state.restaurant.operating_hours!=null && this.state.restaurant.operating_hours!=undefined){
            operating_hours=Object.entries(this.state.restaurant.operating_hours).map(([key,value],i) =>{
                return <p className="mb-1" >{key} : <em>{value}</em></p>})
        }
       if(this.state.restaurant.menu!=null && this.state.restaurant.menu!=undefined){
           menuAppetizer=<MenuComponent name="/appetizer" data={this.state.restaurant.menu[0].appetizer} ></MenuComponent>
           menuMainCourse=<MenuComponent name="/maincourse"data={this.state.restaurant.menu[1].maincourse} ></MenuComponent>
           menuDessert=<MenuComponent name="/dessert" data={this.state.restaurant.menu[2].dessert} ></MenuComponent>


       }
       if(this.state.restaurant.reviews!=null && this.state.restaurant.reviews!=undefined){
           reviews=<Reviews data={this.state.restaurant.reviews}></Reviews>
       }
        
        return <div>
            <Navbar name={this.state.restaurant.name}></Navbar>
            <div className="container-fluid mt-3">
        <div className="jumbotron text-white rounded bg-dark "  style={style}>
        <div  className="text-center banner">
        <h1 className="display-4 head font-italic" style={{fontSize:"100px",fontWeight:"bold"}}>{this.state.restaurant.name}</h1>
        <p className="lead sub-head my-3 mx-5 px-5" style={{fontSize:"25px"}}>{this.state.restaurant.desc}</p>    
        </div>
    </div>
    <div className="row">
    <div className="col-md-8 blog-main">
    <h3 className="pb-3 mb-4 font-italic border-bottom">
        Restaurant Details
    </h3>
        <div className="blog-post">
            <h2 className="blog-post-title">{this.state.restaurant.name}</h2>
            <p className="blog-post-meta">{this.state.restaurant.neighborhood}</p>
            <p>Location: {this.state.restaurant.address}</p>
            <p>Contact: {this.state.restaurant.phn}</p>
            <p><em>Serves: {this.state.restaurant.cuisine_type}</em><br></br>Freshly out of the oven.Cooked with perfection by the best chefs.</p>
            <p>Price for 2 people: <strong>Rs {this.state.restaurant.price}</strong> </p>

        </div>
    </div>
    <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-card rounded">
            <h4 className="font-italic">Operating Hours</h4>
            {operating_hours}
        </div>
    </aside>
</div>
<div className="container-fluid mb-5">
    <h3 className="pb-3 mt-4 font-italic">
      Menu
    </h3>
    <nav>
      <div className="nav nav-tabs" id="nav-tab" role="tablist">
        <a className="nav-item nav-link active menu-tab"  id="nav-appetizer-tab" data-toggle="tab" href="#appetizer" role="tab" aria-controls="nav-appetizer" aria-selected="true">Appetizers</a>
        <a className="nav-item nav-link menu-tab" id="nav-maincourse-tab" data-toggle="tab" href="#maincourse" role="tab" aria-controls="nav-maincourse" aria-selected="false">Main Course</a>
        <a className="nav-item nav-link menu-tab"  id="nav-dessert-tab" data-toggle="tab" href="#dessert" role="tab" aria-controls="nav-dessert" aria-selected="false">Dessert</a>
      </div>
    </nav>
    <div className="tab-content " id="nav-tabContent">
        <div className="tab-pane fade show active" id="appetizer" role="tabpanel" aria-labelledby="nav-appetizer-tab">
            <div className="row mt-2 bg-grey mx-0">
                <div className="col-4 pl-0">
                <img src="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Cheese-Grape-Appetizers_EXPS_THCA19_3942_E08_22_3b.jpg?quality=90&resize=879%2C798" className="img-fluid" width="100%"></img>
                </div>
                <div className="col-8" style={{color:"white"}}>
                    <div className="col-12 mb-4 mt-3">
                        <em style={{fontSize: '50px'}}>Appetizers</em>
                    </div>
                    <div className="row  border-bottom mb-2">
                        <div className="col-3">Name</div>
                        <div className="col-3">Price</div>
                        <div className="col-3">Name</div>
                        <div className="col-3">Price</div>
                    </div>
                    <div className="row mb-3">
                        {menuAppetizer}
                    </div>
                </div>
            </div>
        </div>
        <div className="tab-pane fade" id="maincourse" role="tabpanel" aria-labelledby="nav-maincourse-tab">
        <div className="row mt-2 bg-grey mx-0">
          <div className="col-4 pl-0">
            <img src="https://homewithhollyj.com/wp-content/uploads/2019/02/Roasted-Beef-Tenderloin-4.jpg" className="img-fluid" width="100%"></img>
          </div>
          <div className="col-8">
            <div className="col-12 mb-4 mt-3">
              <em style={{fontSize: "50px"}}>Main Course</em>
            </div>
            <div className="row  border-bottom mb-2">
              <div className="col-3">Name</div>
              <div className="col-3">Price</div>
              <div className="col-3">Name</div>
              <div className="col-3">Price</div>
            </div>
            <div className="row mb-3">
                {menuMainCourse}
            </div>
        </div>
        </div>
        </div>
        <div className="tab-pane fade" id="dessert" role="tabpanel" aria-labelledby="nav-dessert-tab">
        <div className="row mt-2 bg-grey mx-0">
          <div className="col-4 pl-0">
            <img src="https://i.pinimg.com/originals/02/a9/95/02a995895aa5875f6dbd2de80e53f109.jpg" className="img-fluid" width="100%"></img>
          </div>
          <div className="col-8">
            <div className="col-12 mb-4 mt-3">
              <em style={{fontSize: "50px"}}>Dessert</em>
            </div>
            <div className="row border-bottom mb-2">
              <div className="col-3">Name</div>
              <div className="col-3">Price</div>
              <div className="col-3">Name</div>
              <div className="col-3">Price</div>
            </div>
            <div className="row mb-3">
                {menuDessert}
            </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    <div className="container-fluid">
    <div className="row ml-1 mt-3">
      <h3 className="pb-3 mb-4 font-italic border-bottom">
        Listen to what our customers have to say....
      </h3>
    </div>
    <div className ="row mt-3">
       {reviews}
    </div>
    </div>
</div> 
</div>
}
}

export default Restaurant;