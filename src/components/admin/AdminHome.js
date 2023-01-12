import React, { useState, useEffect } from 'react';
import {
  Table,
  Row,
  Col,
  ListGroup,
  Container,
  Form,
  Button,
  Alert,
  Modal,
} from 'react-bootstrap';
import { HeaderConnect } from '../header';
import PhoneInput from 'react-phone-input-2';
import {
  faAdd,
  faEdit,
  faTrash,
  faUsers,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

function AdminHome(props) {
  const [userList, setUserList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [addUserPnl, setAddUserPnl] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [passWord, setPassWord] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const AddUserOpen = () => {
    setAddUserPnl(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setPassWord('');
    setUserName('');
    // setRole("");
  };
  async function editUserOpen(item) {
    console.log('----- edit', item);
    setAddUserPnl(true);
    const response = await fetch(
      `http://localhost/php/api.php?action=getUserByUserName&userName=${item.userName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: stringifiedPerson.data.authToken,
          //&&`Bearer ${stringifiedPerson.data.authToken}`,
        },
      }
    );
    const selectedData = await response.json();
    let data = selectedData?.users;
    setSelectedItem(data);
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setMobile(data.phone);
    setPassWord(data.password);
    setUserName(data.userName);
    // setUserName(data.role);
  }
  async function deleteConfirm(item) {
    console.log('-------delete confirm ', item);
    setshowConfirmation(true);
    const response = await fetch(
      `http://localhost/php/api.php?action=getUserByUserName&userName=${item.userName}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: stringifiedPerson.data.authToken,
          //&&`Bearer ${stringifiedPerson.data.authToken}`,
        },
      }
    );
    const selectedData = await response.json();
    let data = selectedData?.users;
    setUserName(data.userName);
  }
  const USERTABLEMENU = [
    {
      id: 'adduser',
      text: 'Add User',
      icon: faAdd,
      onClick: AddUserOpen,
    },
  ];

  let UpdateUserData = (item) => {
    console.log('------update user', item);
    fetch(
      `http://localhost/php/api.php?action=updateUser&userName=${item.userName}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          //Authorization: stringifiedPerson.data.authToken,
          //&&  `Bearer ${stringifiedPerson.data.authToken}`,
        },
        body: JSON.stringify({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: mobile,
          password: passWord,
          // role: role,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAddUserPnl(false);
        getData();
        setMessage(res.message);
        setMessageType('success');
      })
      .catch((error) => {
        console.log('error', error);
        setAddUserPnl(false);
        getData();
      });
  };
  let DeleteUserData = (userName) => {
    console.log('----delete user', userName);
    fetch(
      `http://localhost/php/api.php?action=deleteUser&userName=${userName}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: stringifiedPerson.data.authToken,
          //&&   `Bearer ${stringifiedPerson.data.authToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setshowConfirmation(false);
        getData();
        setMessage(res.message);
        setMessageType('success');
      });
  };
  let AddUserData = () => {
    if (
      (userName !== '' && firstName !== '' && lastName !== '',
      email !== '',
      mobile !== '' && passWord !== '')
    ) {
      fetch('http://localhost/php/api.php?action=register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: mobile,
          password: passWord,
          // role: "role",
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          setAddUserPnl(false);
          getData();
          setMessage(res.message);
          setMessageType('success');
        })
        .catch((error) => {
          console.log('error', error);
          setAddUserPnl(false);
          getData();
          // setMessage(res.message);
          setMessageType('success');
        });
    }
  };
  useEffect(() => {
    getData();
    document.getElementsByClassName('scroll-content')[0].style.height =
      window.innerHeight - 110 + 'px';
    if (message) {
      setTimeout(() => {
        setMessage('');
        setMessageType('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobile('');
        setPassWord('');
        setUserName('');
      }, 3000);
    }
  }, [message]);
  async function getData() {
    const response = await fetch(
      'http://localhost/php/api.php?action=getAllUsers',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          //Authorization: stringifiedPerson.data.authToken,
          //&&`Bearer ${stringifiedPerson.data.authToken}`,
        },
      }
    );
    const data = await response.json();
    setUserList(data.users);
    console.log(data.users, 'users list');
  }
  const requestSearch = (searchValue, items) => {
    if (searchValue.length < 1 || !searchValue) {
      setFilterList(userList);
    } else {
      const filteredRows = items.filter((item) => {
        return (
          item.firstName
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase()) ||
          item.lastName
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase()) ||
          item.email
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase()) ||
          item.phone
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase())
        );
      });
      setFilterList(filteredRows);
    }
  };
  const users = filterList.length ? filterList : userList;
  const userData = users?.map((item, index) => (
    <tr>
      <td>{index + 1}</td>
      <td>
        <Button variant='link' onClick={() => editUserOpen(item)}>
          {item.firstName}
        </Button>
      </td>
      <td>{item.lastName}</td>
      <td>{item.userName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>
        <FontAwesomeIcon
          icon={faEdit}
          style={{ padding: '5px', cursor: 'pointer' }}
          onClick={() => editUserOpen(item)}
        ></FontAwesomeIcon>{' '}
        <FontAwesomeIcon
          icon={faTrash}
          style={{ padding: '5px', cursor: 'pointer' }}
          onClick={() => deleteConfirm(item)}
        ></FontAwesomeIcon>{' '}
      </td>
    </tr>
  ));

  return (
    <>
      <Container fluid>
        <Row style={{ marginTop: '60px' }}>
          {!props.menuToggle && (
            <Col
              xs={12}
              md={3}
              style={{ boxShadow: '1px 0px 5px 0px #403c4329', padding: '0px' }}
            >
              <ListGroup className='side-menu'>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ marginRight: '5px' }}
                  />{' '}
                  User List
                </ListGroup.Item>
              </ListGroup>
            </Col>
          )}
          <Col xs={12} md={props.menuToggle ? 12 : 9}>
            <>
              {message && (
                <Alert
                  key={messageType}
                  variant={messageType}
                  className={'page-message'}
                  onClose={() => setMessage('')}
                  dismissible
                >
                  {message}
                </Alert>
              )}
              <div className='scroll-content'>
                <HeaderConnect
                  menuLink={USERTABLEMENU}
                  type={'table'}
                  fluid={true}
                  inputonChange={(e) => requestSearch(e.target.value, userList)}
                />
                <Table responsive='xl'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      {/* <th>Role</th> */}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>{userData}</tbody>
                </Table>
              </div>
            </>
          </Col>
        </Row>
      </Container>

      {addUserPnl && (
        <>
          <div className='panel-overlay'></div>
          <div className='panel panel-medium'>
            <FontAwesomeIcon
              icon={faClose}
              className={'panel-close'}
              onClick={() => () => {
                setAddUserPnl(false);
                setSelectedItem([]);
              }}
            />
            <h4 className='panel-header content-heading'>
              {selectedItem.userName ? 'Edit User' : 'Add User'}
            </h4>
            <div className='panel-content'>
              <Row>
                <Col xs={12} md={{ span: 12 }}>
                  <>
                    <Form>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group
                            className='mb-3'
                            controlId='formFirstName'
                          >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='First Name'
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group className='mb-3' controlId='formLastName'>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='Last Name'
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group className='mb-3' controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type='email'
                              placeholder='Email'
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group className='mb-3' controlId='formMobile'>
                            <Form.Label>Mobile</Form.Label>

                            <PhoneInput
                              name={'mobile'}
                              placeholder='Mobile'
                              country={'us'}
                              value={mobile}
                              onChange={(e) => {
                                setMobile(e);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} md={6}>
                          <Form.Group className='mb-3' controlId='formPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                              type='password'
                              placeholder='Password'
                              value={passWord}
                              onChange={(e) => setPassWord(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                          <Form.Group className='mb-3' controlId='formUserName'>
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                              type='text'
                              placeholder='User Name'
                              value={userName}
                              disabled={selectedItem.userName ? true : false}
                              onChange={(e) => setUserName(e.target.value)}
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
              <div className=' gap-2' style={{ textAlign: 'center' }}>
                <Button
                  variant='link'
                  size={'sm'}
                  onClick={() => (setAddUserPnl(false), setSelectedItem([]))}
                >
                  Cancel
                </Button>
                {selectedItem.userName ? (
                  <Button
                    variant='primary'
                    size={'sm'}
                    onClick={() => UpdateUserData(selectedItem)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button variant='primary' size={'sm'} onClick={AddUserData}>
                    Save
                  </Button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      {showConfirmation && (
        <Modal
          show={showConfirmation}
          onHide={() => setshowConfirmation(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure, you want to delete <b>{userName}</b> ?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='secondary'
              onClick={() => setshowConfirmation(false)}
            >
              No
            </Button>
            <Button variant='primary' onClick={() => DeleteUserData(userName)}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  menuToggle: state.menuToggle,
});

const Admin = connect(mapStateToProps, '')(AdminHome);
export { Admin };
