import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App() {
  return <RouterProvider router={root} />;
  // const baseUrl = "http://localhost:8080/blog";

  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   getBlogs();
  // }, []);

  // async function getBlogs() {
  //   await axios
  //     .get(baseUrl)
  //     .then((response) => {
  //       setBlogs(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // function formatDate(dateString) {
  //   const date = new Date(dateString);

  //   const formatDateSegment = (value) => String(value).padStart(2, "0");
  //   const year = date.getFullYear();
  //   const month = formatDateSegment(date.getMonth() + 1);
  //   const day = formatDateSegment(date.getDate());
  //   const hours = formatDateSegment(date.getHours());
  //   const minutes = formatDateSegment(date.getMinutes());
  //   const seconds = formatDateSegment(date.getSeconds());

  //   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  // }

  // return (
  //   <div className="App">
  //     <h1>안녕하세요!</h1>
  //     {blogs.map((blog) => (
  //       <div key={blog.id}>
  //         <h2>{blog.title}</h2>
  //         <p>{blog.content}</p>
  //         {/* createdAt -> YYYY-MM-dd HH:MM:SS */}
  //         <p>{formatDate(blog.createdAt)}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default App;
