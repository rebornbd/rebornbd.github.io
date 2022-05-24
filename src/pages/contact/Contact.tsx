import { useFormspark } from "@formspark/use-formspark";
import React, { useState, useEffect } from 'react'

import {
  Input,
  Textarea,
  Heading,
  Button,
  Social
} from "../../components";
import {
  ContactFormIcon,
  GetInTouchIcon,
} from "../../components/Icons";
import {
  getInTouchSrc
} from "../../markdown";
import {
  isNameValid,
  isEmailValid,
  isMessageValid
} from "../../utils";
import styles from "./Contact.module.css";


const Contact = () => {
  const [getInTouchMDText, setGetInTouchMDText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [buttonText, setButtonText] = useState("Send Message");
  const [submit, isSubmitting] = useFormspark({ formId: "nK0fAKaW" });

  useEffect(() => {
    fetch(getInTouchSrc)
      .then(res => res.text())
      .then(res => {
        setGetInTouchMDText(res);
      })
  }, []);

  const isFormValid = () => {
    return (isNameValid(name) && isEmailValid(email) && isMessageValid(message))
      ? true
      : false;
  }

  const formSubmitHandler = () => {
    console.log("clicked! form ", isFormValid());
  }

  const GetInTouch = () => {
    return (
      <div className={styles.getInTouchContainer}>
        <Heading icon={GetInTouchIcon} title="Get In Touch" mb={20} />
        <div className={styles.getInTouchInnerContainer}>
          <div className={styles.getInTouchText}>
            {getInTouchMDText}
          </div>

          <Social pt={25} />
        </div>
      </div>
    )
  }
  

  return (
    <div className={styles.container}>
      <GetInTouch />

      <Heading icon={ContactFormIcon} title="Contact" mb={20} />
      <div className={styles.contactFormContainer}>
        <div className={styles.contactFormItems}>
          <Input
            value={name}
            label="Full Name"
            setHandler={setName}
            placeholder="Enter Your Full Name"
          />
          <Input
            value={email}
            label="Email"
            setHandler={setEmail}
            placeholder="Enter Your Email"
          />
          <Textarea
            value={message}
            label="Message"
            setHandler={setMessage}
            placeholder="Enter Your Message"
          />

          <Button
            label={buttonText}
            onClickHandler={formSubmitHandler}
            Icon={ContactFormIcon}
          />
        </div>

        <div className={styles.contactFormEmptySpace}>
        </div>
      </div>
    </div>
  )
}

export default Contact;
