import "./Restaurant.css";

import { Link } from "react-router-dom";

const Restaurants=(props)=>{
    
    return <div className="restaurant">
        <div className="card" >
            <img className="card-img-top" src={props.photograph} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Address : {props.address}</p>
                <p className="card-text">City : {props.city}</p>
                <p className="card-text">Price : Rs {props.price}</p>
                <Link to={{pathname:"/restaurant", search:props.name}} className="btn btn-dark " onClick={props.click}>Check</Link>
               
            </div>
        </div>
        
    </div>  
}

export default Restaurants;