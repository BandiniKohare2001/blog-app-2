import React, { useEffect, useState } from 'react'
import '../Home/Home.css';
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import showToast from 'crunchy-toast';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function UpdateBlog() {
  const [title, settitle] = useState('');
  const [description, setDescription] = useState('');


  const { id } = useParams();

  const fetchBlog = async () => {
    const response = await axios.get(`/api/blogs/${id}`)
    const { title, description } = response.data.data;

    settitle(title)
  
    setDescription(description)
 
  }
  useEffect(() => {
    fetchBlog()
  }, [])

  const UpdateBlog = async () => {
    const response = await axios.put(`/api/blogs/${id}`, {
      title,
      description,
    })

    if (response?.data?.data) {
      const successMessage = 'Blog updated successfully';
      showToast(successMessage, 'success', '3000');
      window.location.href = '/myblogs'
    }

    settitle('')
    setDescription('')


  }

  // <>
  // id= {id}
  //   </>

  return (
    <>


      <Navbar />
      <form>
        <div className="input-box-container">
          <h1 className="title">Update blogs</h1>

          <div>

        
          <label className='cetgory-text'>Add Title:</label>
            <input
              type='text'
              placeholder='enter title'
              className="input-box"
              value={title}
              onChange={(e) => {
                settitle(e.target.value)
              }}
            /><br />
            <br />
           
            <br />
            <label className='cetgory-text'>Add Description:</label><br />
            <input
              type='text'
              placeholder='enter description'
              className="input-box"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
<br /><br />
            <button
              type='button'
              className='signup-btn'
              onClick={UpdateBlog}>Update</button>
          </div>
        </div>

      </form>

      <Footer />
    </>
  )
}
