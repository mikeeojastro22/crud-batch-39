import { useState } from 'react';
import './App.css';
import data from './assets/task-list.json';
import Task from './components/Task';

function App() {

  const [tasks, setTasks] = useState(data); // data is an array of objects/tasks
  const [count, setCount] = useState(tasks.length);

  const handleTasks = (newTask) => {
    // newTask = user input which we will get from the Task component
    // updating the id
    const newCount = count + 1;
    setCount(newCount);

    // [...prevtasks, newTask] - spread operator - creates a new array that contains the previous tasks and the newly created task
    setTasks((prevtasks) => [...prevtasks, newTask]);
  }

  const handleDeleteTask = (taskId) => {
    // filter - matches the condition then it will return the element if the condition is true
    // setTasks - function binded to tasks
    // prevtasks = tasks
    // filter - creates a new array
    // task - pertains to each element of tasks
    // we want to exclude the task with taskId equal to taskId/deleting what the user wants to delete
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== taskId));
  }

  return (
    <div className="App">
      {
        tasks.map((task) => {
          return (
            <div key={task.id}> 
              <span>{task.task_name}</span>
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          );
        })
      }

      <Task handleTasks={handleTasks} newId={count} />
    </div>
  );
}

export default App;
