import React from 'react';
import axios from'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons";

class MenuComponent extends React.Component{
    state={
        menu:[],
        total:0,
        count:0,
        cartData:[]
    }
    constructor(props){
        super(props);
        this.state.menu=(props.data).map(item=>{
            return {...item,isAdded:false,count:0}})
    }
    add(index){
        const item={...this.state.menu[index]};
        let total=this.state.total;
        let count=this.state.count;
        let cartData=[...this.state.cartData]
        item.isAdded=true;
        item.count++;
        cartData.push(item)
        const updatedMenu=[...this.state.menu];
        updatedMenu.splice(index,1,item);
        console.log("Add",cartData)
        this.setState({
            menu:updatedMenu,
            total:total+item.price,
            count:count+1,
            cartData:cartData
            
        })
    }
    increment(index){
        const item={...this.state.menu[index]};
        let cartData=[...this.state.cartData]
        const id=cartData.findIndex(food=>food.name===item.name)
        cartData[id].count++;
        let total=this.state.total;
        let count=this.state.count;
        item.count++;
        const updatedMenu=[...this.state.menu];
        updatedMenu.splice(index,1,item);
        console.log("Increment",cartData)
        this.setState({
            menu:updatedMenu,
            total:total+item.price,
            count:count+1,
            cartData:cartData
        })

    }
    decrement(index){
        const item={...this.state.menu[index]};
        let cartData=[...this.state.cartData];
        const id=cartData.findIndex(food=>food.name===item.name)
        cartData[id].count--;
        let total=this.state.total;
        let count=this.state.count;
        item.count--;
        if(item.count==0){
            item.isAdded=false;
            cartData.splice(id,1)
        }
        const updatedMenu=[...this.state.menu];
        updatedMenu.splice(index,1,item);
        console.log("Decrement",cartData)
        this.setState({
            menu:updatedMenu,
            total:total-item.price,
            count:count-1,
            cartData:cartData
        })

    }
    componentWillUnmount(){
        axios.post(this.props.name, {cartData:this.state.cartData, total:this.state.total})
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }
    render(){
        
        console.log(this.state.total)
        let menu=null;
        menu=this.state.menu.map((item,index)=>
            {
                return <div className="col-6 mb-2">
                    <div className="row">
                        <div className="col-6 ">
                            {item.name}
                        </div>
                        <div className="col-2 ">
                                {item.price}
                        </div>
                        <div className="col-4">
                            {item.isAdded==false?<button className="btn btn-sm btn-secondary" onClick={this.add.bind(this,index)}>Add</button>:<div className="counter"><button className=" btn-counter btn btn-sm " onClick={this.increment.bind(this,index)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button><p className="count">{item.count}</p><button className="btn-counter btn btn-sm" onClick={this.decrement.bind(this,index)}><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button></div>}
                        
                        </div>
                    </div>
                </div>
            })
        return menu;
    }
}
export default MenuComponent;