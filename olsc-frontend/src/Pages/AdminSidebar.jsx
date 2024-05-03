import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css/sidebar.css"


const links=[
  {path:"/adminpanel",title:"Create Course"},
  {path:"/assignLecture",title:"Assign Lecture"},
]
const activelink={textDecoration:"none", color:"brown"}
const defelink={textDecoration:"none", color:"black"}


const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h3 >IdeaMagix</h3>
      <ul>
      {links.map((el)=>{
    return(
            <li><NavLink style={({isActive})=>{return isActive?activelink :defelink}} to={el.path}>{el.title}</NavLink></li>
    )
})}
      </ul>
     
    </div>
  );
};

export default AdminSidebar;
