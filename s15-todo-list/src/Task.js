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

    let editA = <i className="fas fa-edit" onClick={this.handleEdit} />;

    const deleteA = <i className="fas fa-trash-alt" onClick={this.handleDelete} />;

    if (this.props.editing) {
      textSpan = <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />;
      editA = <i className="fas fa-save" onClick={this.handleSave} />;
    }

    return (
      <div className="Task">
        <div className="Task-text">{textSpan}</div>
        <div className="Task-icons">
          <div className="Task-icon">{editA}</div>
          <div className="Task-icon">{deleteA}</div>
        </div>
      </div>
    );
  }
}
