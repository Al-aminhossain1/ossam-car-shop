import React from 'react';

const Question = () => {
    return (
        <div>
            <h3>Question 01: State VS Props
            </h3>
            <p>State:  The state of the website is changeable and may change over time. And used to hold data. When a user visits a website, he can change the status if he wants, but not again. <br /><br />
                Props:We pass as props to pass data to a child component through a component. Props remain unchanged Props can be read. Its value cannot be changed. As props we can send data inside hardcodes, we can send data dynamically and we can also send functions.</p>
            <h3>Question 02: Usestate</h3>
            <p>Usetate is one of the hooks in react. Through which the functional component is placed in the state variable. Provides a variable with a function to determine the value of the current state by changing the value of the initial state with the Usestate.</p>
        </div>
    );
};

export default Question;