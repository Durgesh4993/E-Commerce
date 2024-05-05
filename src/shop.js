import { Link } from "react-router-dom"
const Header=()=>{
    return(
    <>
        <div className="r1">E-Commerce
        <span className="nav">+91 847383939 || 
        E-shop@gmail.com</span>  
        </div>
    </>
    )
}
const Footer=()=>{
    return(
    <>
        <div className="r3">Designed By:SRIMT</div>
    </>
    )
}
const Sidemenu=()=>{
    return(
        <>
            <ul style={{listStyleType:"none",width:"200px"}}>
                        <li href="#" style={{textDecoration:"none",color:"white",fontSize:"25px",paddingTop:"30px"}}><li style={{borderBottom:"solid 2px white"}}></li>E-Commerce</li>
                        <li style={{borderBottom:"solid 2px white",paddingTop:"50px",fontSize:"20px"}}><Link style={{color:"white",textDecoration:"none"}} to="/car">👉 Car</Link></li>
                        <li style={{borderBottom:"solid 2px white",fontSize:"20px"}}><Link style={{color:"white",textDecoration:"none"}} to="/bike">👉 Bike</Link></li>
                        <li style={{borderBottom:"solid 2px white",fontSize:"20px"}}><Link style={{color:"white",textDecoration:"none"}} to="/mobile">👉 Mobile</Link></li>
                    </ul>
        </>
    )
}
const Product=(x)=>{
    return(
        <>
        <div className="m1">
                        <img className="pic1" src={x.pic} />
                        <p>{x.name}</p>
                        <p>Price:<del>{x.price}</del> Offer:3000</p>
                        <button>Buy Now</button>
        </div>
        </>
    )
}
export default Header
export {Footer,Sidemenu,Product}