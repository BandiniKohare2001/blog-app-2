import React, { useEffect, useState } from "react";
import "./Blog.css"
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast"
import Footer from "../../components/Footer/Footer";

export default function Blog() {
    const [Blogs, setBlog] = useState([]);

    const [user, setUser] = useState({});


    const loadBlog = async () => {
        const response = await axios.get("/api/blogs");
        const blogdata = response?.data?.data;

        console.log(blogdata);
        setBlog(blogdata);
    };

    useEffect(() => {
        loadBlog();
    }, []);

    const deleteBlog = async (id) => {
        const response = await axios.delete(`/api/blogs/${id}`);

        if (response?.data?.success) {
            showToast(response?.data?.message, 'denger', '3000');
            loadBlog();
        }
    }
    const updateBlog = async (id) => {
        window.location.href = `/updateBlog/${id}`
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
        <>

            <div>
                <Navbar />

              <div>
              <div className="blog-history-table">

{

    Blogs?.map((blog, index) => {
        const { _id, title, description
        } = blog;

        return (

            <div key={index} className="blog-row">
                <div className="title">
                    {title}
                </div>



                <div className="date">{description} ............... Read more</div>

                <div className="edit">
                    <p className='edit-icon'
                        onClick={() => {
                            updateBlog(_id)
                        }}
                    >Edit </p>
                    <p className='delete-icon' onClick={() => { deleteBlog(_id) }} >Delete</p>
                </div>
            </div>

        )
    }
    )
}
</div>
              </div>
            </div >
            <Footer />
        </>
    )
}