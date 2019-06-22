import React, { Component } from 'react';
import uuid from 'uuid';
import Task from './Task';
import NewTaskForm from './NewTaskForm';
import './TaskList.css';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { text: 'do the laundry', id: 1, editing: false, crossed: false },
        { text: 'do the dishes', id: 2, editing: false, crossed: false }
      ]
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.crossTask = this.crossTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }
  addTask(task) {
    task.id = uuid();
    this.setState(st => ({ tasks: [...st.tasks, task] }));
  }
  deleteTask(id) {
    this.setState(st => ({ tasks: st.tasks.filter(t => t.id !== id) }));
  }
  editTask(id) {
    this.setState(st => ({ tasks: st.tasks.map(t => (t.id !== id ? t : { ...t, editing: !t.editing })) }));
  }
  crossTask(id) {
    this.setState(st => ({ tasks: st.tasks.map(t => (t.id !== id ? t : { ...t, crossed: !t.crossed })) }));
  }
  updateTask(id, text) {
    this.setState(st => ({ tasks: st.tasks.map(t => (t.id !== id ? t : { ...t, editing: false, text })) }));
  }

  render() {
    return (
      <div className="TaskList">
        <h1 className="TaskList-title">To-Do List</h1>
        <div className="TaskList-boxes">
          {this.state.tasks.map(t => (
            <Task key={t.id} {...t} delete={this.deleteTask} cross={this.crossTask} edit={this.editTask} save={this.updateTask} />
          ))}
        </div>
        <NewTaskForm add={this.addTask} />
      </div>
    );
  }
}
