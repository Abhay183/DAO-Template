import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, LineChart, Line, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
  Container,
  Sidebar,
  MainContent,
  Header,
  NavItem,
  ContentArea,
  OverviewGrid,
  AssetCard,
  TransactionsList,
  TransactionItem,
  InfoCard,
  BalanceDisplay,
  SafeInfo,
  AddressDisplay,
  ActionButton,
  IconWrapper,
  ChartContainer,
  StatCard,
  SearchBar,
  NetworkBadge,
  MobileMenuButton,
  LoadingSpinner
} from './DaoTemplate.styles';

const DaoTemplate = ({ preview = false, className = '' }) => {
  const { selectedDao, formData } = useSelector((state) => state.dao);
  const [activeSection, setActiveSection] = useState('home');
  const [displayData, setDisplayData] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (formData) {
      setDisplayData(formData);
      setTimeout(() => setIsLoading(false), 1000); // Simulate loading
    }
  }, [formData]);

  const mockChartData = [
    { name: 'ETH', value: 60 },
    { name: 'USDC', value: 25 },
    { name: 'Other', value: 15 }
  ];

  const COLORS = ['#008C73', '#2ecc71', '#3498db'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Container $isPreview={preview} className={className}>
      <MobileMenuButton onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✕' : '☰'}
      </MobileMenuButton>
      
      <Sidebar $isOpen={isMobileMenuOpen}>
        <SafeInfo>
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayData.daoName || 'Your DAO'}
          </motion.h3>
          <AddressDisplay>
            <span>0x1234...5678</span>
            <ActionButton small>Copy</ActionButton>
          </AddressDisplay>
        </SafeInfo>
        
        <NavItem
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          active={activeSection === 'home'}
          onClick={() => setActiveSection('home')}
        >
          <IconWrapper>🏠</IconWrapper>Home
        </NavItem>

        <NavItem
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          active={activeSection === 'assets'}
          onClick={() => setActiveSection('assets')}
        >
          <IconWrapper>💰</IconWrapper>Assets
        </NavItem>

        <NavItem
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          active={activeSection === 'transactions'}
          onClick={() => setActiveSection('transactions')}
        >
          <IconWrapper>📝</IconWrapper>Transactions
        </NavItem>

        <NavItem
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          active={activeSection === 'governance'}
          onClick={() => setActiveSection('governance')}
        >
          <IconWrapper>⚖️</IconWrapper>Governance
        </NavItem>

        <NavItem
          as={motion.button}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          active={activeSection === 'settings'}
          onClick={() => setActiveSection('settings')}
        >
          <IconWrapper>⚙️</IconWrapper>Settings
        </NavItem>
        {/* Add similar motion effects to other NavItems */}
        
        <ActionButton className="mobile-new-tx">
          New Transaction
        </ActionButton>
      </Sidebar>

      <MainContent>
        <Header>
          <div className="header-left">
            <NetworkBadge>
              <span className="dot" /> Ethereum Mainnet
            </NetworkBadge>
            <SearchBar 
              placeholder="Search transactions..."
              type="text"
            />
          </div>
          <div className="actions">
            <ActionButton>New Transaction</ActionButton>
          </div>
        </Header>

        <ContentArea>
          <AnimatePresence>
            <OverviewGrid>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <InfoCard>
                  <h3>DAO Overview</h3>
                  <BalanceDisplay>
                    <div className="balance-label">Total Balance</div>
                    <div className="balance-amount">1,234.56 ETH</div>
                    <div className="balance-usd">$2,469,120.00 USD</div>
                  </BalanceDisplay>
                  <ChartContainer>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={mockChartData}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {mockChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </InfoCard>
              </motion.div>

              <StatCard>
                <h3>Treasury Growth</h3>
                <ResponsiveContainer width="100%" height={150}>
                  <LineChart data={[
                    { name: 'Jan', value: 100 },
                    { name: 'Feb', value: 150 },
                    { name: 'Mar', value: 200 },
                    { name: 'Apr', value: 180 }
                  ]}>
                    <Line type="monotone" dataKey="value" stroke="#008C73" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </StatCard>
            </OverviewGrid>

            <TransactionsList>
              <h3>Recent Transactions</h3>
              {[1, 2, 3].map((_, index) => (
                <TransactionItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="tx-icon">📤</div>
                  <div className="tx-info">
                    <div className="tx-title">Send</div>
                    <div className="tx-details">0.5 ETH to 0x123...456</div>
                  </div>
                  <div className="tx-status pending">Pending</div>
                </TransactionItem>
              ))}
            </TransactionsList>
          </AnimatePresence>
        </ContentArea>
      </MainContent>
    </Container>
  );
};

export default DaoTemplate;