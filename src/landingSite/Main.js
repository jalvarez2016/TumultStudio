import React from 'react'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render () {

        let greetingStyle ={
            minHeight: "100vh",
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "200%"
        }

        return (
            <div style={greetingStyle} className='greeting'>
                We are Tumult Studio
            </div>
        )
            
    }
}

export default Main;
