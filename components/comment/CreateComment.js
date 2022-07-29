import React, { useContext } from 'react';
import { AuthContext } from 'layouts/AuthContext';

export default function CreateComment({validation, value, onChange}) {
    const { loggedIn } = useContext(AuthContext)

    if(loggedIn) {
        return (
            <React.Fragment>
                <h1>CreateComment</h1>
                <textarea value={value} onChange={(e) => onChange(e.target.value)} />
                <button onClick={() => validation()}>create comment</button>   
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}