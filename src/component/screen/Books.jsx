import React, { useEffect, useState } from "react";

function Books() {
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
   
  }, []);
  return (
    <>
      <div>
        <div className="cardHome">
          <div className="card-body">
            <div className="myself">
              We will be releasing a Collection of Books soon!! Stay tuned!!!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Books;
