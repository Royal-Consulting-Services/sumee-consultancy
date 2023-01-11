import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK } from '../content';
import { Blog1, Blog2, Servicebnr, Blog3, Blog4, Blog5, Blog6, Blog7, Blog8 } from '../images/images';
import Footer from './footer/Footer';
import { faArrowRight, faFolder, faLifeRing, faScrewdriverWrench, faCartShopping, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
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
function Consulting() {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  return (
    <>
      <div className='page-banner'>
        <Image src={Servicebnr} />
      </div>
      <Container >
        {/* <h3 className={"mt-5 mb-5 content-heading"}><span>Consulting</span></h3> */}
        <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Managed Services</span></h3>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog1} />
              <Card.Body>
                <Card.Title>Turnkey Projects</Card.Title>
                <Card.Text>
                We provide turnkey project support globally to meet the needs and demands of our clients. We deliver them through a single engagement, multi-source model. Our project management team work closely in liaison with our clients to provide services meeting exact business requirements that significantly improves KPI metrics and reduces costs.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog2} />
              <Card.Body>
                <Card.Title>Data Center support</Card.Title>
                <Card.Text>
                Unlike others we execute all managed services with our own team to maintain premium quality and great customer & end user experience. We stand out as we hire and train our own staff for customer support and managed services. We believe in higher standard of service and accountability. We retain a diversely skilled and talented workforce, from master electricians to network engineers. Our Managed Services are backed by 24x7x365 onsite support, and delivered out of our SSAE 18 certified data centers.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Project Management</span></h3>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog3} />
              <Card.Body>
                <Card.Title>Agile Development</Card.Title>
                <Card.Text>
                We help our clients adopt Agile methodologies for improved predictability, ability to deliver high-quality deliverables, innovate and improve time to market. Our experienced team of scrum masters have helped clients to increase revenue with a complete transformation to transform into agile teams.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog4} />
              <Card.Body>
                <Card.Title>Lean Development</Card.Title>
                <Card.Text>
                We have helped our clients execute projects within constrained resources by leverage our unique lean project management process that our Lean team have matured over the years. Together, we provide our client teams with our project management and engineering wisdom for project success.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Offshoring</span></h3>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog5} />
              <Card.Body>
                <Card.Title>Time and Material</Card.Title>
                <Card.Text>
                The biggest benefits of time and material engagement model is task prioritizing for development projects. We divide each project is divided into several separate tasks (involving features, use cases, tests, etc.). Our project manager provides hand-holding on prioritization, complexity levels, implementation approaches, and cost estimates of these tasks. As a result, our client can prioritize the projects and business cases depending on their budget and business growth projections.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog6} />
              <Card.Body>
                <Card.Title>Fixed Price/Duration</Card.Title>
                <Card.Text>
                Fixed price project management give you the security of knowing what your project is going to cost you each month and prevent expenses spiraling out of control. We help you realize true benefits of fixed price projects by providing deeper clarity on scope of work, project cost headers and projected business outcome.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Staffing</span></h3>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog8} />
              <Card.Body>
                <Card.Title>Direct Hire</Card.Title>
                <Card.Text>
                We stand out for our consistent success in candidate sourcing process. With our unique understanding of our client organizational culture, processes and stakeholders expectations we have been successful in fulfilling our client expectations. We have delivered 24/7 recruitment services with the help of our unique talent identification expertise & talent assessment techniques, our global sourcing capabilities and global presence.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} >
            <Card className='client-card'>
              <Card.Img variant="top" src={Blog7} />
              <Card.Body>
                <Card.Title>Staff Augmentation</Card.Title>
                <Card.Text>
                Our IT Staff Augmentation Services provide critical skill sets for your business to fulfill IT business objectives by bridging gaps in your current team size as well as competencies. We provide staffing solutions that will help ensure your technology initiatives keep pace with your business needs.
                </Card.Text>
                {/* <Button variant="link">read more </Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
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
      <Footer />
    </>
  );
}

export default Consulting;