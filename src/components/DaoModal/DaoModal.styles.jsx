import styled from "styled-components";

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 20px 40px rgba(202, 17, 17, 0.1);
  min-height: 400px; // Added minimum height

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    min-height: unset;
  }
`;

export const ImageSection = styled.div`
  width: 45%;
  background: linear-gradient(135deg, #CA1111, #990d0d);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    min-height: 250px; // Ensure minimum height on mobile
  }

  @media (max-width: 480px) {
    min-height: 200px;
    padding: 1rem;
  }
`;

export const DaoImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(202, 17, 17, 0.2);
  max-height: 300px; // Added maximum height

  @media (max-width: 768px) {
    width: 100%;
    max-height: 200px;
  }

  @media (max-width: 480px) {
    max-height: 150px;
  }
`;

export const MobileOnlyDaoTitle = styled.h2`
  display: none;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const ContentSection = styled.div`
  width: 55%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(202, 17, 17, 0.1); // Changed to use #CA1111 with opacity
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  button:focus {
    outline: none;
  }
`;


export const DaoTitle = styled.h2`
  font-size: 1.75rem;
  color: #CA1111;
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const DaoDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  background: #f3f3f3;
  padding: 1rem;
  border-radius: 8px;
`;

export const ContinueButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #CA1111;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(202, 17, 17, 0.25);
    background: #b30f0f;
  }

  &:active {
    transform: translateY(0);
    background: #990d0d;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f3f3f3;
  border: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #CA1111;
  opacity: 0.8;
  transition: all 0.2s ease;
  z-index: 2;

  &:hover {
    opacity: 1;
    background: #ffffff;
    box-shadow: 0 2px 6px rgba(202, 17, 17, 0.15);
  }

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
    background: none;
    color: white;
  }
`;