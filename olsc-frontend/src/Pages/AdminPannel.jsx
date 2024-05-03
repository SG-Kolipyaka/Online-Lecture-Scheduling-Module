import React, { useState, useEffect } from 'react';
import Navbar2 from '../Routes/NavBar2';
import AdminSidebar from './AdminSidebar';
import { useDispatch } from 'react-redux';
import "../css/adminPanel.css"
import CourseList from './CourseList';
import { createcourses } from '../Redux/CourseReducer/action';
import axios from 'axios';

const AdminPanel = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    level: '',
    description: '',
    image: '',
    lecture: []
  });
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const fetchData = () => {
    const token = localStorage.getItem('token');
    return axios.get("https://online-backend-b35y.onrender.com/courses/getcourses", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === 'lecture' ? value.split(',') : value;
    setCourseData({
      ...courseData,
      [name]: newValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(courseData);
    dispatch(createcourses(courseData))
    fetchData();
    setCourseData({
      name: '',
      level: '',
      description: '',
      image: '',
      lecture: []
    });
  };

  useEffect(()=>{
    fetchData();
console.log(data)
  },[courseData])

  return (
    <div className="adminpanel">
      <Navbar2 />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '15%', marginTop: '-1.5%' }}>
          <AdminSidebar />
        </div>
        <CourseList coursedata={data} />
        <div className="getcourses">
          <h2>Create Course</h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type='text'
                name='name'
                value={courseData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Level:</label>
              <input
                type='text'
                name='level'
                value={courseData.level}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name='description'
                value={courseData.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>ImageURL:</label>
              <input
                type='text'
                name='image'
                value={courseData.image}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Lecture (Comma-separated):</label>
              <input
                type='text'
                name='lecture'
                value={Array.isArray(courseData.lecture) ? courseData.lecture.join(',') : courseData.lecture}
                onChange={handleChange}
              />
            </div>
            <button type='submit'>Create Course</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
