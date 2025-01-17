import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(11, 27, 39, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  button:focus {
    outline: none;
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  width: 95%;
  max-width: 1000px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(11, 27, 39, 0.2);
  max-height: 90vh;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-height: 95vh;
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    border-radius: 16px;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, #183B56, #CA1111);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;

  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 200px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    min-height: 150px;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const DaoImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(11, 27, 39, 0.2);

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    border-radius: 12px;
  }
`;

export const DaoTitle = styled.h2`
  font-size: 2.5rem;
  color: #183B56;
  margin-bottom: 1.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileOnlyDaoTitle = styled.h2`
  display: none;
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export const DaoDescription = styled.p`
  font-size: 1.2rem;
  color: #0b1b27;
  line-height: 1.7;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

export const ContinueButton = styled.button`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #183B56, #CA1111);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 100%;
  max-width: 300px;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(202, 17, 17, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: ${props => props.theme.darkMode ? '#fff' : '#183B56'};
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    font-size: 1.4rem;
  }
`;