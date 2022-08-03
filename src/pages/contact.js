import Header from '../components/header';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';

const Contact = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <h1>Reach out!</h1>
        <p>
          I'm always open to collaborating on group projects to gain more
          experience in programming.
        </p>
        <h3>Via</h3>
        <div>
          <div>Tel.: (346) 247-6864</div>
          <div>
            Email:{' '}
            <Link to='mailto: kromelo@icloud.com'>kromelo@icloud.com</Link>
          </div>
          <div>
            <Link to='https://www.linkedin.com/in/iahtxl'>LinkedIn</Link>
          </div>
          <div>
            Twitter:{' '}
            <Link to='https://twitter.com/kalani_man'>@kalani_man</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
