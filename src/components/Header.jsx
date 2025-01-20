import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { ChevronDown, Menu, X, Bell, Settings, LogOut, HelpCircle } from 'lucide-react';


const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: box-shadow 0.3s ease;
  
  ${props => props.scrolled && `
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}

  button:focus {
    outline: none;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: all 0.2s ease;
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: #64748b;
  cursor: pointer;
  text-align: left;
  
  &:hover {
    background: #f8fafc;
    color: #0b1b27;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #e2e8f0;
  margin: 0.5rem 0;
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #CA1111;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 1rem;
  border: 2px solid white;
`;

const WalletInfo = styled.div`
  text-align: left;
  padding: 0.75rem 1rem;
  
  p {
    margin: 0;
    &:first-child {
      color: #0b1b27;
      font-weight: 500;
    }
    &:last-child {
      color: #64748b;
      font-size: 0.875rem;
    }
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: #0052FF;
  border-radius: 50%;
  cursor: pointer;
  flex-shrink: 0;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  position: fixed;
  top: ${props => props.headerHeight}px;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  flex-direction: column;
  gap: 1rem;
  z-index: 999;
  
  ${props => props.isOpen && `
    display: flex;
  `}

  @media (min-width: 1025px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${props => props.active ? '#0b1b27' : '#64748b'};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  border-radius: 0.5rem;
  
  &:hover {
    color: #0b1b27;
    background: #f8fafc;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem;
    width: 100%;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  color: #64748b;
  cursor: pointer;
  
  &:hover {
    border-color: #CA1111;
    color: #CA1111;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const WalletButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  background: white;
  color: #64748b;
  cursor: pointer;
  
  &:hover {
    border-color: #CA1111;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    
    span {
      display: none;
    }
  }
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  background: #e2e8f0;
  border-radius: 50%;
  flex-shrink: 0;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: #0b1b27;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  color: #0b1b27;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileRightSection = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem;
  }
`;

const MobileFeedbackButton = styled(FeedbackButton)`
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

const TopHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Dashboard');
  const [notifications, setNotifications] = useState(3);
  const headerRef = useRef(null);
  const feedbackRef = useRef(null);
  const walletRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (feedbackRef.current && !feedbackRef.current.contains(event.target)) {
        setFeedbackOpen(false);
      }
      if (walletRef.current && !walletRef.current.contains(event.target)) {
        setWalletOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
      { name: 'Dashboard', href: '#' },
      { name: 'Governance', href: '#' },
      { name: 'Finance', href: '#' },
      { name: 'Members', href: '#' },
      { name: 'Settings', href: '#' },
    ];

    const handleLinkClick = (name) => {
      setActiveLink(name);
      setIsMobileMenuOpen(false);
    };
  
    const handleFeedback = (type) => {
      console.log(`Feedback type: ${type}`);
      setFeedbackOpen(false);
    };
  
    const handleWalletAction = (action) => {
      console.log(`Wallet action: ${action}`);
      setWalletOpen(false);
    };

    return (
      <HeaderContainer ref={headerRef} scrolled={isScrolled}>
        <LeftSection>
          <Logo />
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
          <Navigation>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                active={activeLink === link.name}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </NavLink>
            ))}
          </Navigation>
        </LeftSection>
  
        <RightSection>
          <div ref={feedbackRef} style={{ position: 'relative' }}>
            <FeedbackButton onClick={() => setFeedbackOpen(!feedbackOpen)}>
              Give feedback
              <ChevronDown size={16} style={{ transform: feedbackOpen ? 'rotate(180deg)' : 'none' }} />
            </FeedbackButton>
            <Dropdown isOpen={feedbackOpen}>
              <DropdownItem onClick={() => handleFeedback('suggestion')}>
                <HelpCircle size={16} />
                Suggestion
              </DropdownItem>
              <DropdownItem onClick={() => handleFeedback('bug')}>
                <Bell size={16} />
                Report a bug
                {notifications > 0 && <NotificationBadge>{notifications}</NotificationBadge>}
              </DropdownItem>
            </Dropdown>
          </div>
  
          <div ref={walletRef} style={{ position: 'relative' }}>
            <WalletButton onClick={() => setWalletOpen(!walletOpen)}>
              <span>0x1234...5678</span>
              <Avatar />
            </WalletButton>
            <Dropdown isOpen={walletOpen}>
              <WalletInfo>
                <p>Connected Wallet</p>
                <p>0x1234...5678</p>
              </WalletInfo>
              <Divider />
              <DropdownItem onClick={() => handleWalletAction('settings')}>
                <Settings size={16} />
                Settings
              </DropdownItem>
              <DropdownItem onClick={() => handleWalletAction('disconnect')}>
                <LogOut size={16} />
                Disconnect
              </DropdownItem>
            </Dropdown>
          </div>
        </RightSection>
  
        <MobileNav isOpen={isMobileMenuOpen} headerHeight={headerHeight}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              href={link.href}
              active={activeLink === link.name}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </NavLink>
          ))}
          <MobileRightSection>
            <MobileFeedbackButton onClick={() => handleFeedback('mobile')}>
              Give feedback
              <ChevronDown size={16} />
            </MobileFeedbackButton>
          </MobileRightSection>
        </MobileNav>
      </HeaderContainer>
    );
  };
  
  export default TopHeader;