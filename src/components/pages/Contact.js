import React from "react";

function Contact() {
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
        <button type="button" className="btn btn-success mx-5">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
