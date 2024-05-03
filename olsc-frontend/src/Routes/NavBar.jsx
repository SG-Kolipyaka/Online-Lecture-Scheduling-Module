import { NavLink } from "react-router-dom";

const Links=[
    {path:"/login",title:"Login"},
    {path:"/Signup",title:"SignUP"},
]



const NavBar = () => {
  return (
    <div >
        {Links.map((el)=>{
            return <NavLink style={{gap:"30px",padding:"20px"}}
             key={el.path} to={el.path}>{el.title}</NavLink>
        })}
    </div>
  )
}

export default NavBar