import React, {useState, useEffect} from 'react';
import axios from 'axios';
import showToast from "crunchy-toast"
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';



export default function Home() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [user, setUser] = useState({});


  const postBlog = async () => {
      const userStorage = JSON.parse(localStorage.getItem('user'));

      try {
          const response = await axios.post("/api/blogs", {
              user: userStorage?._id,
              title: title,
              description: description
          })

          // alert(response?.data?.massage)
          if (response?.data?.success) {
              window.location.href = "/myblogs"
          }
      }
      catch (err) {
          alert(err.massage)
      }
    }
    useEffect(() => {
      const userstorageData = JSON.parse(localStorage.getItem('bloguser') || '{}');

      if (userstorageData?.email) {
          setUser(userstorageData);
      }
      else {
          showToast('you are not logged in!', 'danger', 1000);
          window.location.href = '/login'
      }

  }, [])

  return (
    <div>
      <Navbar />
      <form>
                <div className="input-box-container">
                    <h1 className="title">Write your Blog</h1>
                    <div className="type-input">
                        
                    </div><br />
                  Title<br />
                    
                    <input type="text" placeholder="Title" className="input-box"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    /><br />

                    <br />
                 
                    Add Description<br />
                    <input type="text" placeholder="Description" className="input-box"
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                    /><br />
                    <br />


                    <button type="button" className="signup-btn"
                        onClick={postBlog}>Post</button>

                </div>
            </form>
     
      <Footer />
    </div>

  );
}


