import React, { useState } from "react";
import postService from "../services/postService";
// import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState("");
  //   const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("address", address);
    formData.append("birthdate", birthdate);
    formData.append("age", age);
    formData.append("image", image);

    const response = await postService.create(formData);
    // console.log(response);
    if (response.data.success === true) {
      //   setMessage("Post Created Successfully");
      navigate("/show")
    } else {
        event.preventDefault()
      //   setMessage("Enable To Create Post");
    }

    // setTimeout(() => {
    //   setMessage("");
    // }, 2000);

    // navigate("/show");

    // event.target.reset();

    // axios.post('http://localhost:8000/api/create-post', {
    //     title: title,
    //     date: date,
    //     image: image
    // })
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })
  };

  return (
    <div>
      <div className="my-4 d-flex justify-content-center align-items-center">
        <h2>User Details</h2>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" name='title' placeholder='Enter Title' onChange={(event) => setTitle(event.target.value)} required />
        <br />
        <br />
        <input type="date" name='date' onChange={(event) => setDate(event.target.value)} required />
        <br />
        <br />
        <input type="file" name='image' onChange={(event) => setImage(event.target.files[0])} required />
        <br />
        <br />
        <NavLink to="/show">
        <button>Submit</button>
        </NavLink>
        <p>{message}</p>
      </form> */}
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Enter Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Enter Address
              </label>
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Enter Address"
                onChange={(event) => setAddress(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Enter Birth-Date
              </label>
              <input
                type="date"
                name="birthdate"
                className="form-control"
                onChange={(event) => setBirthdate(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Enter Age
              </label>
              <input
                type="text"
                name="age"
                className="form-control"
                placeholder="Enter Age"
                onChange={(event) => setAge(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label"
                style={{ fontWeight: "bold" }}
              >
                Profile Image
              </label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={(event) => setImage(event.target.files[0])}
                required
              />
            </div>
            <div className="button-holder mb-3">
              <div className="d-grid gap-2">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
            {/* <p>{message}</p> */}
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default CreateComponent;
