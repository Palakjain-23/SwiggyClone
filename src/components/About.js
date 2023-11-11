import React from 'react';
import UserClass from "./UserClass";
import UserContext from '../utils/UserContext';
class About extends React.Component {
    render() {

        return(
            <div>
            <h1>about</h1>
            <div>
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=>
                    <h1>{loggedInUser}</h1>
                    }
                </UserContext.Consumer>
            </div>
            <UserClass 
            name={"palak jain class"} 
            location={"dehradun class"}/>
            </div>
            
        )
    }
}

export default About;
