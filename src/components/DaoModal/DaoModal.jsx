import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, setCurrentStep } from '../../redux/daoSlice';
import photo from '../../assets/dao-img.webp';
import {
  ModalOverlay,
  ModalContent,
  ImageSection,
  ContentSection,
  DaoImage,
  DaoTitle,
  DaoDescription,
  ContinueButton,
  CloseButton,
  MobileOnlyDaoTitle
} from './DaoModal.styles';

const daoInfo = {
  governance: {
    title: 'Governance DAO',
    description: 'Create a decentralized organization focused on community-driven decision making and protocol governance.',
    image: photo
  },
  investment: {
    title: 'Investment DAO',
    description: 'Build a collective investment vehicle for crypto assets and DeFi opportunities.',
    image: photo
  },
  charity: {
    title: 'Charity DAO',
    description: 'Establish a transparent and efficient platform for charitable giving and social impact.',
    image: photo
  },
  nft: {
    title: 'NFT Collector DAO',
    description: 'Create a collective for curating, collecting, and managing valuable NFT assets.',
    image: photo
  },
  service: {
    title: 'Service DAO',
    description: 'Build a decentralized service marketplace with shared ownership and governance.',
    image: photo
  }
};

const DaoModal = () => {
  const dispatch = useDispatch();
  const { selectedDao, modalOpen } = useSelector(state => state.dao);

  const handleContinue = () => {
    dispatch(closeModal());
    dispatch(setCurrentStep('build'));
  };

  if (!modalOpen || selectedDao === 'custom') return null;

  const dao = daoInfo[selectedDao];
  if (!dao) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={() => dispatch(closeModal())}>×</CloseButton>
        <ImageSection>
          <MobileOnlyDaoTitle>{dao.title}</MobileOnlyDaoTitle>
          <DaoImage src={dao.image} alt={dao.title} />
        </ImageSection>
        <ContentSection>
          <DaoTitle>{dao.title}</DaoTitle>
          <DaoDescription>{dao.description}</DaoDescription>
          <ContinueButton onClick={handleContinue}>
            <span>Continue to Setup</span>
          </ContinueButton>
        </ContentSection>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DaoModal;