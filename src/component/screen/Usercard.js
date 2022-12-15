import Table from "react-bootstrap/Table";

function Usercard(props) {
  // console.log('card function',props);
  const { rowHeader, userData, onUpdate, onDelete, addNewModel, onView } =
    props;
  return (
    <>
      <div>
        <button className="adduserButton" onClick={addNewModel}>
          Add New
        </button>
      </div>

      <Table striped bordered hover className="userTable">
        <thead>
          <tr>
            {rowHeader.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {userData?.map((val, index) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.username}</td>
                <td>{val.phone}</td>
                <td>{val.website}</td>
                <td>
                  <button className="button" onClick={() => onView(val.id)}>
                    View
                  </button>
                  <button className="button1" onClick={() => onUpdate(val.id)}>
                    Update
                  </button>
                  <button className="button2" onClick={() => onDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default Usercard;
