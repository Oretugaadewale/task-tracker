import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
// import { HiBellAlert } from "@react-icons/all-files/fa/HiBellAlert";
// import { HiBellAlert } from "react-icons/HiBellAlert";

const Task = ({ task, onDelete, onToggle }) => {
  //the onclick was passed on the task div because on the click of the div it should toggle
  // The task is to check the reminder in the class name and the color is green
  return (
    <div
      className={`task ${task.reminder ? "reminder" : " "}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
