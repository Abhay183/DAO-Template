import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep } from '../../redux/daoSlice';
import { FormContainer, FormInput, FormLabel, SubmitButton } from './Forms.styles';

const ServiceForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = React.useState({
        daoName: '',
        serviceType: '',
        serviceFee: '',
        providerRequirements: '',
        disputeResolution: ''
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
            <h2>Service DAO Setup</h2>
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
                Service Type
                <FormInput
                    type="text"
                    name="serviceType"
                    value={formState.serviceType}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Service Fee (%)
                <FormInput
                    type="number"
                    name="serviceFee"
                    value={formState.serviceFee}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Provider Requirements
                <FormInput
                    type="text"
                    name="providerRequirements"
                    value={formState.providerRequirements}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Dispute Resolution Process
                <FormInput
                    type="text"
                    name="disputeResolution"
                    value={formState.disputeResolution}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <SubmitButton type="submit">Create Service DAO</SubmitButton>
        </FormContainer>
    );
};

export default ServiceForm;