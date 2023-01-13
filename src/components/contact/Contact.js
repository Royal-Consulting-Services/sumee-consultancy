import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ContactBnr } from '../../images/images';
import {
  faLocationDot,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';

function Contact() {
  return (
    <>
      <div className='page-banner'>
        <Image  src={ContactBnr} />
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>Contact</span>
        </h3>
        <Row>
          <Col xs={12} md={4}>
            <Card className='contact-card'>
              <Card.Body>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className='contact-icon'
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
            <Card className='contact-card'>
              <Card.Body>
                <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                <address>
                  <a href='tel:+1 678-399-2963'>+1 678-399-2963</a>
                  <br />
                  <a href='tel:+1 678-384-9757'>+1 678-384-9757</a>
                </address>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className='contact-card'>
              <Card.Body>
                <FontAwesomeIcon icon={faGlobe} className='contact-icon' />
                <address>
                  <a href='mailto:hr@sumeeconsulting.com'>hr@sumeeconsulting.com</a>
                  <br />
                  <a href='mailto:info@sumeeconsulting.com'>info@sumeeconsulting.com</a>
                </address>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export { Contact };
