import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    //console.log(this.props.name+"child constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name+"child mount");
    const data = await fetch("https://api.github.com/users/sangam2256");
    const json = await data.json();

    this.setState({
        userInfo:json,
    })
  }

   componentDidUpdate(){

   }

   componentWillUnmount(){
    
   }

  render() {
    
    const { name ,location,avatar_url } = this.state.userInfo;
    //console.log(this.props.name+"child render");

    return (
      <div className="user-card">
        <img className="about-img" src={avatar_url}></img>
        <h3>Name:-{name}</h3>
        <h3>Location:-{location}</h3>
        <h3>Contact :-@sangam18</h3>
      </div>
    );
  }
}

export default UserClass;
