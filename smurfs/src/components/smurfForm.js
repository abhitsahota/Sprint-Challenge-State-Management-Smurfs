import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/addSmurf'


const SmurfForm = props => {

    const [field, setField] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChange = e => {
        setField({
            ...field,
            [e.target.name]: e.target.value
    })}

    const handleSubmit = e => {
        e.preventDefault();
        const character = {...field, id: (props.smurfs.length) }
        props.addSmurf(character)
        setField({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name  </label>
            <input 
                type='text'
                name='name'
                value={field.name}
                onChange={handleChange}
            />
            <br />
            <label>Age : </label>
            <input 
                type='text'
                name='age'
                value={field.age}
                onChange={handleChange}
            />
            <br />
            <label>Height  </label>
            <input 
                type='text'
                name='height'
                value={field.height}
                onChange={handleChange}
            />
            <br />
            <button>Add Smurf</button>
        </form>

    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);