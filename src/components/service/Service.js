import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { SERVICES } from '../../content';
import { Webervicebnr } from '../../images/images';

import Image from 'react-bootstrap/Image';

function Service(props) {
  return (
    <>
      <div className='page-banner'>
        <Image src={Webervicebnr} />
      </div>
      <Container>
        <Tab.Container
          id='left-tabs-example'
          defaultActiveKey={
            props.serviceSelected.id ? props.serviceSelected.id : 'service1.1'
          }
        >
          <Row className={'service-tabs'}>
            <h3 className={'mt-5 mb-5 content-heading'}>
              <span>Services</span>
            </h3>
            <Col xs={12} md={4}>
              <Nav variant='pills' className='flex-column'>
                {SERVICES.map((item) => (
                  <Nav.Item>
                    <Nav.Link eventKey={item.id}>
                      <span className='link-icon'></span>
                      <span>{item.title}</span>
                    </Nav.Link>
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
                      <Image rounded ={true} src={item.image} className='bnr-image' alt="SuMee Software Consulting LLC" />
                    </div>
                    <div>{item.content}</div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}

export { Service };
