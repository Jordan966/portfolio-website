import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import Tada from "react-reveal/Tada";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mwaqv78",
        "template_3hvuvsg",
        form.current,
        "t0LHYXhAuLk8tyGdM"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contact">
      <h2 className="contactTitle">Contact Me</h2>
      <span className="contactDesc">
        Please feel free to contact me using the form below &#128522;
      </span>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="your_name"
          placeholder="Name"
          className="name"
        ></input>
        <input
          type="email"
          name="your_email"
          placeholder="Email"
          className="email"
        ></input>
        <textarea
          className="message"
          name="message"
          rows="7"
          placeholder="Message"
        ></textarea>
        <Tada>
          <button type="submit" value="Send" className="submitButton">
            Submit
          </button>
        </Tada>
      </form>
    </section>
  );
};

export default Contact;
