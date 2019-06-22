import React, { Component } from 'react';
import './Task.css';

export default class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: this.props.text
    };

    this.handleCrossout = this.handleCrossout.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleCrossout() {
    this.props.cross(this.props.id);
  }
  handleEdit() {
    this.props.edit(this.props.id);
  }
  handleDelete() {
    this.props.delete(this.props.id);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSave() {
    this.props.save(this.props.id, this.state.text);
  }

  render() {
    let textSpan = (
      <span onClick={this.handleCrossout} className={this.props.crossed ? 'crossed' : ''}>
        {this.state.text}
      </span>
    );

    let editA = (
      <a href="#!" onClick={this.handleEdit}>
        Edit
      </a>
    );

    if (this.props.editing) {
      textSpan = <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />;
      editA = (
        <a href="#!" onClick={this.handleSave}>
          Save
        </a>
      );
    }

    return (
      <div className="Task">
        {textSpan} {editA}{' '}
        <a href="#!" onClick={this.handleDelete}>
          Delete
        </a>
      </div>
    );
  }
}
