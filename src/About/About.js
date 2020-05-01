import React from 'react'
import Mission from './Mission';

class About extends React.Component {
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
            <div>
                <div style={greetingStyle} className='about'>
                    We make games
                </div>
                
                <Mission/>
            </div>
        )
            
    }
}

export default About;
