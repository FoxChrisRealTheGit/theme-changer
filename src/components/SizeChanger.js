import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  // componentWillReceiveProps
  componentWillReceiveProps(props){
    this.setState ({allowEdit: props.allowEdit})
  }

  render() {
    return (
      <select className="dropDownContainer"
      onChange ={(e)=> this.props.update( Number(e.target.value))}
      disabled = {this.state.allowEdit === "false"}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
        <option value="20"> 20 </option>
        <option value="25"> 25 </option>
        <option value="72"> 72 </option>
      </select>
    )
  }
}