import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
  background: white;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #183b56;
    margin-bottom: 2rem;
    position: relative;
    
    // &::after {
    //   content: '';
    //   position: absolute;
    //   bottom: 0;
    //   left: 0;
    //   width: 40px;
    //   height: 3px;
    //   background: rgb(202, 17, 17);
    //   border-radius: 2px;
    // }
  }

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #183b56;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.9rem;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #f8fafc;
  color: black;

  &:focus {
    outline: none;
    border-color: #183b56;
    box-shadow: 0 0 0 3px rgba(24, 59, 86, 0.1);
    background: white;
  }

  &:hover {
    border-color: #183b56;
  }

  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 0.9rem;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #f8fafc;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23183b56' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.2em;
  padding-right: 3rem;

  &:focus {
    outline: none;
    border-color: #183b56;
    box-shadow: 0 0 0 3px rgba(24, 59, 86, 0.1);
    background-color: white;
  }

  &:hover {
    border-color: #183b56;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 0.9rem;
  border: 2px solid #e0e6ed;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #f8fafc;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #183b56;
    box-shadow: 0 0 0 3px rgba(24, 59, 86, 0.1);
    background: white;
  }

  &:hover {
    border-color: #183b56;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, rgb(202, 17, 17), #183b56);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(202, 17, 17, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  width: 100%;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.span`
  color: rgb(202, 17, 17);
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: block;
`;

