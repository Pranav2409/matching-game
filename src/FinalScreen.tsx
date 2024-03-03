import React from 'react'
import bg from './images/bg.png';
import back from './images/back.png';
import monkey from './images/monkey.png';
import result from './images/results.png';
import './FinalScreen.css';
import { Link } from 'react-router-dom';

const FinalScreen = () => (
    <div>
        <img className ="btn-bg" src={bg} />

        <Link to="/ActScreen"> {/* Link to Screen2 component */}
        <img className="btn-back" src={back}/>
      </Link>
      
        <img className ="btn-result" src={result} />
        <img className="btn-monkey" src={monkey} />
        
    </div>
)

export default FinalScreen
