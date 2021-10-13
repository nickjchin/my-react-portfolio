import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");

  const handleNameChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    }

    if (!name) {
      setNameErrorMessage("Name is required");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
  };
  const handleEmailChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    }

    if (!validateEmail(email)) {
      setEmailErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!email) {
      setEmailErrorMessage("Email is required");
    }
  };
  const handleMessageChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "message") {
      setMessage(inputValue);
    }

    if (!message) {
      setMessageErrorMessage("Message is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    } else {
      setMessageErrorMessage("");
    }
  };

  return (
    // name
    // email
    // message
    <div className="container-fluid contact">
      <div className="row">
        <div className="col-12">
          <h2 className="text-center mt-4">Contact</h2>
        </div>
      </div>
      <form className="p-5 col-5 mx-auto">
        <div className="form-group px-5 py-3">
          <label for="userName">Name: </label>
          <input
            type="string"
            className="form-control"
            id="userName"
            placeholder="John Smith"
            onBlur={handleNameChange}
          ></input>
          {nameErrorMessage && (
            <div>
              <p className="text-danger">{nameErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="form-group px-5 py-3">
          <label for="userEmail">Email: </label>
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="john.smith@email.com"
            onBlur={handleEmailChange}
          ></input>
          {emailErrorMessage && (
            <div>
              <p className="text-danger">{emailErrorMessage}</p>
            </div>
          )}
        </div>
        <div className="form-group px-5 py-3">
          <label for="emailMessage">Message: </label>
          <textarea
            className="form-control"
            id="userEmailMessage"
            rows="3"
            onBlur={handleMessageChange}
          ></textarea>
          {messageErrorMessage && (
            <div>
              <p className="text-danger">{messageErrorMessage}</p>
            </div>
          )}
        </div>

        <button type="button" className="btn btn-success mx-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
