import React, { useState, useEffect } from "react";

function App5(props) {
    const [userId, setUserId] = useState('1');
    const [data, setData] = useState([]);

    useEffect (() => {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log('DATA', data);
            setData(data);
        });
    }, [userId]);

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    });

    function onMouseMove(event) {
        console.log(event.clientX);
    }

    return (
        <div className="App" style={{paddingLeft: 20}}>
            <h1>App</h1>
            <button onClick={() => setUserId('2')}>Change user id to 2</button>
            {data.map((user)=> (
                <div>
                    <p>{user.title}</p>
                    </div>
            ))}
        </div>
    );
}

export default App5;