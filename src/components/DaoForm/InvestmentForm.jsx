import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep } from '../../redux/daoSlice';
import { FormContainer, FormInput, FormLabel, SubmitButton } from './Forms.styles';

const InvestmentForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = React.useState({
        daoName: '',
        minimumInvestment: '',
        investmentStrategy: '',
        managementFee: '',
        performanceFee: ''
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
            <h2>Investment DAO Setup</h2>
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
                Minimum Investment (ETH)
                <FormInput
                    type="number"
                    name="minimumInvestment"
                    value={formState.minimumInvestment}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Investment Strategy
                <FormInput
                    type="text"
                    name="investmentStrategy"
                    value={formState.investmentStrategy}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Management Fee (%)
                <FormInput
                    type="number"
                    name="managementFee"
                    value={formState.managementFee}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Performance Fee (%)
                <FormInput
                    type="number"
                    name="performanceFee"
                    value={formState.performanceFee}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <SubmitButton type="submit">Create Investment DAO</SubmitButton>
        </FormContainer>
    );
};

export default InvestmentForm;