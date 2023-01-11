import React, { useState } from 'react';
import {
	Carousel,
	Container,
	Row,
	Col,
	Card,
	Button,
	Image,
} from 'react-bootstrap';
import Header from './header/Header';
import { SLIDERS, MENULINK, SERVICES } from '../content';
import { Blog4, Blog1, Blog2, Aboutusimg } from '../images/images';
import Footer from './footer/Footer';
import {
	faDesktop,
	faCloud,
	faDatabase,
	faChartSimple,
	faCog,
	faStopwatch,
	faGlobe,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {
	faServicestack,
	faWhatsapp,
	faLinkedinIn,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { propTypes } from 'react-bootstrap/esm/Image';

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

function Home(props) {
	const [playAuto, setPlayAuto] = useState(false);
	const slideStart = () => {
		setPlayAuto(!playAuto);
	};

	// const slideEnd = () => {
	//   setPlayAuto(false)
	// }
	const serviceClicked = (e, item) => {
		console.log(item.title);
		props.clickedItem(item);
	};

	return (
		<>
			<div className='carousel-div'>
				<Carousel
					autoPlay={true}
					interval={3000}
					onSlide={slideStart}
					onSlid={slideStart}
				>
					{slides}
				</Carousel>
			</div>
			<Container>
				<h3 className={'mt-5 mb-5 content-heading'}>
					<span>About Us</span>
				</h3>
				<Row>
					<Col xs={12} md={6}>
						{/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
            </iframe> */}
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
				<Row style={{ marginTop: '50px' }}>
					<h3 className={'mt-5 mb-5 content-heading'}>
						<span>Services</span>
					</h3>
					{SERVICES.map((item) => (
						<Col xs={12} md={3} style={{ padding: '0px' }}>
							<Card
								className='technology-card'
								onClick={(e) => serviceClicked(e, item)}
							>
								<Card.Body>
									<Card.Title style={{ textAlign: 'center', height: '50px' }}>
										{item.title}
									</Card.Title>
									<Card.Text>
										<span className='tech-icon-span'>
											<Image src={item.image} className='bnr-image' />
										</span>
										<p className='tech-content'>{item.content}</p>
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
				<Button
					variant='link'
					style={{ padding: '0px', textDecoration: 'none' }}
					onClick={''}
				></Button>
				{/* <Row>
          <h3 className={"mt-5 mb-5 content-heading"}><span>Consulting Offers</span></h3>
          <Col xs={12} md={3} >
            <Card className='conslt-cont-card'>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faCog} className="tech-icon" /> Managed Services</Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    We provide managed services & support globally to meet the needs and demands of our clients. We deliver them through a single engagement, multi-source model. Our project management team work closely in liaison with our clients to provide services meeting exact business requirements that significantly improves KPI metrics and reduces costs.
                  </p >
                </Card.Text>
                <Button variant="link"> </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} >
            <Card className='conslt-cont-card'>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faStopwatch} className="tech-icon" /> Project Management</Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    We provide project management services for improved scope of work, stakeholder expectations, cost and schedule management. Our experienced team of project management professionals have helped clients to succeed in accomplishing their project management goals.
                  </p>
                </Card.Text>
                <Button variant="link"> </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} >
            <Card className='conslt-cont-card'>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faGlobe} className="tech-icon" /> Offshoring</Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    Offshoring isn't just about moneitization of cost effective talent and time zone advantage. We deliver value that is driven by globally recognized competency, quality compliant processes & out of box innovation. During Covid times, we have accomplished more trust and growth with improved team productivity during lockdown period..
                  </p>
                </Card.Text>
                <Button variant="link"> </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} >
            <Card className='conslt-cont-card'>
              <Card.Body>
                <Card.Title><FontAwesomeIcon icon={faUsers} className="tech-icon" /> Staffing</Card.Title>
                <Card.Text>
                  <p className='help-content'>
                    Need for talent as well as talent finding is tough and that is our forte. We are found our niche in spotting talent, then be it in market or at our competitors. Irrespective of industries, be it banking and financial services, manufacturing and retail, energy and utilities, communication and media, technology and telecom services and beyond, we are always on quest to deliver quality, customer-satisfaction and on-time.
                  </p>
                </Card.Text>
                <Button variant="link"> </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
				<Button
					variant='link'
					style={{ padding: '0px', textDecoration: 'none' }}
					onClick={''}
				></Button>
				<Row>
					<h3 className={'mt-5 mb-5 content-heading'}>
						<span>Why our clients chose us?</span>
					</h3>
					<Col xs={12} md={4}>
						<Card className='client-card'>
							<div className='client-card-img'>
								<Card.Img variant='top' src={Blog1} />
							</div>
							<Card.Body>
								<Card.Title>Young Team with Quality experience</Card.Title>
								<Card.Text>
									Our young team is agile and well equiped with relevant
									experience in offshore environment & understands exact
									requirements of our clients, their business model, target
									market that they are serving and their go-to-market schedules.
								</Card.Text>
								<Button variant='link'> </Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={4}>
						<Card className='client-card'>
							<div className='client-card-img'>
								<Card.Img variant='top' src={Blog2} />
							</div>
							<Card.Body>
								<Card.Title>Process Culture</Card.Title>
								<Card.Text>
									Well tuned operation powered by culture of collaboration,
									continuous training & development, strength based alignment to
									roles, have helped us deliver uniform client experience.
								</Card.Text>
								<Button variant='link'> </Button>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={12} md={4}>
						<Card className='client-card'>
							<div className='client-card-img'>
								<Card.Img variant='top' src={Blog4} />
							</div>
							<Card.Body>
								<Card.Title>Tools and Automation support</Card.Title>
								<Card.Text>
									All our operations are supported by process maturied
									implementation of popular technology tools that help us
									capture our KPIs, schedule compliance data, operational
									metrics.
								</Card.Text>
								<Button variant='link'> </Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Home;
