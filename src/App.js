import { useState } from "react";

import AddTasks from "./Components/AddTask";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(id);
  };

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  // we wanna change reminder to true or false
  //because we are dealing with reminder thats why we copy everything task and then set reminder to opposite
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
// on add inside header allow the form to show and hide once clicked it
  return (
    <div className="container">
      <Header 
      onAdd={()=> setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}/>
     {showAddTask && <AddTasks onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "NO TASK TO SHOW"
      )}
    </div>
  );
}

export default App;
