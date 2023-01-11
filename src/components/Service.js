import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, Button, Nav, Tab } from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK } from '../content';
import { Blog1, Blog2, Webervicebnr, Itrecruitment } from '../images/images';
import Footer from './footer/Footer';
import { faDesktop, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image'
const slides = SLIDERS.map((slider) => {
  return (
    <Carousel.Item key={slider.src} variant="dark">
      <img
        className="d-block w-100"
        src={slider.src}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{slider.captionText}</h3>
        <p>{slider.captionHeader}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
});
function Service(props) {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  return (
    <>
      <div className='page-banner'>
        <Image src={Webervicebnr} />
      </div>
      <Container >
        <Tab.Container id="left-tabs-example" defaultActiveKey={props.serviceSelected.id ? props.serviceSelected.id :"service1.1"}>
          <Row className={"service-tabs"}>
            <h3 className={"mt-5 mb-5 content-heading"}><span>Services</span></h3>
            <Col xs={12} md={4}>
              <Nav variant="pills" className="flex-column">
                {SERVICES.map((item) => (
                  <Nav.Item>
                    <Nav.Link eventKey={item.id}><span className='link-icon'>
                      {/* <FontAwesomeIcon icon={item.icon} className="tech-icon" /> */}
                      </span><span>{item.title}</span></Nav.Link>
                  </Nav.Item>
                ))}

              </Nav>
            </Col>
            <Col xs={12} md={8}>
              <Tab.Content>
                {SERVICES.map((item) => (
                  <Tab.Pane eventKey={item.id}>
                    <div className='service-tab-content'>
                      <h5>{item.title}</h5>
                      <Image src={item.image} className="bnr-image"/>
                    </div>
                    <div>{item.content}</div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      {/* <Container fluid>
        <Container>
          <Row className='service-contact'>
            <Col xs={12} md={6} >
              <Card>
                <Card.Body>
                <Card.Title>Have an idea or project to discuss?</Card.Title>
                  <Card.Text>
                    <p className='help-content'>
                    Fill out the short form on our <a href="">Contact Us</a> page give us call directly on <a href="">+44 (0) 300 077 1720</a> or email us at <a href="">support@gmail.com</a> We’ll guide you through our process, advise on the best possible solutions and steer you in the right direction. </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container> */}
    </>
  );
}

export default Service;