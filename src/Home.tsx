import React, { useState } from 'react';
import './Home.css';
import main from './images/main.png';
import start from './images/start.png';
import next from './images/next.png';
import play from './images/play.png';
import back from './images/back.png';
import yes from './images/yes.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home: React.FC = () => {
  const [content, setContent] = useState(""); // State to manage content
  const [showNextButton, setShowNextButton] = useState(false);
  const [showYesButton, setShowYesButton] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true); // State for Start button
  const [contentPosition, setContentPosition] = useState({ top: 20, right: 20 });

  const handleStart = () => {
    setContent("Hi! I am Mizo and I love bananas 🍌")
    setShowNextButton(true);
    setShowBackButton(true);
    setShowStartButton(false); // Hide Start button after clicking
    setContentPosition({ top: 20, right: 20 });
  };

  const handleNext = () => {
    setContent("Can you help me get it?🤔");
    setShowYesButton(true);
    setShowNextButton(false);
    setContentPosition({ top: 20, right: 20 });
  };

  const handleYes = () => {
    setContent("Great! Let's play");
    setShowPlayButton(true);
    setShowYesButton(false);
    setContentPosition({ top: 20, right: 20 });
  };

  const handleBack = () => {
    setContent(""); // Clear content
    setShowPlayButton(false);
    setShowYesButton(false);
    setShowNextButton(true);
  };

  return (
    <div>
      <div className='image-container' style={{ position: 'relative' }}>
        <img className="main-img" src={main} alt="Main" />
        {content && 
        <div className="text-bubble overlay" style={{ top: contentPosition.top, right: contentPosition.right }}>
          {content}
        </div>}
        {showBackButton && <img className="btn-back" src={back} alt="Back" onClick={handleBack} />}
        {showYesButton && <img className="btn-yes" src={yes} alt="Yes" onClick={handleYes} />}
        {showStartButton && <img className="btn-start" src={start} alt="Start" onClick={handleStart} />}   
        {showNextButton && <img className="btn-next" src={next} alt="Next" onClick={handleNext} />}
        {showPlayButton && (
          <Link to="/screen2">
            <img className="btn-play" src={play} alt="Play" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
