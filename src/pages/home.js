import Header from '../components/header';
import '../styles.css';

const Home = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <h1>Aloha, world!</h1>

        <p>I'm Kalani. Check out some of my projects.</p>
      </div>
    </div>
  );
};

export default Home;
