import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedDao, setCurrentStep } from '../../redux/daoSlice';
import { DAO_TYPES } from '../../constants/daoTypes';
import './HomePage.styles.css';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleDaoSelect = (daoType) => {
    if (daoType === 'custom') {
      dispatch(setSelectedDao(daoType));
      dispatch(setCurrentStep('build'));
    } else {
      dispatch(setSelectedDao(daoType));
    }
  };

  return (
    <div className="dao-app">
      <div className="background-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
      </div>
      
      <div className="content">
        <section className="hero">
          <h1 className="hero-title">
            Welcome to DAO Platform
          </h1>
          <p className="hero-subtitle">
            Choose your DAO type to begin your decentralized journey
          </p>
        </section>

        <div className="dao-list">
          {Object.values(DAO_TYPES).map((dao) => (
            <div key={dao.id} className="dao-item">
              <div className="dao-icon-wrapper">
                <div className="dao-icon">
                  {dao.icon}
                </div>
              </div>
              <div className="dao-content">
                <h2 className="dao-title">{dao.name}</h2>
                <p className="dao-description">{dao.description}</p>
                <button
                  className="dao-button"
                  onClick={() => handleDaoSelect(dao.id)}
                >
                  Create {dao.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;