const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "First test blog",
    author: "Pere",
    url: "",
    likes: 10,
  },
  {
    title: "Second test blog",
    author: "Sheli",
    url: "",
    likes: 20,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({ title: "willremovethissoon", likes: 0 });
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
