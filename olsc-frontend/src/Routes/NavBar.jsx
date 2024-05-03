import { NavLink } from "react-router-dom";
import "../css/nav.css"
import image1 from "../images/image1.png";

const Link=[
    {path:"/login",title:"Login"},
    {path:"/Signup",title:"SignUP"},
]
const activelink={textDecoration:"none", color:"brown"}
const defelink={textDecoration:"none", color:"black"}

const Navbar = () => {
  return (
<>
<nav className='main-nav'>
  <img width={"70%"} height={"50px"} style={{marginLeft:"20px"}} src={image1} alt="" />
<div className='menubar'>
    {Link.map((el)=>{
    return(
            <NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}>{el.title}</NavLink>
    )
})}
</div>
</nav>
</>
  )
}


export default Navbar