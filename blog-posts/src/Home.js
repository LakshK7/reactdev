import { useState } from "react";
import BlogList from "./Bloglist";

const HomePage = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My Blog 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis eius magnam nesciunt quos itaque esse fuga nulla illo incidunt, illum quae fugit rerum dolorum ipsum, in amet excepturi laborum",
      id: 1,
    },
    {
      title: "My Blog 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis eius magnam nesciunt quos itaque esse fuga nulla illo incidunt, illum quae fugit rerum dolorum ipsum, in amet excepturi laborum",
      id: 2,
    },
    {
      title: "My Blog 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis eius magnam nesciunt quos itaque esse fuga nulla illo incidunt, illum quae fugit rerum dolorum ipsum, in amet excepturi laborum",
      id: 3,
    },
  ]);
  return (
    <div className="content">
      <BlogList blogs={blogs} title="My Blogs" />
    </div>
  );
};

export default HomePage;
