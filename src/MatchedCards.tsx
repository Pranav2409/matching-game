import React from 'react';

interface MatchedCardsProps {
  content: string; // Content of the matched cards
}

const MatchedCards: React.FC<MatchedCardsProps> = ({ content }) => {
  return (
    <div className="matched-cards">
      <p>It's a match!</p>
      <img src={content} alt="Matched Cards" />
    </div>
  );
};

export default MatchedCards;
