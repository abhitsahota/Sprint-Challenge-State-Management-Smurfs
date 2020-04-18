import React, { useEffect } from 'react';
import { fetchSmurfs } from '../actions/fetchSmurfs'
import { connect } from 'react-redux';

import Smurf from './smurf'

const SmurfList = props => {

    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <div>
        <h2>List of Smurfs</h2>
        {props.isFetching && <h3>Loading Smurfs...</h3>}
        {props.error && <h3>There was an error with your request. Please refresh or submit your form again.</h3>}
        {props.smurfs.map(char => (
            <Smurf key={char.id} id={char.id} name={char.name} age={char.age} height={char.height} />
        ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        error: state.error,
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);