import React, { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import { SLIDERS, SERVICES, MENULINK } from "../content";
import { Blog1, Blog2, Servicebnr, ContactBnr } from "../images/images";
import Footer from "./footer/Footer";
import {
  faCog,
  faLocationDot,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant="dark">
      <img className="d-block w-100" src={slider.src} alt="First slide" />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});
function Contact() {
  const [inputValues, setInputValues] = useState({
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });

  const [validation, setValidation] = useState({
    message: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
  });
  const stringifiedPerson = JSON.parse(localStorage.getItem("user-info"));
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState("");
  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }
  const signupSubmit = () => {
    fetch("http://localhost/php/api.php?action=register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message: inputValues.message,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        phone: inputValues.mobile,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRegMessage(
          "Successfully Completed Your Registration, You Can Login Now!"
        );
        // setFormType("login");
        setInputValues({
          message: "",
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
        });
      });
  };
  return (
    <>
      <div className="page-banner">
        <Image src={ContactBnr} />
      </div>
      <Container>
        <h3 className={"mt-5 mb-5 content-heading"}>
          <span>Contact</span>
        </h3>
        <Row>
          <Col xs={12} md={4}>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="contact-icon"
                />
                <address>
                  3240, Caney Estates PI,
                  <br />
                  Cumming, 30041, GA
                  <br />
                </address>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <address>
                  +1 678-399-2963
                  <br />
                  +1 678-384-9757
                </address>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
                <address>
                  hr@sumeeconsulting.com
                  <br />
                  info@sumeeconsulting.com
                </address>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
