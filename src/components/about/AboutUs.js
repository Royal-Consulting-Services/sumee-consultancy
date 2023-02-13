import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Coreimg, Aboutusimg } from '../../images/images';
import { faBriefcase, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import { AboutBnr } from '../../images/images';

function AboutUs() {
  return (
    <>
      <div className='page-banner'>
        <Image src={AboutBnr} />
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>About Us</span>
        </h3>
        <Row className={'mb-5'}>
          <Col xs={12} md={6}>
          <Image rounded ={true} className='d-block w-100' src={Aboutusimg} alt='First slide' />
          </Col>
          <Col xs={12} md={6}>
            SuMee Software Consulting LLC is the professional technology solutions
            company, We are specialized in LMS, providing a wide range of consulting, solutions & platforms
            serving enterprises of all sizes, across various industries. SuMee
            Consulting LLC was founded with the goal to ‘stand out’ for ‘premium
            quality’ technology solutions using trending digital technologies
            that would transform enterprises ‘digitally’ leading to quantum
            business growth.
            <br />
            <br />
            With strong experience & exposure to technology business, we have
            understood that well established ‘culture’ and ‘process’ are
            critical foundation for successful adoption of technology automation
            leading to ROI realization. Unique approach to Digital
            Transformation have helped our clients quickly gain competitive
            edge. We creatively deploy various digital technologies such as
            mobility, cloud, advanced analytics, distributed computing, data
            science, industry 4.0, Robotic process automation to solve various
            business challenges.
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Card className='about-cont-card'>
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={faBriefcase} className='about-icon' />{' '}
                  Mission
                </Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    We are on a mission to deliver Technology Solutions &
                    Products that our clients would like to flaunt for
                    world-class innovation, state of art quality & great user
                    experience.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className='about-cont-card'>
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={faEye} className='about-icon' /> Vision
                </Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    To empower our clients with technology solutions that
                    delivers business value fulfilling expectations of internal
                    and external stakeholders and delivering to direct impact on
                    ROI and profitability.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <h3 className={'mt-5 mb-5 content-heading'}>
            <span>Core Values</span>
          </h3>
          <Col xs={12} md={6}>
            <Row>
              <Col xs={12} md={6}>
                <Card className='core-cont-card'>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      <p className='core-content'>
                        <FontAwesomeIcon icon={faStar} className='core-icon' />
                        <span> Trust Karma for growth & Prosperity</span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className='core-cont-card'>
                  <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                      <p className='core-content'>
                        <FontAwesomeIcon icon={faStar} className='core-icon' />{' '}
                        <span>
                          Teamwork leading to realize power of Leverage
                        </span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Card className='core-cont-card'>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                      <p className='core-content'>
                        <FontAwesomeIcon icon={faStar} className='core-icon' />
                        <span>
                          {' '}
                          Equal opportunities that uphold Dignity & Respect
                        </span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6}>
                <Card className='core-cont-card'>
                  <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Text>
                      <p className='core-content'>
                        <FontAwesomeIcon icon={faStar} className='core-icon' />{' '}
                        <span>
                          Security & Safety for better work-life balance
                        </span>
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
          <Image rounded ={true}  className='d-block w-100' src={Coreimg} alt='core of SuMee Software Consulting LLC' />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Container>
          <Row className='service-contact'>
            <Col xs={12} md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Have an idea or project to discuss?</Card.Title>
                  <Card.Text>
                    <p className='help-content'>
                      Fill out the short form on our{' '}
                      <a href='/contact'>Contact Us</a> page give us call
                      directly on <a href='tel: +1 678-384-9757'>+1 678-384-9757</a>
                       or
                      email us at{' '}
                      <a href='mailto: info@sumeeconsulting.com'>info@sumeeconsulting.com</a> We’ll
                      guide you through our process, advise on the best possible
                      solutions and steer you in the right direction.{' '}
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export { AboutUs };
