import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Modal,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp, faClose } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  const [show, setShow] = useState(false);
  const [showBtn, setShowBtn] = useState('hidden-btn');

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowBtn('show-btn');
    } else {
      setShowBtn('hidden-btn');
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const url = window.location.pathname;
  return (
    url !== '/login' &&
    url !== '/signup' &&
    props.type && (
      <Container
        fluid
        className={
          props.type ? 'main-footer admin-footer mt-5' : 'main-footer mt-5'
        }
      >
        <Button
          variant='link'
          onClick={topFunction}
          id='myBtn'
          className={showBtn}
          title='Go to top'
        >
          <FontAwesomeIcon icon={faChevronCircleUp} className='Edit-icon' />
        </Button>
        {props.type === 'admin' ? (
          <Row>
            <Col xs={12} md={12}>
              <p className='foo-content-text-admin'>
                Copyright © {new Date().getFullYear()} SuMee Consulting LLC. All
                Rights Reserved.
              </p>
            </Col>
          </Row>
        ) : (
          <>
            <Row>
              <h3 className={'mt-5 mb-5 justify-content-center'}></h3>
              <Col xs={12} md={6}>
                <p className='foo-content-text'>
                  Stay in the loop. Get the latest insights on growth and
                  transformation.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <p className='foo-content-text'>
                  Need help with a project, have a question about employment or
                  our work with nonprofits? We’re here.
                </p>
              </Col>
            </Row>

            <Row className='mt-5 pb-5'>
              <Col xs={12} md={12}>
                <ListGroup horizontal className='foo-menu-link'>
                  <ListGroup.Item>
                    <Button variant='link' href='/'>
                      Home
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant='link' href='/aboutus'>
                      About Us
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {' '}
                    <Button variant='link' href='/services'>
                      Services
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant='link' href='/careers'>
                      Careers
                    </Button>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant='link' href='/contact'>
                      Contact
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Modal
              className='full-modal-box'
              show={show}
              fullscreen={true}
              onHide={() => setShow(false)}
            >
              <Modal.Header>
                <FontAwesomeIcon
                  icon={faClose}
                  className={'modal-close'}
                  onClick={() => setShow(false)}
                />
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col
                    xs={6}
                    md={{ span: 6, offset: 3 }}
                    style={{ marginTop: '7%' }}
                  >
                    <Form>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control
                              type='text'
                              placeholder='First Name'
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control type='text' placeholder='Last Name' />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control type='email' placeholder='Email' />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group
                            className='mb-3'
                            controlId='formBasicEmail'
                          >
                            <Form.Control type='tel' placeholder='mobile' />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={12}>
                          <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                          >
                            <Form.Control
                              as='textarea'
                              rows={3}
                              placeholder={'Message'}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group
                        className='mb-3'
                        controlId='formBasicCheckbox'
                      >
                        <Form.Check
                          type='checkbox'
                          label='Check me out'
                          style={{ color: '#ffffff' }}
                        />
                      </Form.Group>
                      <Button variant='primary' type='submit'>
                        Submit
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </>
        )}
      </Container>
    )
  );
}
export { Footer };
