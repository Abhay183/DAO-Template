import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 24px;
  width: 95%;
  max-width: 1000px;
  display: flex;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  padding: 3rem;
  background: linear-gradient(135deg, #183b56, rgb(202, 17, 17));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentSection = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

export const DaoImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

export const DaoTitle = styled.h2`
  font-size: 2.5rem;
  color: #183b56;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

export const DaoDescription = styled.p`
  font-size: 1.2rem;
  color: #212529;
  line-height: 1.7;
  margin-bottom: 2.5rem;
`;

export const ContinueButton = styled.button`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(135deg, #183b56, rgb(202, 17, 17));
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(202, 17, 17, 0.2);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: white;
  border: none;
  font-size: 1.8rem;
  color: #183b56;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #f8fafc;
    transform: rotate(90deg);
  }
`;