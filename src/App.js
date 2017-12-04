import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';
import Background from './components/Background';
import FontWeight from './components/FontWeight';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true',
      background: 'white',
      fontWeight: 'normal'
    };

    this.updateColor = this.updateColor.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateFamily = this.updateFamily.bind(this);
    this.updateEditStatus = this.updateEditStatus.bind(this);
    this.updateBackgroundColor = this.updateBackgroundColor.bind(this);
    this.updateFontWeight = this.updateFontWeight.bind(this);

  }
  // updateColor
  updateColor(val) {
    this.setState({ fontColor: val });
  }
  // updateSize
  updateSize(val) {
    this.setState({ fontSize: val });
  }
  // updateFamily
  updateFamily(val) {
    this.setState({ fontFamily: val });
  }
  // updateEditStatus
  updateEditStatus(val) {
    this.setState({ allowEdit: val });
  }

  updateBackgroundColor(val){
    this.setState({background: val})
  }

  updateFontWeight(val){
    this.setState({fontWeight: val})
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit} />
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
          <FontWeight update={this.updateFontWeight} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
          <Background update={this.updateBackgroundColor} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily} 
            background={this.state.background}
            fontWeight={this.state.fontWeight}/>
        </div>
      </div>
    )
  }
}

export default App;
