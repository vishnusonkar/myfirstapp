import "./Card.css";

function Card(props) {
  // console.log('card function',props);
  return (
    <>
      <div className="cards ">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h6 className="card_title">{props.sname}</h6>
            <button
              className="button"
              onClick={() => props.OpenViewModal(props.index)}
            >
              View info
            </button>
            <button
              className="button1"
              onClick={() => props.OpenUpdateModal(props.index)}
            >
              Update
            </button>
            <button
              className="button2"
              onClick={() => props.handleDelete(props.index)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}




function AddNewCard(props) {
const {OpenModal} =props
  return (
    <>
      <div className="cards" onClick={() => OpenModal()}>
        <div className="card">
          <h5 className="myH3">ADD NEW ITEM</h5>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4546/4546829.png"
            alt=""
            className="card_img1"
          />
        </div>
      </div>
    </>
  );
}

export default Card;
export { AddNewCard };
