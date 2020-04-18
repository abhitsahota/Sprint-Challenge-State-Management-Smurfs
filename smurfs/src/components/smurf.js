import React from 'react';

export const Smurf = props => {
    console.log(props)
    return (
        <div>
            <p>{`${props.name} is a ${props.age} year old ${props.height} tall smurf/smurfette`}</p>
            <br />
            <br />
        </div>
    )
}