import Header from '../components/header';
import '../styles.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <h1>About Me</h1>
        <p>
          I recently graduated with honors from the Full Stack Web + Mobile
          Development bootcamp at Nucamp (August 2022).
        </p>
      </div>
    </div>
  );
};

export default About;
