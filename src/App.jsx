import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Todo from './components/Todo'
import FilterButton from './components/FilterButton'
import Form from './components/Form'


function App(props) {
  function addTask(name){
    const newTask = {id:`todo-${nanoid()}`, name, completed: false};
    setTasks([...tasks, newTask]);
  }
  const [tasks, setTasks] = useState(props.tasks);
  const tasklist = tasks?.map((task) => 
  <Todo  key={task.id} id={task.id} name={task.name} completed={task.completed}/>);
  const tasksNoun =tasklist.length !== 1 ? "tasks": "task";
  const headingText = `${tasklist.length} ${tasksNoun} remaining`
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
          {tasklist}
      </ul>
    </div>
  );
}

export default App;

