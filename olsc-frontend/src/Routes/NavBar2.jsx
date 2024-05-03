import "../css/nav2.css"
import image1 from "../images/image1.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const isAdmin = localStorage.getItem('isAdmin');
  const isInstructor = localStorage.getItem('isInstructor');

  const logout=()=>{
    localStorage.clear();
  }

  return (
<>
<nav className='main-nav'>
  {isInstructor?<img width={"70%"} height={"50px"} style={{marginLeft:"20px"}} src={image1} alt="" />:""}
<div className='menubar'>
{isInstructor?"---:  Instructor Panel :---":"---:  Admin Panel :---"}
</div>
<button id="button" onClick={logout}><Link to="/login" style={{color:"black",textDecoration:"none"}}>Logout</Link></button>
</nav>
</>  
  )
}


export default Navbar2