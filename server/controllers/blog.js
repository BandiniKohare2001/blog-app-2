import { responder } from "../util.js";
import Blog from "./../model/blog.js";

const postApiBlog = async (req, res) => {
    const { title, description } = req.body;

    const blog = new Blog({
        title,
        description
    })
    try {
        const savedBlog = await blog.save();
        return responder({
            res,
            success: true,
            data: savedBlog,
            message: 'Blog successfull added'

        })

    } catch (err) {
        return responder({
            res,
            success: false,
            message: err.message
        });
    }
}

const getAllBlogs = async (req, res) => {
    const allBlogs = await Blog.find();
    return responder({
        res,
        success: true,
        message: " Successfully fetch All Blogs",
        data: allBlogs

    });
}
const deleteBlog = async (req, res) => {
    const { id } = req.params;

    await Blog.deleteOne({ _id: id })

    res.json({
        success: "true",
        message: "Blog delete succesfully..!"
    })
}

const editTransation = async (req, res) => {
    const { id } = req.params

    const { amount, type, description, category } = req.body;

    await Blog.updateOne({ _id: id },
        {
            $set: {
                amount, description, type, category
            }
        })

    const updatedBlog = await Blog.findOne({ _id: id })


    res.json({
        success: "true",
        data: updatedBlog,
        message: "Blog update succesfully..!"
    })
}

const displayedit = async (req, res) => {
    const { id } = req.params

    const idBlog = await Blog.findOne({ _id: id })
    res.json({
        success: "true",
        data: idBlog,
        message: "Blog display succesfully..!"
    })
}

export { postApiBlog, getAllBlogs, deleteBlog, editTransation, displayedit };