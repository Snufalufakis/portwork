import React from "react";
import "./index.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "./../AnimatedLetters";
// material design
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


const Contact = () => {
  const [letterClass] = useState("text-animate");

  function SendMail() {
    let params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send("service_9h83ccu", "template_27nks3c", params, "TMt6Tnhzfg2NIGCJY")
      .then(function (res) {
        alert("Message successfully sent!" + res.status);
      });
  }

  return (
    <>
      <Grid item xs={12} md={4}>
        <Grid className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
              idx={15}
            />
          </h1>
          <Grid className="contact-form">
            <form>
              <input placeholder="Name" type="text" id="fullname" required />
              <br />
              <input placeholder="Email" type="email" id="email_id" required />
              <br />
              <textarea placeholder="Message" id="message" required />
              <br />
              <Button className="flat" onClick={SendMail}>
                Send
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
