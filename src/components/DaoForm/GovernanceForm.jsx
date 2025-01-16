import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep } from '../../redux/daoSlice';
import { FormContainer, FormInput, FormLabel, SubmitButton } from './Forms.styles';

const GovernanceForm = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = React.useState({
    daoName: '',
    tokenSymbol: '',
    votingPeriod: '',
    quorum: '',
    proposalThreshold: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFormData(formState));
    dispatch(setCurrentStep('template'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormState = {
      ...formState,
      [name]: value,
    };
  
    setFormState(updatedFormState);
    dispatch(setFormData({ [name]: value })); // Update Redux store in real-time
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Governance DAO Setup</h2>
      <FormLabel>
        DAO Name
        <FormInput
          type="text"
          name="daoName"
          value={formState.daoName}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Token Symbol
        <FormInput
          type="text"
          name="tokenSymbol"
          value={formState.tokenSymbol}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Voting Period (in days)
        <FormInput
          type="number"
          name="votingPeriod"
          value={formState.votingPeriod}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Quorum Percentage
        <FormInput
          type="number"
          name="quorum"
          value={formState.quorum}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <FormLabel>
        Proposal Threshold
        <FormInput
          type="number"
          name="proposalThreshold"
          value={formState.proposalThreshold}
          onChange={handleChange}
          required
        />
      </FormLabel>
      <SubmitButton type="submit">Create Governance DAO</SubmitButton>
    </FormContainer>
  );
};

export default GovernanceForm;