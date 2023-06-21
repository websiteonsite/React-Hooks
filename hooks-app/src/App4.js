import React, { useState } from "react";

function App4() {
    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function getFormData(e) {
        console.log(name, tnc, interest);
        e.preventDefault();
    }

    return(
        <div className="App">
            <h1>Handle form in react</h1> 
            <form onSubmit={getFormData}>
                <input type="text" placeholder="enter name" value={name} onChange={(e)=>
                setName(e.target.value)} /> <br/>

                <select onChange={(e) => setInterest(e.target.value)} >
                    <option>Select Options</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select> <br/> <br/>

                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
                    <span>Accept terms and Conditions</span>
                <br/>
                <br/>
                <button type="submit">Submit</button>
                <button type="clear">Clear</button>
                </form>
                </div>

    );
    
}

export default App4;