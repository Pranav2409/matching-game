import React from 'react'
import bg from './images/bg.png';
import back from './images/back.png';
import play from './images/play.png';
import './Screen2.css';
import { Link, useNavigate } from 'react-router-dom';
import ActScreen from './ActScreen';
import pinkcard from './images/pinkcard.png'
import bluecard from './images/bluecard.png';
import cards from './images/cards.png';
import one from './images/two.png';
import two from './images/two.png'
import three from './images/three.png';

const Screen2: React.FC  = () => {
    const navigate = useNavigate();

    const handlePlay = () => {
        navigate("/ActScreen");
    };
  return (
    <div className="container">
      {/* <img className="btn-bg" src ={bg} /> */}
   
     
      <div className="container">
      <div className="box pink-box">
  <div className="content-container">
 
    <img className="pink" src={pinkcard} alt="Pink Card"/>
    {/* <img className='stepnum' src={one}/> */}
    <div className="text-container">
      
      <h4 className='text1'>Select a Pink Card</h4>
      <p className='text2'>It has Images</p>
    </div>
  </div>
</div>
      
      <div className="box blue-box">
        <div className="content-container">
        <img src={bluecard} alt="Blue Card "/> 
      {/* <img className='stepnum' src= {two}/> */}
      <div className="text-container">
      <h4 className='text1'>Select a Blue Card</h4>
      <p className='text2'>It has Alphabets</p>
        </div>
      
      </div>
      
      </div>
      

      <div className="box mixed-box">
        <div className="content-container">
        <img src={cards} alt="cards" /> 
        {/* <img src = {three} /> */}
        <div className="text-container">
        <h4 className='text1 custom-text'>If they are same</h4>
        <p className='text2 custom-text'>It's a match otherwise retry</p>
        
        </div>
      </div>
      </div>

      
    </div>
      <img className = "btn-play" src= {play} onClick={handlePlay}></img>

      <Link to ="/">
      <img className="btn-back" src={back}/>
      </Link>
     
     </div>
  )
}

export default Screen2
