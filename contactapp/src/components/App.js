
import './App.css';
import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  //Rendering a list
  const contacts=[{
    id:"1",
    name:"dipesh",
    email:"malvia@gmail.com",
  },
  {
    id:"2",
    name:"shivesh",
    email:"sh@gmail.com",
  }
  //to pass this array to contact list we use props--->props pass data from parent to child
  
];
  return (
    
   <div className='Ui container'>
    <Header></Header>
    <AddContact/>
    <ContactList contacts={contacts}></ContactList>
    {/* here contact is a property name and contact inside curly braces is array*/}
   </div>
  );
}

export default App;
