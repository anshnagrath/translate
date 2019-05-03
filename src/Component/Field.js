import React from 'react';
import context from '../Context/Context';
class Field extends React.Component{
    static contextType = context
    render(){
       (this.context == 'english')?this.name='Name':this.name="Naam"
        return(
            <div className="ui field">
            <label>{this.name}</label>
            <input/>
            </div>
        )

    }
}
export default Field;