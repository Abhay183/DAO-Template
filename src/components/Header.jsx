import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, Menu, X } from 'lucide-react';

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

  button:focus {
    outline: none;
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
    const headerRef = React.useRef(null);

    React.useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Dashboard', href: '#', active: true },
        { name: 'Governance', href: '#', active: false },
        { name: 'Finance', href: '#', active: false },
        { name: 'Members', href: '#', active: false },
        { name: 'Settings', href: '#', active: false },
    ];

    return (
        <HeaderContainer ref={headerRef}>
            <LeftSection>
                <Logo />
                <MobileMenuButton onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </MobileMenuButton>
                <Navigation>
                    {navLinks.map((link, index) => (
                        <NavLink key={index} href={link.href} active={link.active}>
                            {link.name}
                        </NavLink>
                    ))}
                </Navigation>
            </LeftSection>

            <RightSection>
                <FeedbackButton>
                    Give feedback
                    <ChevronDown size={16} />
                </FeedbackButton>
                <WalletButton>
                    <span>Connect</span>
                    <Avatar />
                </WalletButton>
            </RightSection>

            <MobileNav isOpen={isMobileMenuOpen} headerHeight={headerHeight}>
                {navLinks.map((link, index) => (
                    <NavLink key={index} href={link.href} active={link.active}>
                        {link.name}
                    </NavLink>
                ))}
                <MobileRightSection>
                    <MobileFeedbackButton>
                        Give feedback
                        <ChevronDown size={16} />
                    </MobileFeedbackButton>
                </MobileRightSection>
            </MobileNav>
        </HeaderContainer>
    );
};

export default TopHeader;