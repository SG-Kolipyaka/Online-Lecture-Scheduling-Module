import React, { useEffect, useState } from 'react';
import Navbar2 from '../Routes/NavBar2';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';
import "../css/lectureassign.css"
import { useDispatch, useSelector } from 'react-redux';
import { assignlecture } from '../Redux/CourseReducer/action';

const AssignLecture = () => {
  const [formData, setFormData] = useState({
    instructor: '',
    date: '',
    instructorId: '',
    name: '',
    lecture: '',
  });

  const dispatch = useDispatch();
  const { assignmessage } = useSelector((state) => state.coursereducer);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'instructorId') {
      const selectedInstructor = data.find(instructor => instructor._id === value);
      setFormData({
        ...formData,
        [name]: value,
        instructor: selectedInstructor ? selectedInstructor.name : '',
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.instructorId || !formData.date || !formData.name || !formData.lecture) {
      alert('Please fill out all fields');
      return;
    }
    console.log(formData);
    dispatch(assignlecture(formData))
    setFormData({
      instructor: '',
      date: '',
      instructorId: '',
      name: '',
      lecture: '',
    })
  };

  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  const fetchData = () => {
    return axios.get("https://online-backend-b35y.onrender.com/user/getinstructors")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchcourseData = () => {
    const token = localStorage.getItem('token');
    return axios.get("https://online-backend-b35y.onrender.com/courses/getcourses", {
      headers: {
        Authorization: token
      }
    })
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchcourseData();
  }, []);

  return (
    <div>
      <Navbar2 />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '15%', marginTop: '-1.5%' }}>
          <AdminSidebar />
        </div>
        <div style={{ width: '35%', marginRight: "360px" }}>

          <h1>Admin Panel</h1>
          <h3 style={{ color: "brown" }}>Assign The Lectures to The Instructor</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="instructor">Select Instructor:</label>
              <select name="instructorId" value={formData.instructor} onChange={handleChange}>
                {data.map((instructor) => (
                  <option key={instructor._id} value={instructor._id}>
                    {instructor.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="date">Select Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="lecture">Select Lecture:</label>
              <select name="lecture" value={formData.lecture} onChange={handleChange}>
                <option value="">Select Lecture</option>
                {courses.map((course) => (
                  <optgroup key={course.id} label={course.name}>
                    {course.lecture.map((lecture, index) => (
                      <option key={index} value={lecture}>
                        {lecture}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="course">Select Course:</label>
              <select name="name" value={formData.name} onChange={handleChange}>
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.name}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit">Assign Lecture</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AssignLecture;
