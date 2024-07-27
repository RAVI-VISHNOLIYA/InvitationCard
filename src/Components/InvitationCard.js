// src/components/InvitationCard.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: url('/frame.jpg') no-repeat center center/cover;
  position: relative;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #D66B00;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #483C32;
  font-style: italic;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Date = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #008000;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Time = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: #E30B5D;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: #777;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ConfettiAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
`;

const ConfettiPiece = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${ConfettiAnimation} 3s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const InvitationCard = () => {
  return (
    <Card>
      <ConfettiPiece top="0" left="20%" color="#ffeb3b" delay={0} />
      <ConfettiPiece top="0" left="40%" color="#e91e63" delay={1} />
      <ConfettiPiece top="0" left="60%" color="#4caf50" delay={2} />
      <ConfettiPiece top="0" left="80%" color="#2196f3" delay={3} />
      <Title>Retirement Party Invitation</Title>
      <h3>In honor</h3>
      <Name>Mahavir</Name>
      <Date>Wednesday, July 31st</Date>
      <Time>At 1PM</Time>
      <Message>
        Venue: 28, Rajendra Park Nangloi Delhi-41 Near Metro Pillar No. 437
        <p>Kindly RSVP to +917827772829, +919868103112</p>
      </Message>
    </Card>
  );
};

export default InvitationCard;
