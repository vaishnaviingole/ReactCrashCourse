import React from 'react';
//class component
//you need to use render method in class component
class AddContact extends React.Component{
  state={
    name:"",
    email:""
  }

  add=(e)=>
  {
    e.preventDefault();//to prevent page from refreshing;
    if(this.state.name=="" || this.state.email===""){
      alert("All feilds are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);//to add tothe array in app.js
    this.setState({name:"",email:""});//to reset after fillling once

  }
  render(){
    return(
        <div className='ui main'>
            <h2>AddContact</h2>
            <form className='ui form' onSubmit={this.add}>
                <div className='field'>
                    <label for='name'>Name</label>
                    <input type="text" name="name" placeholder='Name' value={this.state.name} 
                    onChange={(e)=>this.setState({name:e.target.value})}></input>
                    
                    {/* here in onchange e is event */}

                </div>
                <label for='email'>Email</label>
                    <input type="email" name="email" placeholder='email' value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}></input>
                    <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
  }
}
export default AddContact;
