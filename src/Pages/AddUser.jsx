import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddUser = ({ userList, setUserList }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPic, setUserPic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newUser = {
      name: userName,
      email: userEmail,
      pic: userPic,
      id: String(userList.length + 1),
    };

    setUserList([...userList, newUser]);
    navigate("/");
  };
  return (
    <>
      <h2>Add User 👤</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="userName">Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail">Email-Address</label>
          <input
            type="text"
            className="form-control"
            id="userEmail"
            name="userEmail"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userPic">Profile-picture Link</label>
          <input
            type="text"
            className="form-control"
            id="userPic"
            name="userPic"
            value={userPic}
            onChange={(e) => setUserPic(e.target.value)}
          />
        </div>
        <button
          type="sumbit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-outline-success"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUser;
