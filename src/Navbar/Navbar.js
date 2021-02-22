import { Route, Link } from "react-router-dom";
import "./Navbar.css"


const Navbar=(props)=>{
    let Nav=null;
    if(props.name==='Restaurants'){
        Nav=<ul className="nav ml-auto">
        <li className="nav-item dropdown mx-3">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">Sort By Price</a>
            <div className="dropdown-menu">
            <div className="radio">
                <label className="ml-1 mr-4 p-2">High-to-Low</label>
                <input type="radio" name="optradio" className="p-2" value='1' onClick={props.sortDesc}></input>
            </div>
            <div className="radio">
                <label className="ml-1 mr-4 p-2">Low-to-High</label>
                <input type="radio" name="optradio" className="p-2" value='2' onClick={props.sortAsc}></input>
            </div>     
            </div>
        </li>
        <li>
        <input className="form-control mr-1 mx-2" type="search"  placeholder="Search by name or city" aria-label="Search" onChange={props.search}></input> 
        </li>
        </ul>
    
    }
    else if(props.name==="Cart"){
      Nav=<ul className="nav ml-auto">
        <li className="nav-item mx-3" >
          <Link className="nav-link" to="/"><i className="fa fa-home"></i></Link>
        </li>
        
    </ul>
    }
    else{
      Nav=<ul className="nav ml-auto">
      <li className="nav-item mx-3" >
        <Link className="nav-link" to="/"><i className="fa fa-home"></i></Link>
      </li>
      <li className="nav-item" >
        <Link className="nav-link" to="/cartData"><i className="fa fa-shopping-cart"></i></Link>
      </li>
  </ul>
    }
    return <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
      <a href="#" className="navbar-brand d-flex align-items-center" >
        <strong>{props.name}</strong>
      </a>
      {Nav}
      </div>
    </div>
      
    
}

export default Navbar;