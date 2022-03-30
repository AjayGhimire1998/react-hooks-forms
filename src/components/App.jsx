
import Form from "./Form";
import { useState } from "react/cjs/react.development";
import DisplayData from "./DisplayData";

export default function App(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [newsetter, setNewsetter] = useState(false);
    const [submittedData, setSubmittedData] = useState([]);
    const[errors, setErrors] = useState([]);

    function handleNewsletterChange(event) {
    setNewsetter((newsetter) => event.target.checked );
    }
    function HandleFirstNameChange(event){
    setFirstName((firstName) => event.target.value );
    }
    function HandleLastNameChange(event){
    setLastName((lastName) => event.target.value );
    }
    function HandleSubmit(e){
        e.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: lastName,
            newsetter: newsetter
        }
        const newFormData = [...submittedData, formData]
        if(firstName){
        setSubmittedData(newFormData);
        setFirstName((firstName) => "");
        setLastName((lastName) => "");
        setNewsetter((newsetter) => {});
        setErrors((errors) => []);
        } else {
            setErrors(["Input required!"]);
        }
    }
    const listOfSubmissions = submittedData.map((data, index) => {
        return(
            <div key={index}>
                {data.firstName} {data.lastName} {data.newsetter ? "Subscribed" : "Please Subscribe"} 
            </div>
        );
    });
    return(
        <div>
            <Form 
                firstName={firstName}
                lastName={lastName}
                newsetter={newsetter}
                HandleFirstNameChange={HandleFirstNameChange}
                HandleLastNameChange={HandleLastNameChange}
                handleNewsletterChange={handleNewsletterChange}
                OnSubmit={HandleSubmit}/> 
            <DisplayData  
                firstName={firstName} 
                lastName={lastName}
                newsetter={newsetter} />

            { errors.length > 0 ? errors.map((error, index) => {
                return(
                <small key={index} style={{color: "red"}}>{error}</small>)
            }) : null}
            <h3>Submission</h3>
            {listOfSubmissions}
        </div>
        
    )
}