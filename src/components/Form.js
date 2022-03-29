import React, { useState } from "react";

function Form(props) {
  return (
    <form OnSubmit={props.OnSubmit}>
      <input type="text" value={props.firstName} onChange={props.HandleFirstNameChange}/>
      <input type="text" value={props.lastName} onChange={props.HandleLastNameChange}/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsetter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
