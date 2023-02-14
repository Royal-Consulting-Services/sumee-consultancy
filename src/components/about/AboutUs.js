import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Coreimg, Aboutusimg } from '../../images/images';
import { faBriefcase, faDotCircle, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
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
            <Image rounded={true} className='d-block w-100' src={Aboutusimg} alt='First slide' />
          </Col>
          <Col xs={12} md={6}>
            SuMee LMS was developed with complete features  which allows Schools to make their own private online hub filled with dynamic courses for learning anytime and anywhere. The product provides a complete set of learner-centric applications and collaborative learning environments that encourage both teaching and learning. It provides advantage of uniting skilled teachers on one platform to make their knowledge sharable which in turn makes the content more resourceful.
            <br />
            <br />
            The SuMee LMS project is supported by a team of dedicated full-time developers, and a network of SuMee LMS Partners. The initiative is guided by open collaboration and community support, and continues to implement quick bug fixes and improvements, with new updates regularly.
          </Col>
        </Row>
        <Row className={'mb-5'}>
          <h4>Highlights of Core Features</h4>
          <Col xs={12} md={12}>
            <ol className='highlight-list'>
              <li><b>Customization:</b> <span>SuMee LMS is very customizable with wide range of plugins and add-ons as per client’s requirement. It also has many LTI integrations with other products and services.</span></li>
              <li><b>Mobile Friendly:</b><span> The SuMee LMS web interface can also be customized to have responsive web design using HTML 5 to access the features seamlessly from any device. A mobile application for Android and IOS will be provided for convenient access throughout the features.</span></li>
              <li><b>Live Engagement:</b><span> SuMee LMS has built-in chat functionality. There is also add-in service for most of the major synchronous learning tools. Administrator will have the access to provide the chat option to users.</span></li>
              <li><b>Online Tests:</b><span> In this features of SuMee LMS teachers can conduct online tests in different formats like Assignments, Multiple choice questions, Quiz etc., And the result Grades will be awarded accordingly.</span></li>
              <li><b>Accessibility:</b><span> SuMee LMS’s goal is to be fully accessible and usable for all users regardless of ability. Teachers are individually responsible for ensuring that their content is accessible, such as PDFs, Videos and other documents.</span></li>
              <li><b>Analytics: </b><span>SuMee LMS has a wide variety of reports and logs that allow teachers to track student progress and successes. These are generated at the course level and teachers will be trained to use them well. Every single instance of login, course access, assignment or quiz attempts and failed login attempts will be logged in detail along with the date, time and IP address and all.</span></li>
              <li><b>Content Repository:</b><span> SuMee LMS’s repositories allow users to upload files to a course from a variety of outside file repositories, including Dropbox, Flickr, Google Drive, and traditional computer upload. Teachers can also search for files from any of their courses hosted on the same SuMee LMS server.</span></li>
              <li><b>Tool Variety:</b><span> SuMee LMS has a wide variety of tools available that can be turned on or off at the system level, such as publisher integration.</span></li>
              <li><b>Course Management (Teacher): </b><span>
                Depending on your site level options, teachers can highly customize their course setup and management. Teachers can use SuMee LMS as a simple file repository.</span></li>
              <li><b>Course Management (Administrator): </b><span> You can integrate SuMee LMS with your organization’s SIS (Student Information System). SuMee LMS has a vast amount of customization options; you can choose to self-host and install pre-made customizations and create your own. If you don’t have internal system support, you can have a SuMee LMS partner to host and support course management.
                Benefits Overview</span></li>
              <li><b>Easy to use:</b><span>
                SuMee LMS is a user-friendly LMS with an uncomplicated interface and easy drag-and-drop functionality. It also has extensive documentation and continuous usability enhancements that make it straightforward to learn and utilize.</span></li>
              <li><b>How to use training videos: </b><span>
                All the user categories which include Administrators, Teachers and Students will be provided with detailed videos on how to use the application. A complete set of how to use videos will be provided online to access anytime.</span></li>
              <li><b>Always up-to-date:</b><span>
                The SuMee LMS platform is constantly analyzed and upgraded to address the changing preferences of its large user base, as an advantage of its highly agile system. It features a modular configuration that facilitates quick and cost-effective software development process.</span></li>
              <li><b>All-in-one learning platform: </b><span>
                SuMee LMS can be configured to your preferred teaching modality. You can use SuMee LMS for exclusively online courses or for blended pedagogy through simple setting-up of its features and by integrating other third party apps.</span></li>
              <li><b>Robust, private, and secure: </b><span>
                SuMee LMS has a solid information security feature that is also regularly updated to ensure powerful protection to counter against illegal access and to prevent fraudulent use and loss of data. For further data security, you can readily deploy the platform on a private secure server or cloud.</span></li>
              <li><b>Use on any device: </b><span>SuMee LMS is accessible anytime, anywhere. It is also compatible with any browser and any access device, ensuring that all its page elements and functionalities are complete and arranged as the original page design.</span></li>
              <li><b>Extensive resources available:</b><span>
                SuMee LMS resources are readily available to both teachers for information purposes and administrators for software development and higher-level system modification. Its numerous plug-ins/add-ons provide the comprehensive support that further enhance SuMee LMS’s user experience.</span></li>
            </ol>
          </Col>
        </Row>
        <Row className={'mb-5'}>
          <h4>Salient Features</h4>
          <Col xs={12} md={12}>
            <ul className='salient-list'> 
              <li>  <FontAwesomeIcon icon={faDotCircle} className='list-icon' /> All-in-one calendar</li>
              <li>  <FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Bulk course creation and easy backup</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Online examinations and results</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Advantage of visual based education</li>
              <li> <FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Collaborative tools and activities</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Convenient file management</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Customizable site design and layout</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Detailed reporting and logs</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Embed external resources</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Manage user roles and permissions</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Multilingual capability</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />   Multimedia integration</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Multiple progress tracking options</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Notifications and automatic alerts</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Outcomes and rubrics</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Peer and self assessment</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Personalized dashboard</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Secure authentication and mass enrolment</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' />  Simple and intuitive text editor</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Supports open standards</li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> <a hef="">info@mmtcs.in</a></li>
              <li><FontAwesomeIcon icon={faDotCircle} className='list-icon' /> Privacy Policy</li>
            </ul>
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
            <Image rounded={true} className='d-block w-100' src={Coreimg} alt='core of SuMee LMS' />
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
