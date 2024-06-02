
import styles from './todo.module.css'
import {useState} from 'react'

function TodoList() {
    const [tasks,setTasks] = useState(["Eat","Drink","Code","Sleep"])
    const [newTask,setNewTask] = useState("")

    function handleInputChange(e) {
        setNewTask(e.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "") {
            document.querySelector("#Input").value = ""
            setTasks(task => [...task,newTask])
        }
    }
    function deleteTask(index) {
        setTasks(tasks.filter((element,i) => i!==index))
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            setTasks(newTasks);
        }
    }
    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const newTasks = [...tasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            setTasks(newTasks);
        }

    }

    return (
        <div className={styles.todoList}>
            <h1>ToDo List</h1>

            <div>
                <input type="text"
                placeholder='Enter a Task...'
                id="Input"
                
                onChange={handleInputChange}
                />

                <button 
                    className={styles.addButton}
                    onClick={addTask}
                >Add</button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span className={styles.text}>{task}</span>
                        <button className={styles.deleteBtn} onClick={() => deleteTask(index)}>🔪</button>
                        <button className={`${styles.moveBtn} ${styles.upBtn}`} onClick={() => moveTaskUp(index)}>👆</button>
                        <button className={`${styles.moveBtn} ${styles.downBtn}`} onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList