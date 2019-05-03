import React from 'react';
import CreateUser from './UserCreate';
import context from '../Context/Context'

class App extends React.Component {
  static contextType = context;
  state={
    language:'english'
  }
  onLanguageChange(language){
    this.setState({language:language})
  }
  render(){
    console.log(this.context)
    return (
     <div className="ui container">
     <div>
      Select a language:    {this.state.language}
      <i className="flag us" onClick={()=>this.onLanguageChange('english')}></i>
      <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')} ></i>
   
     </div>
     <context.Provider value={this.state.language} >

     <CreateUser></CreateUser>
     </context.Provider  >

     </div>
    )
  }
}

export default App;
