import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid';
import './BoxList.css';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.handleForm = this.handleForm.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }
  handleForm(newBox) {
    newBox.id = uuid();
    this.setState(st => ({ boxes: [...st.boxes, newBox] }));
  }
  deleteBox(id) {
    this.setState(st => ({ boxes: st.boxes.filter(b => b.id !== id) }));
  }
  render() {
    return (
      <div className="BoxList">
        <h1>Color Box Maker</h1>
        <div className="BoxList-boxes">
          {this.state.boxes.map(b => (
            <Box key={b.id} {...b} delete={this.deleteBox} />
          ))}
        </div>
        <NewBoxForm submit={this.handleForm} />
      </div>
    );
  }
}
