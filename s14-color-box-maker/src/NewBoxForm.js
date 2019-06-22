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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
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
      <form className="NewBoxForm" onSubmit={this.handleSubmit}>
        <label>
          Width&nbsp;
          <input type="text" placeholder="px" name="width" value={width} onChange={this.handleChange} />
        </label>
        <label>
          Height&nbsp;
          <input type="text" placeholder="px" name="height" value={height} onChange={this.handleChange} />
        </label>
        <label>
          Background color&nbsp;
          <input type="text" name="backgroundColor" value={backgroundColor} onChange={this.handleChange} />
        </label>
        <button>Add</button>
      </form>
    );
  }
}
