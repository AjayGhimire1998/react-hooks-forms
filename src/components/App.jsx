import react from "react";
import Form from "./Form";
import { useState } from "react/cjs/react.development";
import DisplayData from "./DisplayData";

export default function App(){

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsetter, setNewsetter] = useState(false);

    function handleNewsletterChange(event) {
    setNewsetter((newsetter) => event.target.checked);
    }
    function HandleFirstNameChange(event){
    setFirstName((firstName) => event.target.value);
    }
    function HandleLastNameChange(event){
    setLastName((lastName) => event.target.value);
    }
    function OnSubmit(e){
    e.preventDefault();

    }
    return(
        <div>
            <Form 
                firstName={firstName}
                lastName={lastName}
                newsetter={newsetter}
                HandleFirstNameChange={HandleFirstNameChange}
                HandleLastNameChange={HandleLastNameChange}
                handleNewsletterChange={handleNewsletterChange}
                OnSubmit={OnSubmit}/> 
            <DisplayData  
                firstName={firstName} 
                lastName={lastName}
                newsetter={newsetter} />
        </div>
        
    )
}