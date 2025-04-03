import { useState } from "react";

function Task(props){
    const { handleTasks, newId } = props;

    // declaration for the new task 
    const [toDo, setToDo] = useState('');

    const addTaskHandler = (event) => {
        // prevents the page from reloading
        event.preventDefault();

        const newTaskObject = {
            task_name: toDo,
            id: newId
        }

        handleTasks(newTaskObject);
        setToDo('');
    }

    return (
        <div className="task">
            <form onSubmit={addTaskHandler}>
                <input 
                    value={toDo} 
                    placeholder="Add task here" 
                    onChange={(event) => setToDo(event.target.value)}></input>
                <button>Add Task</button>
            </form>
        </div>
    );
}

export default Task;