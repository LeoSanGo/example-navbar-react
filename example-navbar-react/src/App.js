import Navbar from './components/Navbar';
import BackgroundImg from './img/bg.jpg'
import './App.css';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <img src={BackgroundImg} alt='background'/>

      </div>
    </>
  );
};

export default App;
