import './List.css'

import { Button, Modal } from "react-bootstrap";
import Card, { AddNewCard } from "./Card";
import React, { useEffect, useState } from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function List(props) {
  const { StoredData, Heading, LabelName } = props;
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {console.log("refresh");
  console.log(StoredData);
    setData(StoredData);
  }, [refresh]);
  const [data, setData] = useState([]);
  const [dataforview, dataForView] = useState("");
 
  // const [sname, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [imgsrc, setUrl] = useState("");
  // const [about, setabout] = useState("");
  // const [rating, setrating] = useState("");
  // const [releseDate, setreleseDate] = useState("");
  // const [type, settype] = useState("");
  const [indexNumber, setIndex] = useState("");
  const [addItemData, setAddItemData] = useState({
    sname: "",
    title: "",
    imgsrc: "",
    about: "",
    rating: "",
    releseDate: "",
    type: "",
  });
  const [update, setItemUpdate] = useState({
    sname: "",
    title: "",
    imgsrc: "",
    about: "",
    rating: "",
    releseDate: "",
    type: "",
  });

  

  //Modal show and hide
  const [showAddNew, setShow] = useState(false);
  const [showUpdate, updateItem] = useState(false);
  const [showView, viewItemInfo] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdateClose = () => updateItem(false);
  const handleUpdateShow = () => updateItem(true);
  const handleViewClose = () => viewItemInfo(false);
  const handleViewShow = () => viewItemInfo(true);
  // modal
  const handleChangesAddItem = (e) => {
    const { value, id } = e.target; // object destructuring
    setAddItemData((preValue) => {
      return {
        ...preValue, //spred operator
        [id]: value,
      };
      // if (id === "sname") {
      //   return {
      //     sname: value,
      //     title: preValue.title,
      //     imgsrc: preValue.imgsrc,
      //     about: preValue.about,
      //     rating: preValue.rating,
      //     releseDate: preValue.releseDate,
      //     type: preValue.type,
      //   };
      // }
    });
  };

  const handleChangesUpdateItem = (e) => {
    const { value, id } = e.target;
    setItemUpdate((preValue) => {
      return {
        ...preValue,
        [id]: value,
      };
    });
  };

  // const handleChangeName = (e) => {
  //   setName({ sname, sname: e.target.value });
  // };
  const onSubmit = () => {
    let my = [];
    data.push(addItemData);
    my = data;
    setData(my);
    setAddItemData({});
    handleClose();
  };

  const OpenModal = () => {
    handleShow();
  };

  const OpenUpdateModal = (dd) => {
    setIndex(dd);
    setItemUpdate(data[dd]);
    handleUpdateShow();
  };


  const onUpdate = () => {
    const updatedData = [];
    for (let i = 0; i < data.length; i++) {
      if (i === indexNumber) {
        data[i] = update;
      }
      updatedData.push(data[i]);
    }
    console.log(data);
    setData(updatedData);
    console.log(data, "after update");
    handleUpdateClose();
  };

  const OpenViewModal = (index) => {
    console.log(dataforview);
    dataForView(data[index]);
    console.log(dataforview);
    handleViewShow();
  };

  const handleDelete = (element) => {
    let finaldata = [];
    data.map((item, index) => {
      if (index != element) {
        finaldata.push(item);
      }
    });
    setData(finaldata);
  };
  return (
    <>
      <h1
        className="heading_style"
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        {Heading}
      </h1>
      {data?.map((val, index) => {
        return (
          <Card
            key={index}
            index={index}
            sname={val.sname}
            imgsrc={val.imgsrc}
            title={val.title}
            link={val.link}
            handleDelete={handleDelete}
            OpenViewModal={OpenViewModal}
            OpenUpdateModal={OpenUpdateModal}
          />
        );
      })}

      <AddNewCard OpenModal={OpenModal} name="dddd" />

      <Modal show={showAddNew} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW ITEM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="sname"
            label={"Enter " + LabelName.sname}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="text" placeholder="Enter Name" />
          </FloatingLabel>
          <FloatingLabel
            controlId="title"
            label={"Enter " + LabelName.title}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="text" placeholder="Enter Available On" />
          </FloatingLabel>
          <FloatingLabel
            controlId="imgsrc"
            label={"Enter " + LabelName.imgsrc}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="url" placeholder="Enter Image Url" />
          </FloatingLabel>
          <FloatingLabel
            controlId="about"
            label={"Enter " + LabelName.about}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="text" placeholder="Enter About" />
          </FloatingLabel>
          <FloatingLabel
            controlId="rating"
            label={"Enter " + LabelName.rating}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control
              type="number"
              min="1"
              max="10"
              placeholder="Enter IMDB Rating"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="releseDate"
            label={"Enter " + LabelName.releseDate}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="date" placeholder="Enter Release Date" />
          </FloatingLabel>
          <FloatingLabel
            controlId="type"
            label={"Enter " + LabelName.type}
            className="mb-3"
            onChange={handleChangesAddItem}
          >
            <Form.Control type="text" placeholder="Enter Category" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <button className="button" onClick={onSubmit}>
            Submit
          </button>
          <button className="button2" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUpdate} onHide={handleUpdateClose}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE ITEM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="sname"
            label={"Enter " + LabelName.sname}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={update.sname}
              onChange={handleChangesUpdateItem}
              placeholder={"Enter " + LabelName.sname}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="title"
            label={"Enter " + LabelName.title}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={update.title}
              onChange={handleChangesUpdateItem}
              placeholder={"Enter " + LabelName.title}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="imgsrc"
            label={"Enter " + LabelName.imgsrc}
            className="mb-3"
          >
            <Form.Control
              type="url"
              value={update.imgsrc}
              onChange={handleChangesUpdateItem}
              placeholder={"Enter " + LabelName.imgsrc}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="about"
            label={"Enter " + LabelName.about}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={update.about}
              onChange={handleChangesUpdateItem}
              placeholder={"Enter " + LabelName.about}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="rating"
            label={"Enter " + LabelName.rating}
            className="mb-3"
          >
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={update.rating}
              onChange={handleChangesUpdateItem}
              placeholder={"Enter " + LabelName.rating}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="releseDate"
            label={"Enter " + LabelName.releseDate}
            className="mb-3"
          >
            <Form.Control
              type="date"
              value={update.releseDate}
              placeholder={"Enter " + LabelName.releseDate}
              onChange={handleChangesUpdateItem}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="type"
            label={"Enter " + LabelName.type}
            className="mb-3"
          >
            <Form.Control
              type="text"
              value={update.type}
              placeholder={"Enter " + LabelName.type}
              onChange={handleChangesUpdateItem}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleUpdateClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showView} onHide={handleViewClose}>
        <Modal.Header closeButton>
          <Modal.Title>ITEM DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cardsView">
          <div className="cardscss ">
            <br />
            <div>
              <img src={dataforview.imgsrc} alt="" className="card_imgView" />
              <br />
              <br />
              <div className="table">
                <div>
                  <b>{LabelName.about}</b>
                  <span className="card_categoryView">
                    {dataforview?.about}
                  </span>
                </div>
                <br />
                <Table striped>
                  <tbody>
                    <tr>
                      <td>
                        <b>{LabelName.sname}</b>
                      </td>
                      <td>{dataforview?.sname}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{LabelName.rating}</b>
                      </td>
                      <td>{dataforview?.rating}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{LabelName.releseDate}</b>
                      </td>
                      <td>{dataforview?.releseDate}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{LabelName.type}</b>
                      </td>
                      <td>{dataforview?.type}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{LabelName.title}</b>
                      </td>
                      <td>{dataforview?.title}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <br />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="button2" onClick={handleViewClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default List;


