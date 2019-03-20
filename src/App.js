import React, { Component } from 'react';

import Front from './components/Front'
import Back from './components/Back'
import Right from './components/Right'
import Left from './components/Left'
import Top from './components/Top'
import Bottom from './components/Bottom'

import './App.css'

class App extends Component {
  state = {
    selected: "Front"
  }
  ClickEvent = (e) => {
    this.setState({
      selected: e.target.value
    })
    
    
  }
  render() {
    const { selected } = this.state
    return (
      <>
        <nav>
          <button value="Front" onClick={this.ClickEvent}>Front</button>
          <button value="Right" onClick={this.ClickEvent}>Right</button>
          <button value="Back" onClick={this.ClickEvent}>Back</button>
          <button value="Left" onClick={this.ClickEvent}>Left</button>
          <button value="Top" onClick={this.ClickEvent}>Top</button>
          <button value="Bottom" onClick={this.ClickEvent}>Bottom</button>
        </nav>
        <div className="scene">
          <div className={`cube ${selected}`}>
            <Front name={"cubeFace cubeFaceFront"} />
            <Back name={"cubeFace cubeFaceBack"} />
            <Right name={"cubeFace cubeFaceRight"}/>
            <Left name={"cubeFace cubeFaceLeft"} />
            <Top name={"cubeFace cubeFaceTop"} />
            <Bottom name={"cubeFace cubeFaceBottom"} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
