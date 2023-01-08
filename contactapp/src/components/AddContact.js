import React from 'react';
//class component
//you need to use render method in class component
class AddContact extends React.Component{
  render(){
    return(
        <div className='ui main'>
            <h2>AddContact</h2>
            <form className='ui form'>
                <div className='field'>
                    <label for='name'>Name</label>
                    <input type="text" name="name" placeholder='Name'></input>

                </div>
                <label for='email'>Email</label>
                    <input type="email" name="email" placeholder='email'></input>
                    <button className='ui button blue'>Add</button>
            </form>
        </div>
    )
  }
}
export default AddContact;