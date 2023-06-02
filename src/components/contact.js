import React, { useState } from "react";
import { send } from "emailjs-com";

import "../css/components/contact.css";

const Contact = (props) => {
  const { content } = props;

  const [toSend, setToSend] = useState({
    sender_name: "",
    sender_email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  const [cooldown, setCoolDown] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.sender_name && toSend.sender_email && toSend.message) {
      if (!cooldown) {
        setCoolDown(true);
        setTimeout(() => setCoolDown(false), 25000);
        setFeedback(content.loading);
        send(
          "service_4fgfugp",
          "template_ys3f0qe",
          toSend,
          "user_Fv3o1miLEBDRopI1G5AJU"
        )
          .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setFeedback(content.sentFeedback);
            setTimeout(() => setFeedback(""), 5000);
            setToSend({
              sender_name: "",
              sender_email: "",
              sender_phone: "",
              message: "",
            });
          })
          .catch((err) => {
            console.log("FAILED...", err);
            setFeedback(content.failedFeedback);
            setTimeout(() => setFeedback(""), 5000);
          });
      } else {
        setFeedback(content.cooldownFeedback);
        setTimeout(() => setFeedback(""), 5000);
      }
    } else {
      setFeedback(content.fillFieldsFeedback);
      setTimeout(() => setFeedback(""), 5000);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{content.title}</h2>
      <label htmlFor="name">{content.name}</label>
      <input
        type="text"
        name="sender_name"
        id="name"
        value={toSend.sender_name}
        onChange={handleChange}
      />
      <label htmlFor="email">{content.email}</label>
      <input
        id="email"
        type="text"
        name="sender_email"
        value={toSend.sender_email}
        onChange={handleChange}
      />
      <label htmlFor="phone">{content.phone}</label>
      <input
        id="phone"
        type="number"
        name="sender_phone"
        value={toSend.sender_phone}
        onChange={handleChange}
      />
      <label htmlFor="message">{content.message}</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        value={toSend.message}
        onChange={handleChange}
      ></textarea>
      <button type="submit">{content.submit}</button>

      <h3>{feedback}</h3>
    </form>
  );
};

export default Contact;
