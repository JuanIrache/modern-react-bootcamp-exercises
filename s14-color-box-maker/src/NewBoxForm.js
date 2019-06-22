import React, { Component } from 'react';
import './NewBoxForm.css';

export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: '',
      backgroundColor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({
      width: '',
      height: '',
      backgroundColor: ''
    });
  }
  render() {
    const { width, height, backgroundColor } = this.state;
    return (
      <form className="NewBoxForm">
        <label>
          Width
          <input type="text" placeholder="px" name="width" value={width} onChange={this.handleChange} />
        </label>
        <label>
          Height
          <input type="text" placeholder="px" name="height" value={height} onChange={this.handleChange} />
        </label>
        <label>
          Background color
          <input type="text" name="backgroundColor" value={backgroundColor} onChange={this.handleChange} />
        </label>
        <button onClick={this.handleClick}>Add</button>
      </form>
    );
  }
}
