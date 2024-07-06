import React from "react";
import { useState } from "react";
import exitsound from "../sounds/close.mp3";
import complete from "../sounds/complete.mp3";

export default function Task(props) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [opacity, setOpacity] = useState(0);

  const handletick = () => {
    setOpacity(opacity === 0 ? 0.9 : 0.9);
  };

  const handleclick = (event) => {
    const exit = new Audio(exitsound);
    exit.play();

    event.target.closest(".task").remove();
    props.setTotal(props.total - 1);
    isButtonDisabled === true
      ? props.setComplete(props.complete - 1)
      : props.setComplete(props.complete);
  };

  const handlecomplete = (event) => {
    const completed = new Audio(complete);
    completed.play();

    setStatus("Completed");
    event.target.closest(".task").style.background = "#21e60b";
    // event.target.closest(".task").style.opacity = "0.6"
    handletick();
    props.setComplete(props.complete + 1);
    setIsButtonDisabled(true);
  };

  return (
    <div>
      <div class="task" style={{ background: props.color }}>
        <div className="check" style={{ opacity }}>
          <i className="fa fa-check"></i>
        </div>
        <div class="top">
          <div class="modify">
            <button
              disabled={isButtonDisabled}
              onClick={handlecomplete}
              class="complete btn btn-success"
            >
              {status === "Pending" ? "Complete" : "Completed"}
            </button>
            <button 
              class="edit btn btn-danger" 
              onClick={props.editTask}
              disabled={isButtonDisabled}
              >
                <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
          </div>
          <button class="delete" onClick={handleclick}>
            <i
              class="fa-solid fa-circle-xmark"
              style={{ color: "#ff0000" }}
            ></i>
          </button>
        </div>
        <div class="middle">
          <h3>{props.title}</h3>
          <p> {props.paragraph}</p>
        </div>
        <div
          class="bottom"
          style={{ color: status === "Pending" ? "black" : "white" }}
        >
          Status :{" "}
          <span class="status">
            <b>{status + " "}</b>
            <i
              class={
                status === "Pending" ? "fa-regular fa-clock" : "fa fa-check"
              }
              style={{ color: "#ff0000 " }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
}
