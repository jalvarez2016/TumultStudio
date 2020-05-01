import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './landingSite/Main';
import Navbar from './Nav/Navbar';
import About from './About/About';
import Games from './Games/Games';
import Contact from './Contact/Contact';

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
  }

  render(){
    if(this.state.page == "home"){
      return (
        <div className="App">
          <Navbar changepage={this.changepage}/>
          {/* <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header> */}
          <Main/>
        </div>
      );
    } else if(this.state.page == "about"){
      return (
        <div className="App">
          <Navbar changepage={this.changepage}/>
          <About/>
        </div>
      )
    } else if(this.state.page == "games"){
      return (
        <div className="App">
          <Navbar changepage={this.changepage}/>
          <Games/>
        </div>
      )
    } else if(this.state.page == "contact"){
      return (
        <div className="App">
          <Navbar changepage={this.changepage}/>
          <Contact/>
        </div>
      )
    }

  }
}
