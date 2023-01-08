import React from "react";
//acces properties using props
const ContactList=(props)=>{
    console.log(props);
    //to render contactlist
    const renderContactList=props.contact.map((contact)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
               <i className="trash alternate outline icon" ></i>
            </div>
        )
    })
 return(
    <div className="ui celled list">
        {renderContactList}   
        {/* this is called refrencing the renderlist in jsx */}
    </div>
 )
}
export default ContactList;