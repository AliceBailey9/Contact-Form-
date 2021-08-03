import { firebase } from "../firestore";
import emailjs from "emailjs-com";
import React, { Component } from "react";
const { validateEmail, validateNameContent } = require("../utils");

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
    const { name, content, email } = this.state;
    if (
      validateNameContent(name, content) === "valid" &&
      validateEmail(email) === "valid"
    ) {
      alert("Your contact request has been submitted, thank you");
      firebase
        .firestore()
        .collection("Contact-Information")
        .doc(this.state.name)
        .set(this.state)
        .then(() => {
          emailjs.sendForm(
            "service_aff0g6m",
            "template_r4jliu2",
            event.target,
            "user_90GoifjZzw54lvDIKRtJp"
          );
        })
        .then(() => {
          console.log("your submitted");
          this.setState({
            name: "",
            location: "",
            email: "",
            type: "General Enquiry",
            content: "",
          });
        });
    } else if (
      validateNameContent(name, content) === "valid" &&
      validateEmail(email) === "invalid"
    ) {
      alert("Please enter a valid email address");
    } else if (
      validateNameContent(name, content) !== "valid" &&
      validateEmail(email) === "valid"
    ) {
      alert(validateNameContent(name, content));
    } else if (
      validateNameContent(name, content) !== "valid" &&
      validateEmail(email) === "invalid"
    ) {
      alert(
        `${validateNameContent(
          name,
          content
        )} Please enter a valid email address.`
      );
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
              <option value="Call Back Request">A Call Back Request</option>
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
