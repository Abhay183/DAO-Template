import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDao: null,
  modalOpen: false,
  formData: {},
  currentStep: 'selection', 
};

const daoSlice = createSlice({
  name: 'dao',
  initialState,
  reducers: {
    setSelectedDao: (state, action) => {
      state.selectedDao = action.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
  },
});

export const { setSelectedDao, closeModal, setFormData, setCurrentStep } = daoSlice.actions;
export default daoSlice.reducer;