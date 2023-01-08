
import './App.css';
import React ,{useState}from "react";//rect hook:useState
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
  const [contacts,setContacts]=useState([]);//here setContact helps to set state of contact you should not directly change contact
  //Rendering a list
  // const contacts=[{
  //   id:"1",
  //   name:"dipesh",
  //   email:"malvia@gmail.com",
  // },
  // {
  //   id:"2",
  //   name:"shivesh",
  //   email:"sh@gmail.com",
  // }
  // //to pass this array to contact list we use props--->props pass data from parent to child
  
//];
const addContactHandler=(contact)=>{
  console.log(contact);
  setContacts([...contacts,contact]);//to add feilds in contact state
}
  return (
    
   <div className='Ui container'>
    <Header></Header>
    <AddContact addContactHandler={addContactHandler}/>
    {/* function as a prop */}
    <ContactList contacts={contacts}></ContactList>
    {/* here contact is a property name and contact inside curly braces is array*/}
   </div>
  );
}

export default App;
