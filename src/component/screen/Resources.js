import "./Resources.css"

import { Button, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Usercard from "./Usercard";
import axios from "axios";

function User() {
    const [userData, SetUserData] = useState([]);
     const [showAddNew, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        console.log("/users", response);
        SetUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("userData", userData);
const onView=(e)=>{
console.log("onView", e);
}
const addNewModel=()=>{
    handleShow();
}
const onUpdate=()=>{
  console.log("update button");
}
  const onDelete = (id) => {
    let finaldata = [];
    userData.map((item, index) => {
      if (index != id) {
        finaldata.push(item);
      }
    });
    SetUserData(finaldata);
console.log(id);
    //   axios
    //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((res) => {
    //       console.log("Deleted Successfully");
    //       alert("Deleted Successfully");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       alert(err);
    //     });
  };
   const rowHeader = ["ID", "Name", "User Name", "Phone No", "Web Site","Action"];
  return (
    <>
      <Usercard
        rowHeader={rowHeader}
        userData={userData}
        onUpdate={onUpdate}
        onDelete={onDelete}
        addNewModel={addNewModel}
        onView={onView}
      />
    </>
  );
}
function Comments() {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => {
        console.log("/comments", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Comments soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
      {/* <Usercard
            key={val.id}
            index={index}
            name={val.name}
            phone={val.phone}
            username={val.username}
            website={val.website}
            email={val.email}
            company={val.company}
            address={val.address}
          /> */}
    </>
  );
}
function Posts() {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts`
      )
      .then((response) => {
        console.log("/posts",response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Posts soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Albums() {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => {
        console.log("/albums", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Albums soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Todos() {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((response) => {
        console.log("/todos", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Todos soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Photos() {
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => {
        console.log("/photos", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Photos soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { User, Comments, Posts, Albums, Todos, Photos };
