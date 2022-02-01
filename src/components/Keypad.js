// Code Keypad Component Here
import React from 'react';

function handleChange () {
    console.log('Entering password...');
}

function Keypad () {
    function handleBlur (event) {
        console.log(event);
        event.target.form.reset(); //reset the input field when it's not in focus
    }
    return (
        <form>
            <input type="password" placeholder="Type your password" onChange = {handleChange} onBlur={handleBlur}/>
        </form>
    );
}

export default Keypad;