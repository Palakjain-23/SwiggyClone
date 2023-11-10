import React from 'react';
import UserClass from "./UserClass";
class About extends React.Component {
    render() {
        return(
            <div>
            <h1>about</h1>
            <UserClass name={"palak jain class"} location={"dehradun class"}/>
            </div>
            
        )
    }
}

export default About;
