import React, { useState } from 'react';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Modal,
  Row,
  Col,
  Dropdown,
  ListGroup,
  Image
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { menuClick } from '../../action/action';
import { Logo } from '../../images/images';
import { isMobile } from 'react-device-detect';

import {
  faEnvelope,
  faArrowRightToBracket,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
function Header(props) {
  const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
  const [show, setShow] = useState(false);
  const [inputValues, setInputValues] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    passWord: '',
    role: 'user',
  });

  const [validation] = useState({
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    passWord: '',
  });

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState(false);
  const [regMessage, setRegMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [formType, setFormType] = useState('');
  const [userDetails] = useState(stringifiedPerson);
  const [headerType] = useState(props.type);
  const headerNavigate = useNavigate();
  const url = window.location.pathname;

  const isAdmin = userDetails?.loggedinUser?.userName === 'admin'

  async function loginSubmit() {
    let item = { userName, password };
    let result = await fetch('http://localhost/php/api.php?action=login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    result.loggedinUser = {
      userName: userName,
      passWord: password,
    };
    if (result.statusCode === 200) {
      localStorage.setItem('user-info', JSON.stringify(result));
      if (userName === 'admin') {
        headerNavigate('/admin');
      } else {
        headerNavigate('/user');
      }
    } else {
      setErrMessage(true);
    }
  }
  const signupSubmit = () => {
    fetch('http://localhost/php/api.php?action=register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        userName: inputValues.userName,
        firstName: inputValues.firstName,
        lastName: inputValues.lastName,
        email: inputValues.email,
        phone: inputValues.mobile,
        password: inputValues.passWord,
        role: 'user',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setRegMessage(res.message);
        setFormType('login');
        setInputValues({
          userName: '',
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          passWord: '',
          role: 'user',
        });
      })
      .catch(() => {
        setRegMessage('Registration operation failed');
        props.successMessage('Registration operation failed ');
        setInputValues({
          userName: '',
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          passWord: '',
        });
      });
  };
  const signOut = () => {
    localStorage.removeItem('user-info');
    headerNavigate('/');
    props.clickEvent();
  };
  const Menu = props.menuLink?.map((menu) => {
    return (
      <Nav.Link
        href={menu.key}
        onClick={menu.onClick}
        className={menu.key === props.selectedMenu ? 'active' : ''}
      >
        {' '}
        {menu.icon && (
          <FontAwesomeIcon
            icon={menu.icon}
            style={{ marginRight: '10px' }}
            onClick={() => setShow(false)}
          />
        )}
        {menu.text}
      </Nav.Link>
    );
  });
  const menuToggle = () => {
    props.menuClick();
  };
  async function myProfile() {
    setShowProfile(true);
    let userName = props?.loggedin?.loggedinUser?.userName;
    const response = await fetch(
      `http://localhost/php/api.php?action=getUserByUserName&userName=${userName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const selectedData = await response.json();
    let data = selectedData?.users;
    setInputValues({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.phone,
      passWord: data.password,
      role: 'user',
    });
  }

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    url !== '/login' &&
    url !== '/signup' && (
      <>
        {headerType !== 'adminpage' &&
          headerType !== 'table' &&
          userDetails?.loggedinUser?.userName !== 'admin' && (
            <>
              <div className='header-top-small'>
                <Container>
                  <Row>
                    <Col xs={12} md={{ span: 4, offset: 8 }}></Col>
                  </Row>
                </Container>
              </div>
              <div className='header-top'>
                <Container>
                  <Row>
                    <Col xs={12} md={4}>
                      <span className='logo-span'>
                        <Image rounded ={true}
                          className='d-block'
                          src={Logo}
                          alt='SuMee Consulting'
                        />
                      </span>
                    </Col>
                    <Col xs={12} md={{ span: 4, offset: 4 }}>
                      <div className='top-contact-div'>
                        <ListGroup className='top-contact-link'>
                          <ListGroup.Item>
                            {' '}
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className='top-con-icon'
                            />
                            <a href='mailto:hr@sumeeconsulting.com'>hr@sumeeconsulting.com</a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            {' '}
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              className='top-con-icon'
                            />
                             <a href='mailto:info@sumeeconsulting.com'>info@sumeeconsulting.com</a>
                          </ListGroup.Item>
                        </ListGroup>
                        {headerType !== 'selfpage' && (
                          <>
                            <Button
                              variant='primary'
                              size={'sm'}
                              className='m-1 header-button'
                              onClick={() => headerNavigate('/login')}
                            >
                              {' '}
                              <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                style={{ marginRight: '10px' }}
                              />
                              <span className='header-button-text'>Login</span>
                            </Button>
                            <Button
                              variant='primary'
                              size={'sm'}
                              className='m-1 header-button'
                              onClick={() => headerNavigate('/signup')}
                            >
                              <FontAwesomeIcon
                                icon={faUserPlus}
                                style={{ marginRight: '10px' }}
                              />
                              <span className='header-button-text'>
                                Sign Up
                              </span>
                            </Button>
                          </>
                        )}
                        {isMobile && headerType === 'selfpage' && (
                          <Dropdown drop={'start'}>
                            <Dropdown.Toggle
                              variant='link'
                              id='dropdown-basic'
                              className='user-profile'
                            >
                              <FontAwesomeIcon
                                icon={faUser}
                                className='profile-icon'
                              />
                              <h5 className='profile-username'>
                                {props?.loggedin?.loggedinUser?.userName}
                              </h5>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => myProfile()}>
                                Profile
                              </Dropdown.Item>
                              <Dropdown.Item onClick={() => signOut()}>
                                Sign Out
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          )}
        <Navbar
          bg='light'
          className={props.className}
          expand='lg'
          fixed={props.fixed}
        >
          <Container fluid={props.fluid}>
            {headerType === 'adminpage' && (
              <FontAwesomeIcon
                icon={faBars}
                style={{ marginRight: '10px' }}
                onClick={menuToggle}
              />
            )}
            {headerType === 'adminpage' && (
              <Navbar.Brand href='/admin'>
                <Image
                  className='d-block'
                  src={Logo}
                  alt='SuMee Consulting'
                  style={{ height: '35px' }}
                />
              </Navbar.Brand>
            )}
            {headerType !== 'adminpage' && headerType !== 'table' && (
              <Navbar.Toggle aria-controls='navbarScroll' />
            )}
            {headerType === 'table' ? (
              <>{Menu}</>
            ) : (
              <Navbar.Collapse id='navbarScroll'>
                <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                  {Menu}
                </Nav>
              </Navbar.Collapse>
            )}
            {(headerType === 'adminpage' ||
              (!isMobile && headerType === 'selfpage')) &&
              userDetails?.loggedinUser?.userName && (
                <div className='d-flex'>
                  <Dropdown drop={'start'}>
                    <Dropdown.Toggle
                      variant='link'
                      id='dropdown-basic'
                      className='user-profile'
                    >
                      <FontAwesomeIcon icon={faUser} className='profile-icon' />
                      <h5 className='profile-username'>
                       {props?.loggedin?.loggedinUser?.userName}
                      </h5>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => myProfile()}>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => signOut()}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
          </Container>
        </Navbar>
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
            <>
              <Row>
                {formType === 'signup' && (
                  <Col
                    xs={12}
                    md={{ span: 6, offset: 3 }}
                    style={{ marginTop: '7%' }}
                  >
                    <>
                      <h3
                        style={{
                          color: '#ffffff',
                          margin: '0px auto 50px auto',
                          textAlign: 'center',
                        }}
                      >
                        Sign Up
                      </h3>
                      <Form>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formFirstName'
                            >
                              <Form.Control
                                type='text'
                                name={'firstName'}
                                placeholder='First Name'
                                value={inputValues.firstName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.firstName && (
                                <p style={{ color: 'red' }}>
                                  {validation.firstName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formLastName'
                            >
                              <Form.Control
                                type='text'
                                name={'lastName'}
                                placeholder='Last Name'
                                value={inputValues.lastName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.lastName && (
                                <p style={{ color: 'red' }}>
                                  {validation.lastName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formEmail'>
                              <Form.Control
                                type='email'
                                name={'email'}
                                placeholder='Email'
                                value={inputValues.email}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.email && (
                                <p style={{ color: 'red' }}>
                                  {validation.email}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formMobile'>
                              <Form.Control
                                type='tel'
                                name={'mobile'}
                                placeholder='Mobile'
                                value={inputValues.mobile}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.mobile && (
                                <p style={{ color: 'red' }}>
                                  {validation.mobile}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formPassword'
                            >
                              <Form.Control
                                type='password'
                                name={'passWord'}
                                placeholder='Password'
                                value={inputValues.passWord}
                                onChange={(e) => handleChange(e)}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formUserName'
                            >
                              <Form.Control
                                type='text'
                                name={'userName'}
                                placeholder='User Name'
                                value={inputValues.userName}
                                onChange={(e) => handleChange(e)}
                              />
                              {validation.userName && (
                                <p style={{ color: 'red' }}>
                                  {validation.userName}
                                </p>
                              )}
                            </Form.Group>
                          </Col>
                        </Row>
                        <div className='d-grid gap-2'>
                          <Button variant='primary' onClick={signupSubmit}>
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </>
                  </Col>
                )}
                {formType === 'login' && (
                  <Col
                    xs={12}
                    md={{ span: 4, offset: 4 }}
                    style={{ marginTop: '7%' }}
                  >
                    <>
                      <h3
                        style={{
                          color: '#ffffff',
                          margin: '0px auto 50px auto',
                          textAlign: 'center',
                        }}
                      >
                        Log In
                      </h3>
                      {(errMessage || regMessage) && (
                        <p
                          style={{
                            color: errMessage
                              ? 'red'
                              : regMessage
                              ? 'green'
                              : '',
                          }}
                        >
                          {errMessage && 'Username or Password are incorrect'}
                          {regMessage && regMessage}{' '}
                        </p>
                      )}
                      <Form>
                        <Row>
                          <Col xs={12} md={12}>
                            <Form.Group
                              className='mb-3'
                              controlId='formBasicEmail'
                            >
                              <Form.Control
                                type='text'
                                placeholder='User Name'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={12}>
                            <Form.Group
                              className='mb-3'
                              controlId='formBasicEmail'
                            >
                              <Form.Control
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group
                          className='mb-3'
                          controlId='formBasicCheckbox'
                        ></Form.Group>
                        <div className='d-grid gap-2'>
                          <Button variant='primary' onClick={loginSubmit}>
                            Submit
                          </Button>
                        </div>
                      </Form>
                    </>
                  </Col>
                )}
              </Row>
            </>
          </Modal.Body>
        </Modal>
        {showProfile && (
          <>
            <div className='panel-overlay'></div>
            <div className='panel panel-medium'>
              <FontAwesomeIcon
                icon={faClose}
                className={'panel-close'}
                onClick={() => setShowProfile(false)}
              />
              <h4 className='panel-header content-heading'>{isAdmin ?  'Admin Profile' :'User Profile'}</h4>
              <div className='panel-content'>
                <Row>
                  <Col xs={6} md={{ span: 12 }}>
                    <>
                      <Form>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formFirstName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='First Name'
                                value={inputValues.firstName}
                                onChange={(e) => handleChange(e)}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formLastName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='Last Name'
                                value={inputValues.lastName}
                                onChange={(e) => handleChange(e)}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formEmail'>
                              <Form.Control
                                type='email'
                                placeholder='Email'
                                value={inputValues.email}
                                onChange={(e) => handleChange(e)}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group className='mb-3' controlId='formMobile'>
                              <Form.Control
                                type='tel'
                                pattern='^[789]\d{9,9}$'
                                maxlength={10}
                                placeholder='Mobile'
                                value={inputValues.mobile}
                                onChange={(e) => handleChange(e)}
                                disabled={true}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formPassword'
                            >
                              <Form.Control
                                type='password'
                                placeholder='Password'
                                value={inputValues.passWord}
                                disabled={true}
                                onChange={(e) => handleChange(e)}
                              />
                            </Form.Group>
                          </Col>
                          <Col xs={12} md={6}>
                            <Form.Group
                              className='mb-3'
                              controlId='formUserName'
                            >
                              <Form.Control
                                type='text'
                                placeholder='User Name'
                                value={inputValues.userName}
                                disabled={true}
                                onChange={(e) => handleChange(e)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>
                    </>
                  </Col>
                </Row>
              </div>
              <div className='panel-footer'>
                <div className=' gap-2' style={{ textAlign: 'center' }}></div>
              </div>
            </div>
          </>
        )}
      </>
    )
  );
}
const mapStateToProps = (state) => ({
  menuToggle: state.menuToggle,
});
const mapDispatchToProps = (dispatch) => ({
  menuClick: () => dispatch(menuClick()),
});

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header);
export { HeaderConnect };
