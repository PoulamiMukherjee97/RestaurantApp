import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews=(props)=>{
    let data=props.data.map(cust=>
        {
        
        return <div className="col-lg-4 text-center" >
            <div className="col-lg-12 bg-card" style={{height:"100%"}}>
          <img className="rounded-circle mb-2" src="https://png.pngtree.com/png-vector/20190615/ourlarge/pngtree-earthglobalpeopleuserworld--flat-color-icon--vector-icon-png-image_1486795.jpg" alt="Generic placeholder image" width="140" height="140"></img>
          <h2>{cust.name}</h2>
          <p>Visited on: {cust.date}</p>
          <p>{cust.comments}</p>
          <p>Rating:{Array(cust.rating).fill(1).map(i=><FontAwesomeIcon icon={faStar} style={{color:"yellow"}}></FontAwesomeIcon>)}</p>
          </div>
          </div>
    
        })
    return data;
}
export default Reviews;