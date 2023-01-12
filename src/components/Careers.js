import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { Careerbnr } from '../images/images';
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';

function careerDescribcont() {
  return (
    <>
      <b style={{ display: 'block', marginTop: '20px' }}>
        Keys & Responsibility
      </b>
      <ul>
        <li>
          {' '}
          Collaborating with Solutions Architects, Business Analysts, Project
          Leads, DevOps, Security Engineers & Scrum{' '}
        </li>
        <li>Masters to deliver working software</li>
        <li>Developing commercial progressive SSR Angular applications</li>
        <li>Using TypeScript on a daily basis</li>
        <li>
          Creating integrations with headless backend systems and third-party
          SaaS products
        </li>
        <li>Performing technical analysis of business requirements</li>
        <li>
          Providing bullet-proof functionality in cooperation with the QA team
        </li>
      </ul>
      <b style={{ display: 'block', marginTop: '20px' }}>
        Key Requirements/Minimum Qualifications :
      </b>
      <ul>
        <li>
          {' '}
          Have 4+ years of professional experience in Frontend Web application
          development Are experienced in working with Angular 2+ with TypeScript
        </li>
        <li>
          Have Experience in building responsive web applications using HTML5,
          CSS, JavaScript
        </li>
        <li>
          Have Experience working in an Agile environment along with JIRA,
          Confluence, Bitbucket and Git
        </li>
        <li>Have experience with ngrx, rxjs</li>
        <li>Have good knowledge of CSS/SCSS</li>
        <li>
          Have experience with Unit testing (ideally Jasmine/Karma) or E2E
          testing (ideally Cypress)
        </li>
        <li>Speak English fluently</li>
      </ul>
      <b style={{ display: 'block', marginTop: '20px' }}>
        {' '}
        Preferred Qualifications/Skills/Experience :
      </b>
      <ul>
        <li> Know how to work with SAP Commerce - it's a big plus</li>
        <li>Like to get involved in additional initiatives</li>
        <li>Know what a development architecture is</li>
        <li>Easily coordinate your work</li>
      </ul>
    </>
  );
}
function Careers() {
  const [jobData, setJobData] = useState('');
  return (
    <>
      <div className='page-banner'>
        <Image src={Careerbnr} />
      </div>
      <Container>
        <h3 className={'mt-5 mb-5 content-heading'}>
          <span>Careers</span>
        </h3>

        <Row className='career-nav'>
          <Col xs={12} md={4}>
            <ListGroup>
              <ListGroup.Item>USA (6)</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={12} md={8}>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>UI Devloper</h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('JavaDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'JavaDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>Java Devloper</h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('JavaDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'JavaDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>.NET Devloper</h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('NETDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'NETDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>AWS Devloper</h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('AWSDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'AWSDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>
                          Clinical SAS Devloper
                        </h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('ClinicalSASDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'ClinicalSASDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='career-card'>
              <Card.Body>
                <Card.Text>
                  <Row>
                    <Col xs={12} md={1}>
                      <FontAwesomeIcon
                        icon={faBusinessTime}
                        className='carrer-list-icon'
                      />
                    </Col>
                    <Col xs={12} md={11}>
                      <div className='d-flex'>
                        <h5 className='carrer-job-title'>UI Devloper</h5>
                      </div>
                      <p className='carrer-job-desc'>
                        Our IT Staff Augmentation Services provide critical
                        skill sets for your business to fulfill IT business
                        objectives by bridging gaps in your current team size as
                        well as competencies. We provide staffing solutions that
                        will help ensure your technology initiatives keep pace
                        with your business needs.
                      </p>
                      <div className='d-flex'>
                        <span className='carrer-grid'>Full Time</span>
                      </div>
                      <Button
                        variant='link'
                        size={'sm'}
                        className='m-1'
                        onClick={() => setJobData('UIDevloper')}
                      >
                        Show More
                      </Button>
                      {jobData === 'UIDevloper' && careerDescribcont()}
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Careers;
