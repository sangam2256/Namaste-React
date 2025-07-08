import { useState } from "react";

const User = ({name})=>{
    const [count] = useState(0);
    return(
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h3>Name:-{name}</h3>
            <h3>Location:-Mohali</h3>
            <h3>Contact :-@sangam18</h3>
        </div>
    )
}

export default User;