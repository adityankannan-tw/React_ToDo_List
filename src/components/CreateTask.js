import React, { Component } from "react";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.CreateTask(this.state.task);
    this.setState({ task: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter task name"
          value={this.state.task}
          onChange={this.handleChange}
          autoFoucs
        />
        <button className="add" type="submit">
          Add
        </button>
      </form>
    );
  }
}
export default CreateTask;
