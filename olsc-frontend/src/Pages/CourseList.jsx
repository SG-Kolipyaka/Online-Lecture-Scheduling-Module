import React, { useEffect } from 'react'
import "../css/courselist.css"

const CourseList = ({coursedata}) => {
  return (
    <div className='courseslist'> 
    <table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Name</th>
      <th>Level</th>
      <th>Description</th>
      <th>Created By</th>

    </tr>
  </thead>
  <tbody>
    {coursedata.map((course) => (
      <tr >
        <td><img src={course.image} alt="" /></td>
        <td>{course.name}</td>
        <td>{course.level}</td>
        <td>{course.description}</td>
        <td>{course.admin}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  )
}

export default CourseList