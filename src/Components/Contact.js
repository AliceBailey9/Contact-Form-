import React, { Component } from "react";
const { validateNameContent } = require("../utils");

class Contact extends Component {
  state = {
    name: "",
    location: "",
    email: "",
    type: "General Enquiry",
    content: "",
  };

  handleChange = (infoLabel, data) => {
    this.setState({ [infoLabel]: data });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, content } = this.state;
    alert(validateNameContent(name, content));
    if (
      validateNameContent(name, content) ===
      "Your contact request has been submitted, thank you"
    ) {
      console.log("your sumbitted");
      this.setState({
        name: "",
        location: "",
        email: "",
        type: "General Enquiry",
        content: "",
      });
    }
  };

  render() {
    const { name, location, email, type, content } = this.state;

    return (
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Full Name*"
            name="name"
            value={name}
            onChange={(event) => this.handleChange("name", event.target.value)}
          ></input>

          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(event) =>
              this.handleChange("location", event.target.value)
            }
          ></input>

          <input
            type="text"
            placeholder="Email Address*"
            name="email"
            value={email}
            onChange={(event) => this.handleChange("email", event.target.value)}
          ></input>

          <div className="input-enquiry">
            <label id="input-enquiry-label">Type of Enquiry</label>
            <select
              value={type}
              name="type"
              onChange={(event) =>
                this.handleChange("type", event.target.value)
              }
            >
              <option value="General Enquiry">General Enquiry</option>
              <option value="Request a Call Back">A Call Back</option>
              <option value="Customer Service Enquiry">
                Customer Service Enquiry
              </option>
            </select>
          </div>

          <input
            id="input-content"
            type="textarea"
            placeholder="Content*"
            name="content"
            value={content}
            onChange={(event) =>
              this.handleChange("content", event.target.value)
            }
          ></input>

          <button id="contact-button">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
