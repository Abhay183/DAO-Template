// src/components/StepIcons.jsx

import React from 'react';

export const BlockchainIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="25" height="25" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <rect x="55" y="20" width="25" height="25" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <rect x="20" y="55" width="25" height="25" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <rect x="55" y="55" width="25" height="25" fill="#CA1111" stroke="#CA1111" strokeWidth="2"/>
  </svg>
);

export const TagsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 40 H80 M20 60 H60" stroke="#CA1111" strokeWidth="4" strokeLinecap="round"/>
    <rect x="20" y="30" width="60" height="40" fill="none" stroke="#CA1111" strokeWidth="2" rx="4"/>
  </svg>
);

export const MembersIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="8" fill="#CA1111"/>
    <circle cx="50" cy="30" r="8" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <circle cx="70" cy="30" r="8" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <circle cx="30" cy="70" r="8" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <circle cx="50" cy="70" r="8" fill="none" stroke="#CA1111" strokeWidth="2"/>
    <circle cx="70" cy="70" r="8" fill="none" stroke="#CA1111" strokeWidth="2"/>
  </svg>
);

export const SettingsIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="30" x2="80" y2="30" stroke="#CA1111" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="35" cy="30" r="6" fill="#CA1111"/>
    <line x1="20" y1="50" x2="80" y2="50" stroke="#CA1111" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="65" cy="50" r="6" fill="#CA1111"/>
    <line x1="20" y1="70" x2="80" y2="70" stroke="#CA1111" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="45" cy="70" r="6" fill="#CA1111"/>
  </svg>
);