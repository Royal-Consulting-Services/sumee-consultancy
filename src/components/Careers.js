import React, { useState } from 'react';
import {
	Carousel,
	Container,
	Row,
	Col,
	Card,
	ListGroup,
	Button,
} from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK } from '../content';
import { Blog1, Blog2, Servicebnr, Careerbnr } from '../images/images';
import Footer from './footer/Footer';
import {
	faBusinessTime,
	faCalendarDays,
	faMapLocation,
	faScrewdriverWrench,
	faCartShopping,
	faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
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
	const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
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
				{/* <Row>
          <Col xs={12} md={6}>
            <h3>Open positions</h3>
            <p>We’re looking for people to join the team who are as excited as we are to help build the platform that empowers the future generation of creators to be successful online.</p>
          </Col>
        </Row> */}
				{/* <Row>
          <Col xs={12} md={12}>
            <Form>
              <Row>
              <Col xs={12} md={4} >
                  <Form.Group className="mb-3">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select >
                      <option>India</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4} >
                  <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter " />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row> */}
				<Row className='career-nav'>
					<Col xs={12} md={4}>
						<ListGroup>
							{/* <ListGroup.Item>All Locations (10)</ListGroup.Item> */}
							<ListGroup.Item>USA (6)</ListGroup.Item>
							{/* <ListGroup.Item>USA (2)</ListGroup.Item>
              <ListGroup.Item>UK (1)</ListGroup.Item> */}
						</ListGroup>
					</Col>
					<Col xs={12} md={8}>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> UK</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> USA</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> UK</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> USA</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> UK</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
						<Card className='career-card'>
							<Card.Body>
								{/* <Card.Title>Staff Augmentation</Card.Title> */}
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
												{/* <span><FontAwesomeIcon icon={faCalendarDays} className="carrer-calender-icon" /> Posted 4 months ago</span> */}
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
												{/* <span className="carrer-grid"> 1st Stage</span>
                        <span className="carrer-grid"><FontAwesomeIcon icon={faMapLocation} /> USA</span> */}
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
								{/* <Button variant="link">read more </Button> */}
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Careers;
