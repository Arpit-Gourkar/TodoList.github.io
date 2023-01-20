import { IconButton, Button } from "@mui/material";

import React, { useState } from "react";
import "../Components/todo.css";

const TodoList = () => {
  const [activity, setActivity] = useState(" ");
  const [listData, setListData] = useState([]);

  const addData = (i) => {
    setListData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  };

  function removeData(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(updatedListData);
  }

  return (
    <>
      <div className="Main_div">
        <div className="Center_div">
          <div className="head-div">
            <h1 variant="h3" className="heading">
              Todo List
            </h1>
            <h1 variant="h3" className="heading">
              Todo List
            </h1>
          </div>

          <div className="input-box">
            <input
              type="text"
              onChange={(e) => setActivity(e.target.value)}
              value={activity}
              placeholder="Enter Your Todos..."
            />
            <Button onClick={addData} variant="contained">
              Add
            </Button>
          </div>

          <div className="output">
            {listData != [] &&
              listData.map((Data, i) => {
                return (
                  <>
                    <div key={i} className="outinner">
                      <div className="listdata">{Data}</div>
                      <div className="Remove-div">
                        <Button
                          onClick={() => removeData(i)}
                          variant="contained"
                        >
                          Delte
                        </Button>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
