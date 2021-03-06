import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "5 February at 14:30",
        reminder: true,
    },
    {
        id: 2,
        text: "Meeting at school",
        day: "6 February at 13:30",
        reminder: true,
    },
    {
        id: 3,
        text: "Food shopping",
        day: "5 February at 14:30",
        reminder: false,
    },
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

}

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete= {deleteTask} onToggle={toggleReminder}/>
      ) : (
        "No Tasks To Show"
      )}  
    </div>
  );
}

export default App;

