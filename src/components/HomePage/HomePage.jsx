import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedDao } from '../../redux/daoSlice';
import { DAO_TYPES } from '../../constants/daoTypes';
import {
  HomePageContainer,
  Header,
  Title,
  Subtitle,
  CardsGrid,
  DaoCard,
  CardIcon,
  CardTitle,
  CardDescription,
  CardButton,
  GradientOverlay
} from './HomePage.styles';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleDaoSelect = (daoType) => {
    dispatch(setSelectedDao(daoType));
  };

  return (
    <HomePageContainer>
      <Header>
        <Title>Welcome to DAO Platform</Title>
        <Subtitle>Choose your DAO type to get started</Subtitle>
      </Header>
      
      <CardsGrid>
        {Object.values(DAO_TYPES).map((dao) => (
          <DaoCard key={dao.id} $color={dao.color}>
            <GradientOverlay $color={dao.color} />
            <CardIcon>{dao.icon}</CardIcon>
            <CardTitle>{dao.name}</CardTitle>
            <CardDescription>{dao.description}</CardDescription>
            <CardButton onClick={() => handleDaoSelect(dao.id)}>
              Create {dao.name}
            </CardButton>
          </DaoCard>
        ))}
      </CardsGrid>
    </HomePageContainer>
  );
};

export default HomePage;