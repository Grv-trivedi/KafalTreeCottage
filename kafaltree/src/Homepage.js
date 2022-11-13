import { Header } from './components/Header';
import { SlideShow } from './components/SlideShow';
import './Homepage.css';

function Homepage() {
  return (
    <div className="">
      <Header/>
      <SlideShow/>
      {/* <div><img src="images/scene1.jpg" className="" alt="logo" /></div> */}
      {/* <header className="App-header">
        <img src="images/scene1.jpg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default Homepage;
