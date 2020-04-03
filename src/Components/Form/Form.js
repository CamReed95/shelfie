import React from 'react';

export default class Form extends React.Component {


    render() {
        return (
            <div>Form
                <input></input>
            <input onChange={this.handleChange}>Add to Inventory</input>
            <input onClick={this.handleChange}>Cancel</input>
            </div> 
            
        )
    }
}

