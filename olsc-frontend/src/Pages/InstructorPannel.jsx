import React, { useEffect } from 'react';
import { assignedinstructor } from '../Redux/AuthReducer/action';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar2 from '../Routes/NavBar2';
import '../css/instructorPanel.css';

const InstructorPannel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.authreducer);
  const user = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    dispatch(assignedinstructor(id));
  }, []);

  return (
    <div>
      <Navbar2 />
      <h1>Instructor Panel</h1>
      <h2 style={{color:"brown"}}>{user.name}'s Schedule / Lectures Allocated</h2> 
      <div className="lecture-table-container">
        <table className="lecture-table">
          <thead>
            <tr>
              <th>Lecture</th>
              <th>Course</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((lecture) => (
              <tr key={lecture._id}>
                <td>{lecture.lecture}</td>
                <td>{lecture.name}</td>
                <td>{new Date(lecture.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorPannel;
