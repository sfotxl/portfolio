import Header from '../components/header';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import DragonImg from '../assets/logo.jpg';
import ItineraryImg from '../assets/itinerary.png';
import BootstrapDragonImg from '../assets/dragonslairbootstrap.png';

const Projects = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <h1>Projects</h1>
        <p>Here is some information about projects I've worked on.</p>
        <p>
          For reference my GitHub can be found{' '}
          <a rel='noreferrer' href='http://github.com/sfotxl'>
            here
          </a>
        </p>
      </div>
      <Row>
        <Col className='grid' xs='6' md='4'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://dragonslairfinegoods.netlify.app'
          >
            <img src={DragonImg} alt="Dragon's Lair logo" width='100%' />
          </a>
          Dragons Lair React App
        </Col>
        <Col xs='6' md='4'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://hamburg.netlify.app'
          >
            <img
              src={ItineraryImg}
              alt='Screenshot of Itinerary Grid'
              width='100%'
            />
          </a>
          Itinerary App
        </Col>
        <Col xs='6' md='4'>
          Wide Body Tracker
        </Col>
        <Col xs='6' md='4'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://dragonslair.netlify.app'
          >
            <img
              src={BootstrapDragonImg}
              alt="Dragon's Lair Bootstrap site"
              width='100%'
            />
          </a>
          <Row>
            <Col xs='8'>Dragons Lair Bootstrap Site</Col>
            <Col xs='4'>
              <a
                target='_blank'
                rel='noreferrer'
                href='http://github.com/sfotxl/dragonslair'
              >
                GitHub
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
