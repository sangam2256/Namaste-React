import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent constructor");
  }

   componentDidMount() {
    //console.log("parent mount");
    
  }

  render() {
    //console.log("parent render");
    
    return (
      <div>
        <h1>About</h1>
        <h2>This is Food Delivery App</h2>
        <UserClass name={"First"} location={"Mohali class"} />
      </div>
    );
  }
}

export default About;
