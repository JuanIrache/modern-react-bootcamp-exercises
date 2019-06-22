import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ text: '' });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form className="NewTaskForm" onSubmit={this.handleSubmit}>
        <input type="text" name="text" placeholder="What do you want to do?" value={this.state.text} onChange={this.handleChange} />
        <button>Add</button>
      </form>
    );
  }
}
