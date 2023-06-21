import React, { useState } from "react";

// function LoginForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     function handleEmailChange(e) {
//         setEmail(e.target.value);
//     }

//     function handlePasswordChange(e) {
//         setPassword(e.target.value);
//     }

// example Custom Hook
function useFormInputs(initialValue) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value, 
        onChange: handleChange,
    };
}

    function LoginForm() {

        const email = useFormInputs('');
        const password = useFormInputs('');

    return (
        <form>
            <div>Email</div>
            <div>
                {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
                <input type="text" {...email} />
            </div>
            <br/>
            <div>Password</div>
            <div>
                {/* <input type="password" value={password} onChange={handlePasswordChange} /> */}
                <input type="password" {...password} />
            </div>
        <p>
            <strong>
                <em>Email:</em>
            </strong>
            {email.value}<br/>
            <strong>
                <em>Password:</em>
            </strong>{''}
            {password.value}
        </p>

        </form>
    );
}

function SignupForm() {

    const email = useFormInputs('');
    const password = useFormInputs('');
    const confirmpassword = useFormInputs('');

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmpassword, setConfirmPassword] = useState('');

    // function handleEmailChange(e) {
    //     setEmail(e.target.value);
    // }

    // function handlePasswordChange(e) {
    //     setPassword(e.target.value);
    // }

    // function handleConfirmPasswordChange(e) {
    //     setConfirmPassword(e.target.value);
    // }

    return (
        <form>
            <div>Email</div>
            <div>
                {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
                <input type="text" {...email} />
            </div>
            <br/>
            <div>Password</div>
            <div>
                {/* <input type="password" value={password} onChange={handlePasswordChange} /> */}
                <input type="text" {...password} />
            </div>
            <br/>
            <div>Confirm Password</div>
            <div>
                {/* <input type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} /> */}
                <input type="text" {...confirmpassword} />
            </div>
        <p>
            <strong>
                <em>Email:</em>
            </strong>
            {email.value}<br/>
            <strong>
                <em>Password:</em>
            </strong>{''}
            {password.value}<br/>
            <strong>
                <em>Confirm Password:</em>
            </strong>{''}
            {confirmpassword.value}<br/>
        </p>

        </form>
    );
}

function App(props){
    return (
        <div className="App" style={{paddingLeft: 20}}>
            <h1>Login</h1>
            <LoginForm/>
            <hr/>
            <h1>SignUp</h1>
            <SignupForm/>
        </div>
    )
}
export default App;