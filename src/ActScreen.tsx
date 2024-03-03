import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // Import Confetti component
import back from './images/back.png';
import pinkcard from './images/pinkcard.png';
import bluecard from './images/bluecard.png';
import apple from './images/apple.png';
import app from './images/app.png';
import orange from "./images/orange.png";
import ora from "./images/ora.png";
import './ActScreen.css';
import next from './images/next.png';
import { Link } from 'react-router-dom';

const ActScreen: React.FC = () => {
  const [pinkCards, setPinkCards] = useState([
    { id: 1, content: apple, isFlipped: false },
    { id: 2, content: orange, isFlipped: false },
    { id: 3, content: apple, isFlipped: false },
    { id: 4, content: orange, isFlipped: false },
    { id: 5, content: apple, isFlipped: false },
    { id: 6, content: orange, isFlipped: false },
  ]);

  const [blueCards, setBlueCards] = useState([
    { id: 7, content: app, isFlipped: false },
    { id: 8, content: ora, isFlipped: false },
    { id: 9, content: app, isFlipped: false },
    { id: 10, content: ora, isFlipped: false },
    { id: 11, content: app, isFlipped: false },
    { id: 12, content: ora, isFlipped: false }
  ]);

  const [matchedCount, setMatchedCount] = useState(0);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [showConfetti, setShowConfetti] = useState(false); // State to control Confetti display

  useEffect(() => {
    if (matchedCount === 6) {
      // Redirect to FinalScreen when all matches are made
      // Add your redirection logic here
      console.log("All matches made, redirecting...");
    }
  }, [matchedCount]);

  const handleCardClick = (clickedCard: any, cardType: string) => {
    if (clickedCard.isFlipped) return;

    const updatedCards = cardType === 'pink' ? pinkCards : blueCards;

    // Flip the clicked card
    const updatedClickedCard = { ...clickedCard, isFlipped: true };

    // Add the clicked card to the selected cards array
    const updatedSelectedCards = [...selectedCards, updatedClickedCard];

    // Check if two cards are selected
    if (updatedSelectedCards.length === 2) {
      const [firstCard, secondCard] = updatedSelectedCards;

      // Flip the second card immediately
      const updatedPinkCards = pinkCards.map(card =>
        card.id === secondCard.id ? { ...card, isFlipped: true } : card
      );
      const updatedBlueCards = blueCards.map(card =>
        card.id === secondCard.id ? { ...card, isFlipped: true } : card
      );
      setPinkCards(updatedPinkCards);
      setBlueCards(updatedBlueCards);

      // Check if the selected cards match
      setTimeout(() => {
        if (
          (firstCard.content === apple && secondCard.content === app) ||
          (firstCard.content === orange && secondCard.content === ora)
        ) {
          // If matched, remove the matched pair from the game
          const updatedPinkCards = pinkCards.filter(card => card.id !== firstCard.id && card.id !== secondCard.id);
          const updatedBlueCards = blueCards.filter(card => card.id !== firstCard.id && card.id !== secondCard.id);
          setPinkCards(updatedPinkCards);
          setBlueCards(updatedBlueCards);
          setMatchedCount(matchedCount + 1);
          setShowConfetti(true); // Show Confetti when match is made

          // Hide Confetti after 2 seconds
          setTimeout(() => {
            setShowConfetti(false);
          }, 2000);
        } else {
          // If not matched, flip the cards back after a delay
          setTimeout(() => {
            const resetPinkCards = pinkCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false } : card
            );
            const resetBlueCards = blueCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id ? { ...card, isFlipped: false } : card
            );
            setPinkCards(resetPinkCards);
            setBlueCards(resetBlueCards);
          }, 1000);
        }
        setSelectedCards([]);
      }, 500);
    } else {
      // If only one card is selected, update the selected cards array
      setSelectedCards(updatedSelectedCards);
    }

    // Update the flipped state of the clicked card
    const updatedCardsAfterClick = updatedCards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    // Update the state of pink or blue cards based on cardType
    cardType === 'pink' ? setPinkCards(updatedCardsAfterClick) : setBlueCards(updatedCardsAfterClick);
  };

  return (
    <div className="background" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {showConfetti && <Confetti />} {/* Render Confetti component */}

      <div className="progress-bar" style={{ backgroundColor: 'lightgray', height: '20px', width: 'calc(100vw / 6)', position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)', overflow: 'hidden' }}>
        <div className="progress" style={{ width: `${(matchedCount / 6) * 100}%`, backgroundColor: 'yellow', height: '100%', position: 'absolute', left: 0 }}></div>
        <div className="progress-remaining" style={{ width: `${100 - (matchedCount / 6) * 100}%`, backgroundColor: 'lightgray', height: '100%', position: 'absolute', right: 0 }}></div>
      </div>

      <div className='pink-card-container'>
        {pinkCards.map(card => (
          <img
            key={card.id}
            className={`card-pink ${card.isFlipped ? 'flipped' : ''}`}
            src={card.isFlipped ? card.content : pinkcard}
            onClick={() => handleCardClick(card, 'pink')}
            alt={`Pink Card ${card.id}`}
          />
        ))}
      </div>
      <div className='blue-card-container'>
        {blueCards.map(card => (
          <img
            key={card.id}
            className={`card-blue ${card.isFlipped ? 'flipped' : ''}`}
            src={card.isFlipped ? card.content : bluecard}
            onClick={() => handleCardClick(card, 'blue')}
            alt={`Blue Card ${card.id}`}
          />
        ))}
      </div>

   

      <Link to="/screen2">
        <img src={back} alt="Back" className="btn-back" />
      </Link>

      <Link to="/FinalScreen">
        <img src={next} alt="Next" className="btn-next" />
      </Link>
    </div>
  );
};

export default ActScreen;
