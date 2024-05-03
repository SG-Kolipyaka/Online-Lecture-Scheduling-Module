import React from 'react'
import {Route,Routes} from "react-router-dom"
import PrivateRoutes from './PrivateRoutes'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import InstructorPannel from '../Pages/InstructorPannel'
import AssignLecture from '../Pages/AssignLecture'
import AdminPannel from '../Pages/AdminPannel'


const AllRoutes = () => {
  return (
    <div>
        <Routes>      
            <Route path="/assignLecture" element={<PrivateRoutes><AssignLecture/></PrivateRoutes>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/adminpanel" element={<PrivateRoutes><AdminPannel/></PrivateRoutes>} />
            <Route path="/:id" element={<PrivateRoutes><InstructorPannel/></PrivateRoutes>} />
            <Route path="*" element={<h1>404 Error</h1>} />
         </Routes>
    </div>
  )
}

export default AllRoutes