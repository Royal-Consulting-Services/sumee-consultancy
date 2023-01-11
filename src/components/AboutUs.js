import React, { useState } from 'react';
import {
	Carousel,
	Container,
	Row,
	Col,
	Card,
	ListGroup,
	Table,
} from 'react-bootstrap';
import { SLIDERS, SERVICES, MENULINK } from '../content';
import {
	Blog1,
	Blog2,
	Servicebnr,
	Itrecruitment,
	Coreimg,
	Aboutusimg,
} from '../images/images';
import Footer from './footer/Footer';
import {
	faCog,
	faBriefcase,
	faEye,
	faStar,
	faCartShopping,
	faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import Header from './header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'react-bootstrap/Image';
import { AboutBnr } from '../images/images';
const slides = SLIDERS.map((slider) => {
	return (
		<Carousel.Item key={slider.src} variant='dark'>
			<img className='d-block w-100' src={slider.src} alt='First slide' />
			<Carousel.Caption>
				<h3>{slider.captionText}</h3>
				<p>{slider.captionHeader}</p>
			</Carousel.Caption>
		</Carousel.Item>
	);
});
function AboutUs() {
	const stringifiedPerson = JSON.parse(localStorage.getItem('user-info'));
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
						<img className='d-block w-100' src={Aboutusimg} alt='First slide' />
					</Col>
					<Col xs={12} md={6}>
						SuMee Consulting LLC is the professional technology solutions
						company, providing a wide range of consulting, solutions & platforms
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
						<img className='d-block w-100' src={Coreimg} alt='First slide' />
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
											directly on <a href=''>+1 678-384-9757</a> or email us at{' '}
											<a href=''> info@sumeeconsulting.com</a> We’ll guide you
											through our process, advise on the best possible solutions
											and steer you in the right direction.{' '}
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

export default AboutUs;
