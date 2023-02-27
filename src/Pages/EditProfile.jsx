import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const EditProfile = ({ userList, setUserList }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fdUser = userList.filter((obj) => {
    return obj.id === id;
  });

  const [userName, setUserName] = useState(fdUser[0]["name"]);
  const [userEmail, setUserEmail] = useState(fdUser[0]["email"]);
  const [userPic, setUserPic] = useState(fdUser[0]["pic"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    userList.forEach(function (obj) {
      if (obj.id === id) {
        obj["name"] = userName;
        obj["email"] = userEmail;
        obj["pic"] = userPic;
      }
    });

    setUserList(userList);
    navigate("/");
  };

  return (
    <>
      <h2>Edit User Profile 🔨 ({id})</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="userName">Update-Name</label>
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
          <label htmlFor="userEmail">Update-Email-Address</label>
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
          <label htmlFor="userPic">Updated-Profile-Pic</label>
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
          type="submit"
          onClick={(e) => handleSubmit(e)}
          className="btn btn-outline-success"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default EditProfile;
