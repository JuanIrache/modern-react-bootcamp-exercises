import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid';

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.handleForm = this.handleForm.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }
  handleForm(newBox) {
    newBox.key = uuid();
    this.setState(st => ({ boxes: [...st.boxes, newBox] }));
  }
  deleteBox(key) {
    this.setState(st => ({ boxes: st.boxes.filter(b => b.key !== key) }));
  }
  render() {
    return (
      <div className="BoxList">
        {this.state.boxes.map(b => (
          <Box key={b.key} css={b} delete={this.deleteBox} />
        ))}
        <NewBoxForm submit={this.handleForm} />
      </div>
    );
  }
}
