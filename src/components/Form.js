

function Form(props) {
  return (
    <form onSubmit={props.OnSubmit}>
      <input type="text" placeholder="Enter First Name" value={props.firstName } onChange={props.HandleFirstNameChange}/>
      <input type="text" placeholder="Enter Laast Name" value={props.lastName } onChange={props.HandleLastNameChange}/>
      <br/>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsetter }
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
