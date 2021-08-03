import React, { Component } from "react";

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
    if (name.length === 0 && content.length === 0) {
      alert("You need to fill out your name and add some content");
    } else if (name.length === 0) {
      alert("You need to fill out your name");
    } else if (content.length === 0) {
      alert("You need to add some content");
    } else {
      alert("Your contact request has been submitted, thank you");
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
    console.log(name, location, email, type, content);
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
            placeholder="Content"
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
