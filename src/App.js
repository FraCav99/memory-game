import {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Play from './components/Play';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [displayPlay, setDisplayPlay] = useState(true);
  const [displayAbout, setDisplayAbout] = useState(false);

  /* Header functions Props */
  const switchPlaySection = () => {
    setDisplayPlay(true);
    setDisplayAbout(false);
  }
  
  const switchAboutSection = () => {
    setDisplayPlay(false);
    setDisplayAbout(true);
  }

  return (
    <div className="App">
      <Header 
        switchPlaySection={switchPlaySection}
        switchAboutSection={switchAboutSection}
      />
      {displayPlay && <Play />}
      {displayAbout && <About />}
      <Footer />
    </div>
  );
}

export default App;
