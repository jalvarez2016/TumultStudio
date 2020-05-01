import React from 'react'

class Mission extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render () {

        let greetingStyle ={
            minHeight: "200px",
            backgroundColor: "white",
            fontSize: "100%",
            paddingLeft: "80px",
            paddingRight: "20px",
            textAlign: "left",
            paddingTop: "80px"
        }

        return (
            <div style={greetingStyle} className='mission'>
                <h1>Our mission</h1>
                <p> Here at Tumult Studio, we make games that are enjoyable. We value story in our games
                    and hope to provide engaging experiences. We make games in the hope that they leave a lasting
                    impression that players will look back on.
                </p>
            </div>
        )
            
    }
}

export default Mission;
