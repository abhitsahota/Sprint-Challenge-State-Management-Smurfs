import React from 'react';
import { deleteSmurf } from '../actions/deleteSmurf'
import { connect } from 'react-redux';


export const Smurf = props => {

    return (
        <div>
            <p>{`${props.name} is a ${props.age} year old ${props.height} tall smurf/smurfette`}</p>           
            <form><button onClick={() => props.deleteSmurf(props.id)}>Delete</button></form>
            <br />
            <br />
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurf);