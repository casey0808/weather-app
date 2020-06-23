import React from 'react';
import useInput from './useInput';

function Form() {
    const [email, updateEmail, resetEmail] = useInput('');
    const [name, updateName, resetName] = useInput('');

    return (
        <div>
            <p>Email is {email}</p>
            <input value={email} onChange={updateEmail}></input>
            <button onClick={resetEmail}>Submit</button>

            <p>name is {name}</p>
            <input value={name} onChange={updateName}></input>
            <button onClick={resetName}>Submit</button>
        </div>
    )
} 

export default Form;
