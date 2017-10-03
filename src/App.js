import React, { Component } from 'react';
import DocMenu from "./components/DocMenu"
import DocPage from "./components/DocPage"
import { findById } from './components/Info';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ activeItem : "Introduction"}
  }

  handleClick=(name)=>{
    this.setState({
      activeItem: name
    })
  }

  render() {
    const info = findById( this.state.activeItem);
    return (
      <div>
        <DocMenu handleItemClick={this.handleClick}/>
        <DocPage
          name = {info.id}
          description={info.description}
          propData={info.props}
          examples={info.examples}
          definitions={info.definitions}
          text={info.text}
        />
      </div>
    );
  }
}

export default App;
