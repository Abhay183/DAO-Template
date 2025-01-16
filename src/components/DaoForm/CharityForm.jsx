import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep } from '../../redux/daoSlice';
import { FormContainer, FormInput, FormLabel, SubmitButton } from './Forms.styles';

const CharityForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = React.useState({
        daoName: '',
        cause: '',
        targetAmount: '',
        timeline: '',
        impactMetrics: ''
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
            <h2>Charity DAO Setup</h2>
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
                Charitable Cause
                <FormInput
                    type="text"
                    name="cause"
                    value={formState.cause}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Target Amount
                <FormInput
                    type="number"
                    name="targetAmount"
                    value={formState.targetAmount}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Campaign Timeline (months)
                <FormInput
                    type="number"
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Impact Metrics
                <FormInput
                    type="text"
                    name="impactMetrics"
                    value={formState.impactMetrics}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <SubmitButton type="submit">Create Charity DAO</SubmitButton>
        </FormContainer>
    );
};

export default CharityForm;