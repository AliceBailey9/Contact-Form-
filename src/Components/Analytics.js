import React, { Component } from "react";
import { firebase } from "../firestore";
import { Pie } from "react-chartjs-2";

class Analytics extends Component {
  state = {
    labels: [
      "General Enquiry",
      "Call Back Request",
      "Customer Service Enquiry",
    ],
  };

  componentDidMount = () => {
    firebase
      .firestore()
      .collection("Contact-Information")
      .get()
      .then((querySnapshot) => {
        let generalEnquiry = 0;
        let callBackRequest = 0;
        let customerServiceEnquiry = 0;
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.type === "General Enquiry") {
            generalEnquiry++;
          } else if (userData.type === "Call Back Request") {
            callBackRequest++;
          } else if (userData.type === "Customer Service Enquiry") {
            customerServiceEnquiry++;
          }
        });
        return this.setState({
          datasets: [
            {
              label: "Types of Contact",
              data: [generalEnquiry, callBackRequest, customerServiceEnquiry],
              backgroundColor: ["#ed4c2b", "#3D591C", "#81BAC0"],
              hoverBackgroundColor: ["#410f05", "#253611", "#172d2f"],
              borderWidth: 0,
            },
          ],
        });
      });
  };
  render() {
    return (
      <div id="chart">
        <h1>Breakdown of Types of Requests Recieved</h1>
        <Pie
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Types of Enquiries",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Analytics;
