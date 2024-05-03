import "../css/nav2.css"
import image1 from "../images/image1.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {

  const logout=()=>{
    localStorage.clear();
  }

  return (
<>
<nav className='main-nav'>
  <img width={"70%"} height={"50px"} style={{marginLeft:"20px"}} src={image1} alt="" />
<div className='menubar'>
---:  Instructor Panel :---
</div>
<button id="button" onClick={logout}><Link to="/login" style={{color:"black",textDecoration:"none"}}>Logout</Link></button>
</nav>
</>
  )
}


export default Navbar2