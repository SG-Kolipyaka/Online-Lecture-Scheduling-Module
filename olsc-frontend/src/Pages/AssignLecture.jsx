import React from 'react'
import Navbar2 from '../Routes/NavBar2'
import AdminSidebar from './AdminSidebar'

const AssignLecture = () => {
  return (
    <div>
               <Navbar2/>
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div style={{width:"15%",marginTop:"-1.5%"}}><AdminSidebar/></div>
      <div style={{width:"85%"}}><h1>Admin Pannel </h1></div>
      
      </div>
     </div>
  )
}

export default AssignLecture
