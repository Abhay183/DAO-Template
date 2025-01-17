export const DAO_TYPES = {
    GOVERNANCE: {
        id: 'governance',
        name: 'Governance DAO',
        description: 'Create a decentralized organization focused on community-driven decision making and protocol governance.',
        color: '#3498db',
        icon: '⚖️',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'tokenSymbol', label: 'Token Symbol', type: 'text' },
            { name: 'votingPeriod', label: 'Voting Period (days)', type: 'number' },
            { name: 'quorum', label: 'Quorum Percentage', type: 'number' },
            { name: 'proposalThreshold', label: 'Proposal Threshold', type: 'number' }
        ]
    },
    INVESTMENT: {
        id: 'investment',
        name: 'Investment DAO',
        description: 'Build a collective investment vehicle for crypto assets and DeFi opportunities.',
        color: '#2ecc71',
        icon: '💰',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'minimumInvestment', label: 'Minimum Investment (ETH)', type: 'number' },
            { name: 'investmentStrategy', label: 'Investment Strategy', type: 'text' },
            { name: 'managementFee', label: 'Management Fee (%)', type: 'number' },
            { name: 'performanceFee', label: 'Performance Fee (%)', type: 'number' }
        ]
    },
    CHARITY: {
        id: 'charity',
        name: 'Charity DAO',
        description: 'Establish a transparent and efficient platform for charitable giving and social impact.',
        color: '#e74c3c',
        icon: '❤️',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'cause', label: 'Charitable Cause', type: 'text' },
            { name: 'targetAmount', label: 'Target Amount', type: 'number' },
            { name: 'timeline', label: 'Campaign Timeline (months)', type: 'number' },
            { name: 'impactMetrics', label: 'Impact Metrics', type: 'text' }
        ]
    },
    NFT: {
        id: 'nft',
        name: 'NFT Collector DAO',
        description: 'Create a collective for curating, collecting, and managing valuable NFT assets.',
        color: '#9b59b6',
        icon: '🎨',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'collectionFocus', label: 'Collection Focus', type: 'text' },
            { name: 'acquisitionBudget', label: 'Acquisition Budget (ETH)', type: 'number' },
            { name: 'curatorshipCriteria', label: 'Curatorship Criteria', type: 'text' },
            { name: 'votingThreshold', label: 'Voting Threshold (%)', type: 'number' }
        ]
    },
    SERVICE: {
        id: 'service',
        name: 'Service DAO',
        description: 'Build a decentralized service marketplace with shared ownership and governance.',
        color: '#f1c40f',
        icon: '🛠️',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'serviceType', label: 'Service Type', type: 'text' },
            { name: 'serviceFee', label: 'Service Fee (%)', type: 'number' },
            { name: 'providerRequirements', label: 'Provider Requirements', type: 'text' },
            { name: 'disputeResolution', label: 'Dispute Resolution Process', type: 'text' }
        ]
    },
    CUSTOM: {
        id: 'custom',
        name: 'Custom DAO',
        description: 'Build your own DAO.',
        color: '#3498db',
        icon: '+',
        fields: [
            { name: 'daoName', label: 'DAO Name', type: 'text' },
            { name: 'serviceType', label: 'Service Type', type: 'text' },
            { name: 'serviceFee', label: 'Service Fee (%)', type: 'number' },
            { name: 'providerRequirements', label: 'Provider Requirements', type: 'text' },
            { name: 'disputeResolution', label: 'Dispute Resolution Process', type: 'text' }
        ]
    }
};