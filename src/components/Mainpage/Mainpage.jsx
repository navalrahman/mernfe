import axios from 'axios'
import React,{useState, useEffect} from 'react'
import '../Mainpage/Mainpage.css'
import { baseUrl } from '../../Url'

function Mainpage() {
  const [course, setCourse] = useState([])

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/api/course/subjects`
      ,{
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem('token') }
    }
    )
      setCourse(response.data.courseData)
      console.log(response);
    }
    fetchData()
  },[localStorage.getItem('token')])
  

  return (
    <div className='main-container'>
      <h2>Welcome to freeCodeCamp.org</h2>
      <h4>"I have not failed, I've just found 10,000 ways <br/> that won't work</h4>
      <p> - Thomas Edison</p>
      <div>
      <ul>
        {
          course.map((ele,i) => {
            return (
              <li key={i} className="course-item">{ele.course}</li>
            )
          })
        }
      </ul>
      </div>
    </div>
  )
}

export default Mainpage
