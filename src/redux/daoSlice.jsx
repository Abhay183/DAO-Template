import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDao: null,
  modalOpen: false,
  currentStep: 'selection',
  formData: {}, 
  blockchain: {
    network: '',
    selectedChain: '',
  },
  daoInfo: {
    logo: null,
    name: '',
    subdomain: '',
    description: '',
    links: [],
  },
  membership: {
    tokenDetails: {
      name: '',
      symbol: '',
      distributions: [],
    },
    minimumTokens: '0',
  },
  governanceSettings: {
    supportThreshold: '0',
    minParticipation: '0',
    minDuration: {
      days: '0',
      hours: '0',
      minutes: '0',
    },
  },
};

const daoSlice = createSlice({
  name: 'dao',
  initialState,
  reducers: {
    setSelectedDao: (state, action) => {
      state.selectedDao = action.payload;
      state.modalOpen = true;
      state.daoType = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setFormData: (state, action) => {  // Adding this back
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateBlockchain: (state, action) => {
      state.blockchain = {
        ...state.blockchain,
        ...action.payload,
      };
    },
    updateDaoInfo: (state, action) => {
      state.daoInfo = {
        ...state.daoInfo,
        ...action.payload,
      };
    },
    updateMembership: (state, action) => {
      state.membership = {
        ...state.membership,
        ...action.payload,
      };
    },
    updateGovernanceSettings: (state, action) => {
      state.governanceSettings = {
        ...state.governanceSettings,
        ...action.payload,
      };
    },
    resetState: () => initialState,
  },
});

export const {
  setSelectedDao,
  closeModal,
  setFormData,
  setCurrentStep,
  updateBlockchain,
  updateDaoInfo,
  updateMembership,
  updateGovernanceSettings,
  resetState,
} = daoSlice.actions;

export default daoSlice.reducer;