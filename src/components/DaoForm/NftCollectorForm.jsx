import React from 'react';
import { useDispatch } from 'react-redux';
import { setFormData, setCurrentStep } from '../../redux/daoSlice';
import { FormContainer, FormInput, FormLabel, SubmitButton } from './Forms.styles';

const NftCollectorForm = () => {
    const dispatch = useDispatch();
    const [formState, setFormState] = React.useState({
        daoName: '',
        collectionFocus: '',
        acquisitionBudget: '',
        curatorshipCriteria: '',
        votingThreshold: ''
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
            <h2>NFT Collector DAO Setup</h2>
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
                Collection Focus
                <FormInput
                    type="text"
                    name="collectionFocus"
                    value={formState.collectionFocus}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Acquisition Budget (ETH)
                <FormInput
                    type="number"
                    name="acquisitionBudget"
                    value={formState.acquisitionBudget}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Curatorship Criteria
                <FormInput
                    type="text"
                    name="curatorshipCriteria"
                    value={formState.curatorshipCriteria}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <FormLabel>
                Voting Threshold (%)
                <FormInput
                    type="number"
                    name="votingThreshold"
                    value={formState.votingThreshold}
                    onChange={handleChange}
                    required
                />
            </FormLabel>
            <SubmitButton type="submit">Create NFT Collector DAO</SubmitButton>
        </FormContainer>
    );
};

export default NftCollectorForm;