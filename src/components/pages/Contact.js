import React from "react";

function Contact() {
  return (
    // name
    // email
    // message

    <form className="p-5">
      <div className="form-group px-5 py-3">
        <label for="userName">Name: </label>
        <input
          type="string"
          className="form-control"
          id="userName"
          placeholder="John Smith"
        ></input>
      </div>
      <div className="form-group px-5 py-3">
        <label for="userEmail">Email: </label>
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="john.smith@email.com"
        ></input>
      </div>
      <div className="form-group px-5 py-3">
        <label for="emailMessage">Message: </label>
        <textarea className="form-control" id="userEmailMessage" rows="3"></textarea>
      </div>
    </form>
  );
}

export default Contact;
