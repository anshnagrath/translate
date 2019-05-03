import React from 'react';
import context from '../Context/Context'
class Button extends React.Component{
    static contextType = context;
    renderSubmit(value){
       console.log(value)     
      return (value === 'english')? 'Submit':'Vorleggen'
    }
    render(){
        // (this.context == 'english')?this.text = 'Submit': this.text = 'Vorleggen' 
        return(
            <button className="ui button primary">{this.text}
            <context.Consumer>
                {this.renderSubmit}
            </context.Consumer>
            </button>
        )
    }
}
export default Button;