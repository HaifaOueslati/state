import React,{ Component } from 'react';
import './App.css';
import  Profile from "./Components/Profile.js" 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false};
  }
  toggleVisibility = () => {
    this.setState({isVisible: !this.state.isVisible})
  }
  render () {
    return(
      <div className="App">
        <button  className='btn' onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isVisible && <Profile /> }
      </div>
    )
  }
}
export default App;
