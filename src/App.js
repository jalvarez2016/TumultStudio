import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './landingSite/Main';
import Navbar from './Nav/Navbar';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      page: "home"
    }
  }

  changepage= (pickedPage)=>{
    console.log(pickedPage);
    this.setState({
      page: pickedPage
    });
    console.log(this.state.page);
  }

  render(){
    return (
      <div className="App">
        <Navbar changepage={this.changepage}/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <Main/>
      </div>
    );

  }
}
