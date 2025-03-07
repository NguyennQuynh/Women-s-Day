import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const glow = keyframes`
  0% { filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.3)); }
  50% { filter: drop-shadow(0 0 25px rgba(255, 0, 0, 0.5)); }
  100% { filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.3)); }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const BouquetContainer = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 8s ease-in-out infinite;
`;

const RoseImage = styled.div`
  position: relative;
  width: 500px;
  height: 400px;
  background-image: url('/red-rose-removebg-preview.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${glow} 4s ease-in-out infinite;
  transform-style: preserve-3d;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, 
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 30%,
      transparent 70%
    );
  }
`;

const AmbientLight = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(
    circle at center,
    rgba(255, 0, 0, 0.1) 0%,
    transparent 70%
  );
  pointer-events: none;
  z-index: -1;
`;

const FlowerBouquet = () => {
  return (
    <Container>
      <BouquetContainer>
        <RoseImage />
        <AmbientLight />
      </BouquetContainer>
    </Container>
  );
};

export default FlowerBouquet; 