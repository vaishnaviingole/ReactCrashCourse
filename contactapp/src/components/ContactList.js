import React from "react";
import Contactcard from "./Contactcard";
//acces properties using props
const ContactList=(props)=>{
    console.log(props);
    //to render contactlist
    const renderContactList=props.contacts.map((contact)=>{
        return(
           <Contactcard contact={contact}></Contactcard>
        );
    });
 return<div className="ui celled list">
 {renderContactList}   
 {/* this is called refrencing the renderlist in jsx */}
</div>
   
 
}
export default ContactList;