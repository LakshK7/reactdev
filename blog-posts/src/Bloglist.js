import "./blogs.css";
const BlogList = ({ blogs, title }) => {
  return (
    <div
      className="blog-preview"
      style={{ paddingTop: "100px", paddingLeft: "30px" }}
    >
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-box" key={blog.id}>
          <h2> {blog.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
