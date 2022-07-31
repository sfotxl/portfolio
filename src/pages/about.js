import Header from '../components/header';
import '../styles.css';

const About = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <h1>About Me</h1>
        <div>This is the about page.</div>
      </div>
    </div>
  );
};

export default About;
