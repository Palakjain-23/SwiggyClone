import react from 'react';
class UserClass extends react.Component {
    constructor(props){
        super(props);
        this.state ={
           userInfo:{
            name:"dummy",
            location:"dummyinfo"
           }
        };
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Palakjain-23"); 
        const json = await data.json();
        this.setState({
            userInfo:json,
        });
    }
    componentDidUpdate(){
        console.log("update");
    }
    componentWillUnmount(){
        console.log("unmount");
    }
   render(){
    const {name,login,avatar_url}=this.state.userInfo;
    return(
        <div>
            <img src={avatar_url}/>
            <h1>Name :{name}</h1>
        <h2>location : {login}</h2>
        <h3>Hobby : </h3>
        </div>
    )
   }
}
export default UserClass;
