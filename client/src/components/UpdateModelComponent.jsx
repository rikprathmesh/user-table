import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import postService from "../services/postService";

const UpdateModelComponent = (props) => {
  const [isShow, setIsShow] = useState(false);

  const handleModal = () => {
    return setIsShow(!isShow);
  };

  // form updation data
  const [id, setId] = useState(props.id);
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);
  const [birthdate, setBirthdate] = useState(props.birthdate);
  const [age, setAge] = useState(props.birthdate);
  const [selectedFile, setSelectedFile] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("id", id);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("birthdate", birthdate);
    formData.append("age", age);

    if (selectedFile !== "" && selectedFile.length !== 0) {
      formData.append("image", selectedFile);
    }

    const response = await postService.update(formData);
    if (response.data.success === true) {
      alert(response.data.msg);
    } else {
      alert(response.data.msg);
    }

    handleModal();
  };

  return (
    <>
      <Button variant="success" onClick={handleModal}>
        Edit
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={handleModal}>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
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
                value={name}
                className="form-control"
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
                value={address}
                className="form-control"
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
                value={birthdate}
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
                value={age}
                className="form-control"
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
                onChange={(event) => setSelectedFile(event.target.files[0])}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleModal}>
              Close
            </Button>
            <Button type="submit" variant="dark">
              Update
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default UpdateModelComponent;
