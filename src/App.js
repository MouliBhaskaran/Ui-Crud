import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import Profile from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import EditProfile from "./Pages/EditProfile";

const users = [
  {
    name: "Mouli",
    email: "moulibhaskaran@gmail.com",
    pic: "https://i.pinimg.com/564x/08/a9/65/08a965f8536be44318d9729c27855eab.jpg",
    id: "1",
  },
  {
    name: "Anitha",
    email: "sherly_anitha@hotmail.com",
    pic: "https://i.pinimg.com/564x/2c/a7/ad/2ca7adba878a3651906706e8e603fa1c.jpg",
    id: "2",
  },
  {
    name: "Karthi",
    email: "Karthi@gmail.com",
    pic: "https://i.pinimg.com/736x/cd/5b/50/cd5b503bfd0c288d59fd2a96fb4c4017.jpg",
    id: "3",
  },
  {
    name: "Nagamani",
    email: "nagamani@gmail.com",
    pic: "https://i.pinimg.com/564x/84/bd/d4/84bdd4ddb0242b954dd6c9e2988067cf.jpg",
    id: "4",
  },
  {
    name: "Govindaraaj",
    email: "Govindaraaj@gmail.com",
    pic: "https://i.pinimg.com/564x/2a/b0/33/2ab033c95c303e9138543faeae31569e.jpg",
    id: "5",
  },
];

function App() {
  const [userList, setUserList] = useState(users);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                users={userList}
                userList={userList}
                setUserList={setUserList}
              />
            }
          ></Route>
          <Route
            path="/adduser"
            element={<AddUser userList={userList} setUserList={setUserList} />}
          ></Route>
          <Route
            path="/edit/:id"
            element={<EditUser userList={userList} setUserList={setUserList} />}
          ></Route>
          <Route
            path="/profile/:id"
            element={<Profile userList={userList} />}
          ></Route>
          <Route
            path="/editprofile/:id"
            element={
              <EditProfile userList={userList} setUserList={setUserList} />
            }
          ></Route>

          <Route path="**" exact element={<h2>404</h2>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
