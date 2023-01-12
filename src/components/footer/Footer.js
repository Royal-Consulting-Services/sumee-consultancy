import React, { useState } from 'react';
import { Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

function Footer(props) {
  const [showBtn, setShowBtn] = useState('hidden-btn');
  const url = window.location.pathname;
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
  const isAdmin = props.type;
  if (isAdmin) {
    return (
      <Container fluid className={'main-footer admin-footer mt-5'}>
        <Button
          variant='link'
          onClick={topFunction}
          id='myBtn'
          className={showBtn}
          title='Go to top'
        >
          <FontAwesomeIcon icon={faChevronCircleUp} className='Edit-icon' />
        </Button>

        <Row>
          <Col xs={12} md={12}>
            <p className='foo-content-text-admin'>
              Copyright © {new Date().getFullYear()} SuMee Consulting LLC. All
              Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (url !== '/login' && url !== '/signup') {
    return (
      <Container fluid className='main-footer mt-5'>
        <>
        <Button
          variant='link'
          onClick={topFunction}
          id='myBtn'
          className={showBtn}
          title='Go to top'
        >
          <FontAwesomeIcon icon={faChevronCircleUp} className='Edit-icon' />
        </Button>
          <Row>
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
        </>
      </Container>
    );
  }
}
export { Footer };
