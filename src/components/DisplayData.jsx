import react from "react";

export default function DisplayData(props){
    return(
        <div>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
            <span>{props.newsetter? "Thanks for subscribing to our newletter": "Please Subscibe for more news"}</span>
        </div>
    )
}