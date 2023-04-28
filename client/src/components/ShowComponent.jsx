import React, { useState, useEffect } from "react";
import postService from "../services/postService";

import UpdateModelComponent from "./UpdateModelComponent";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ShowComponent = () => {
  const [posts, setPosts] = useState([]);
//   console.log(typeof(posts));
  const [newPost, setNewPost] = useState([]);

  const fetchPosts = async () => {
    setPosts(await postService.getPosts());
  };

  useEffect(() => {
    fetchPosts();
  }, [newPost, posts]);

  const handleDelete = async (id, event) => {
    // alert(id);
    var response = await postService.deletePost(id);
    if (response.data.success === true) {
      alert(response.data.msg);
      const newPost = Object.values(posts).filter((post) => post.id !== id);
      setNewPost(newPost);
    } else {
      alert(response.data.msg);
    }
  };

  return (
    <div>
      <div className="my-4 d-flex justify-content-center align-items-center">
        <h1>Users</h1>
      </div>
      {posts.data !== undefined && posts.data.data.length > 0 && (
        <table
          style={{ width: "100%" }}
          border="1"
          className="table table-hover"
        >
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Address</th>
              <th>Date Of Birth</th>
              <th>Age</th>
              <th>Profile Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.data.data.map((post) => (
              <tr key={post._id} className="text-center">
                <td>{post.name}</td>
                <td>{post.address}</td>
                <td>{post.birthdate}</td>
                <td>{post.age}</td>
                <td>
                  <img
                    src={"http://localhost:8000/api/postImages/" + post.image}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50px",
                    }}
                  />
                </td>
                <td>
                  <button
                    id={post._id}
                    onClick={(e) => handleDelete(post._id, e)}
                    className="me-2"
                    style={{ padding: "5px", borderRadius: "5px" }}
                  >
                    Delete
                  </button>
                  <UpdateModelComponent
                    id={post._id}
                    name={post.name}
                    address={post.address}
                    birthdate={post.birthdate}
                    age={post.age}
                  />
                  {/* <span style={{ cursor: "pointer" }}>
                    <i
                      className="fa fa-2x fa-sharp fa-light fa-circle-info ms-2"
                      style={{ color: "grey" }}
                    ></i>
                  </span> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShowComponent;
