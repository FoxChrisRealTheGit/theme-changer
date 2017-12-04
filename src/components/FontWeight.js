import React, {Component} from 'react';

export default class FontWeight extends Component{
    constructor(props){
    super(props);
    this.state ={
        allowEdit: this.props.allowEdit
    }
    
}

componentWillReceiveProps(props){
    this.setState({allowEdit: props.allowEdit})
}

render(){
    return(
        <select className="dropDownContainer"
        onChange={(e) => this.props.update(e.target.value)}
        disabled={this.state.allowEdit === "false"}>
        <option value="normal"> Normal </option>
        <option value="bold"> Bold </option>
      </select>
    )
}

}