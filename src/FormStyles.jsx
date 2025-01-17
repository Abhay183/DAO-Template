import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FormSection = styled.div`
  background: white;
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const FormTitle = styled.h1`
  font-size: 2.5rem;
  color: #183b56;
  margin-bottom: 1rem;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InputGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #183b56;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const RadioButton = styled.div`
  padding: 1.5rem;
  border: 2px solid ${props => props.selected ? '#4299e1' : '#e2e8f0'};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${props => props.selected ? 'rgba(66, 153, 225, 0.1)' : 'white'};

  &:hover {
    border-color: #4299e1;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    font-size: 0.95rem;
  }
`;

export const Slider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 6px;
  background: #e2e8f0;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #4299e1;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }
`;

export const TimeInput = styled.div`
  flex: 1;
  min-width: 100px;
`;

export const Button = styled.button`
  padding: ${props => props.variant === 'primary' ? '1rem 2rem' : '0.75rem 1.5rem'};
  background: ${props => props.variant === 'primary' ? 'linear-gradient(135deg, #4299e1, #2b6cb0)' : 'white'};
  color: ${props => props.variant === 'primary' ? 'white' : '#4299e1'};
  border: ${props => props.variant === 'primary' ? 'none' : '2px solid #4299e1'};
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  gap: 1rem;
`;

export const LearnMoreLink = styled.a`
  color: #4299e1;
  text-decoration: none;
  font-weight: 500;
  margin-left: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const InfoText = styled.p`
  color: #4a5568;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const CharacterCount = styled
export const ErrorMessage = styled
export const FileUpload = styled
export const LinkContainer = styled
export const TextArea = styled
export const TokenDistribution = styled