import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  CreateTask = (task) => {
    if (task.trim() === "") {
      alert("Task can't be empty");
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  toggleTask = (taskid) => {
    const taskItem = tasks[taskid];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  deleteTask = (taskid) => {
    tasks.splice(taskid, 1);
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  editTask = (taskid, task) => {
    const taskItem = tasks[taskid];
    taskItem.task = task;
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  render() {
    return (
      <div className="main">
        <h1>Todos</h1>
        <div className="content">
          <CreateTask CreateTask={this.CreateTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
export default Main;
