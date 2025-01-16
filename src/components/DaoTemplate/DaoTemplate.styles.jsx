import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  width: ${(props) => (props.$isPreview ? '100%' : '100vw')};
  height: 100vh;
  background: #f8fafc;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }

  button:focus {
    outline: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1001;
  background: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #008C73;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Sidebar = styled.div`
  width: 280px;
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  z-index: 1000;
  
  @media (max-width: 768px) {
    position: fixed;
    transform: translateX(${props => props.$isOpen ? '0' : '-100%'});
    width: 100%;
    max-width: 280px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .mobile-new-tx {
    display: none;
    margin: auto 20px 20px;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #f8fafc;
`;

export const Header = styled.header`
  height: 80px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 10;

  .header-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    height: 70px;
    margin-left: 60px;
    
    .header-left {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;

export const ActionButton = styled.button`
  background: ${props => props.secondary ? 'white' : '#008C73'};
  color: ${props => props.secondary ? '#008C73' : 'white'};
  border: ${props => props.secondary ? '1px solid #008C73' : 'none'};
  padding: ${props => props.small ? '6px 12px' : '10px 20px'};
  border-radius: 12px;
  font-size: ${props => props.small ? '12px' : '14px'};
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const NetworkBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f1f5f9;
  padding: 8px 12px;
  border-radius: 12px;
  font-size: 14px;
  
  .dot {
    width: 8px;
    height: 8px;
    background: #2ecc71;
    border-radius: 50%;
  }
`;

export const SearchBar = styled.input`
  padding: 8px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  width: 300px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: currentColor;
  
  &:focus {
    outline: none;
    border-color: #008C73;
    box-shadow: 0 0 0 2px rgba(0, 140, 115, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  width: 100%;
  border: none;
  background: ${props => props.active ? '#f8fafc' : 'transparent'};
  color: ${props => props.active ? '#008C73' : '#64748b'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    color: #008C73;
  }
`;

export const ContentArea = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #1e293b;
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const AssetCard = styled(InfoCard)`
  .token-info, .governance-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
    color: #64748b;
    font-size: 14px;
  }
`;

export const BalanceDisplay = styled.div`
  .balance-label {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .balance-amount {
    font-size: 32px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 8px;
    background: linear-gradient(45deg, #008C73, #2ecc71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .balance-usd {
    color: #64748b;
    font-size: 16px;
  }
`;

export const ChartContainer = styled.div`
  margin-top: 20px;
  height: 200px;
`;

export const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const TransactionsList = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;

  h3 {
    color: #1e293b;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 600;
  }
`;

export const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #e2e8f0;
  gap: 16px;
  transition: all 0.2s;

  &:hover {
    background-color: #f8fafc;
    transform: translateX(4px);
  }

  &:last-child {
    border-bottom: none;
  }

  .tx-icon {
    width: 48px;
    height: 48px;
    background: #f1f5f9;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }

  .tx-info {
    flex: 1;
    
    .tx-title {
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 4px;
    }
    
    .tx-details {
      color: #64748b;
      font-size: 14px;
    }
  }

  .tx-status {
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    
    &.pending {
      background: #fff7ed;
      color: #ea580c;
    }

    &.confirmed {
      background: #f0fdf4;
      color: #16a34a;
    }

    &.failed {
      background: #fef2f2;
      color: #dc2626;
    }
  }
`;

export const SafeInfo = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 16px;

  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #1e293b;
    font-weight: 600;
  }
`;

export const AddressDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #64748b;
  background: #f8fafc;
  padding: 8px 12px;
  border-radius: 8px;
  
  span {
    flex: 1;
    font-family: monospace;
  }
`;

export const StatCard = styled(InfoCard)`
  overflow: hidden;
  
  .chart-container {
    margin-top: 16px;
  }
`;