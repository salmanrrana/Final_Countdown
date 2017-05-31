import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      deadline: 'May 18, 2018',
      newDeadline: ''
    }
  }


  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }

  render(){
    return(
    <div className="App">
      <div className="header">
      <div className="title">Final Countdown<div className="specialday">{this.state.deadline}</div></div> 
      </div>
      <div className="clockarea">
      <Clock
        deadline={this.state.deadline}
      />
    </div>
      <div className="buttonarea">
      <Form inline>
        <FormControl className="Deadline" onChange={ event => this.setState({ newDeadline: event.target.value }) } placeholder="new date..." />
        <Button className="buttonDude" onClick={() => this.changeDeadline()}>Submit</Button>
      </Form>
      </div>
    </div>
    )
  }
}

export default App;
