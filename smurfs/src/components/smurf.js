import React, { useState } from 'react';
import { deleteSmurf } from '../actions/deleteSmurf'
import { editSmurf } from '../actions/editSmurf'
import { connect } from 'react-redux';


const Smurf = props => {

    const [name, setName] = useState('');

    const handleChange = e => {
        setName(e.target.value)
    }

    const handleSubmit = e => {
        const characterNew = { 
            name: name, 
            id: props.id }
        props.editSmurf(characterNew)
        setName('')
    }


    return (
        <div>

            <p>{`${props.name} is a ${props.age} year old ${props.height} tall smurf/smurfette`}</p>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Edit name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
                <button>Edit Name</button>
            </form> 

            <form><button onClick={() => props.deleteSmurf(props.id)}>Delete</button></form>

            <br />
            <br />
        </div>
    )
}

export default connect(null, { deleteSmurf, editSmurf })(Smurf);