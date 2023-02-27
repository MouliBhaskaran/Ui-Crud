import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export const UserRow = ({ userData, userList, setUserList }) => {
  const navigate = useNavigate();
  return (
    <>
      <tr>
        <td className="pl-4">{userData.id}</td>
        <td>
          <h5 className="font-medium mb-0">{userData.name}</h5>
        </td>
        <td>
          <span className="text-muted">{userData.email}</span>
        </td>
        <td className="crud-ops">
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
            onClick={(e) => {
              let updatedList = userList.filter(function (obj) {
                return obj.id !== userData.id;
              });

              setUserList(updatedList);
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
            onClick={(e) => {
              navigate("/edit/" + userData.id);
            }}
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            type="button"
            className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"
            onClick={(e) => {
              navigate("/profile/" + userData.id);
            }}
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
