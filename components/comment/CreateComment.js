import React from 'react';

export default function CreateComment({validation, value, onChange}) {
    return (
        <React.Fragment>
            <h1>CreateComment</h1>
            <textarea value={value} onChange={(e) => onChange(e.target.value)} />
            <button onClick={() => validation()}>create comment</button>   
        </React.Fragment>
    );
}