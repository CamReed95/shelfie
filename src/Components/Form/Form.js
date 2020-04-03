import React from 'react';

export default class Form extends React.Component {


    render() {
        return (
            <div>Form
                <input></input>
            <input type="text" value={this.state.value} onChange={this.handleChange}>Cancel</input>
            <input type="text" value={this.state.value} onChange={this.handleChange}>Add to Inventory</input>
            </div> 
            
        )
    }
}