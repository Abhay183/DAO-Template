import styled from 'styled-components';

export const HomePageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e5e9f0 100%);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  text-align: center;
  padding: 4rem 1rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
  }
  @media (max-width: 576px) {
    padding: 2rem 0.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #183b56;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #183b56, rgb(202, 17, 17));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }
  @media (max-width: 576px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: #212529;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 2.5rem;
  }
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    padding: 1.5rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1rem;
  }
`;

export const DaoCard = styled.div`
  position: relative;
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 576px) {
      transform: translateY(-5px);
    }
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: linear-gradient(90deg, ${props => props.$color}, #183b56);
`;

export const CardIcon = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  background: linear-gradient(135deg, ${props => props.$color || '#183b56'}, #183b56);
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  color: #183b56;
  margin-bottom: 1.2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`;

export const CardDescription = styled.p`
  font-size: 1.2rem;
  color: #212529;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const CardButton = styled.button`
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  color: white;
  background: linear-gradient(135deg, #183b56, rgb(202, 17, 17));
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(202, 17, 17, 0.2);
    
    @media (max-width: 576px) {
      transform: translateY(-1px);
    }
  }
`;