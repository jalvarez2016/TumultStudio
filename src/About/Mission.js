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
                    impression that players will look back on. When we say we want you to smile, we mean those 
                    smiles that actually mean something not those fake ones that society tells you that you 
                    should wear. Have fun!
                </p>
                <h1>Social Impact</h1>
                <p> We wish to create impact through subtly. Why? Cause it's fun to make people feel things,
                    specifically making people feel bad about something tha's not real but illicts real human emotion,
                    and the great thing about that is that these tend to stick with you a lot more than other emotions.
                    Don't worry though, we try end things off on a happy not cause the world can be tough so we try to
                    do our part.
                </p>
            </div>
        )
            
    }
}

export default Mission;
