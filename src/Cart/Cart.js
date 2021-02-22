import React from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartData:[],
            mounted:false
        }
    }
    componentDidMount() {
        axios.get('/cartData')
            .then(res => {
                console.log("res",res.data)
                let cartData=res.data;
                this.setState({ cartData: cartData,
                mounted:true});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    render(){
        console.log("From Cart",this.state.cartData)
        let cartData=null;
        let defCart=null;
    
        let total=[];
        if(this.state.cartData!=null && this.state.cartData!=undefined){
            total=this.state.cartData.map(item=>item.total)
            cartData=this.state.cartData.map(item=>(item.cartData.map(item=>
                <div className="col-12 mb-3">
                    <div className="row">
                <div className="col-3">
                    {item.name}
                </div>
                <div className="col-3">
                    {item.price}
                </div>
                <div className="col-3">
                    {item.count}
                </div>
                <div className="col-3">
                    {item.price *item.count}
                </div>
           </div>

                </div>
            )))
        }
        if(total.length){
            total=total.reduce((acc,item)=>acc+item)
            console.log("Total",total)
        }
        if( total!=0){
          defCart=<div className="container-fluid">
          <div className="row mt-2 mx-0 ">
            <div className="col-12 ">
              <div className="col-12 mb-5 mt-5">
                <em style={{fontSize: "50px"}}>Your Meal</em>
              </div>
              <div className="container-fluid text-center">
                <div className="row  border-bottom mb-2 mt-3">
                  <div className="col-3">Name</div>
                  <div className="col-3">Price</div>
                  <div className="col-3">Quantity</div>
                  <div className="col-3">Total</div>
                  </div>
                  <div className="row mb-3">
                      {cartData}
                      </div>
                  </div>
                  <div  className="col-12 text-left  border-top" >
            <div className=" px-3 py-2 ">
              <div className="row my-3">
                <div className="col-10">
                  <h3>Item Total</h3>
                </div>
                <div className="col-2 ">
                  <h3>Rs {total }</h3>
                  </div>
                  <div className="col-10">
                  <p>Taxes (2.5% SGST + 2.5% CGST)</p>
                </div>
                <div className="col-2">
                  <p>Rs {total *0.05 }</p>
                  </div>
                  <div className="col-12 border-top"></div>
                  <div className="col-10 ">
                  <h2>Grand Total</h2>
                </div>
                <div className="col-2">
                  <h2>Rs {total * 1.05}</h2>
                  </div>
                  </div>
                  </div>
                  </div>
              </div>
                </div>
              </div>
        }
        else{
          if(this.state.mounted){
            console.log("mounted",this.state.mounted)
            defCart=<div className="jumbotron jumbotron-fluid bg-light text-center">
            <div className="container">
              <h1 className="display-4">Aww Snap!!!</h1>
              <p className="lead">No Items in your cart. :(</p>
            </div>
          </div>;
          }
         
        }
        return <div>
            <Navbar name="Cart"></Navbar>
            {defCart}
            </div>
            
    }
}

export default Cart;