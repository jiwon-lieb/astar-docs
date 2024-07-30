const commonSidebar = [
  {
    type: 'html',
    value: '<span class="sidebar-divider" />',
  },
  {
    type: 'category',
    label: 'About zkEVM',
    link: { type: 'doc', id: 'learn/zkEVM/index' },
    items: [
      'learn/zkEVM/quickstart',
      'learn/zkEVM/faq',
    ],
  },
  "learn/glossary",
  "use/astar-townhall",
  "use/troubleshooting",
]

const sidebars = {
  learnSidebar: [
    "learn/index",
    "learn/astar",
    "learn/accounts",
    "learn/astar-tokens",
    {
      type: "category",
      label: "dApp Staking V3",
      link: { type: "doc", id: "learn/dapp-staking/index"},
      items: [
        "learn/dapp-staking/dapp-staking-protocol",
        "learn/dapp-staking/dapp-staking-faq",
        "learn/dapp-staking/protocol-parameters",
      ],
    },
    "learn/networks",
    {
      type: "category",
      label: "Architecture",
      link: { type: "doc", id: "learn/architecture/index"},
      items: [
        "learn/architecture/astar-parachain",
        "learn/architecture/astar-zkevm",
      ],
    },
    "learn/Proxies",
    "learn/smart-contracts",
    {
      type: "category",
      label: "Tokenomics 2.0",
      link: { type: "doc", id: "learn/tokenomics2/index"},
      items: [
        "learn/tokenomics2/tokenomics2-network-fees",
        "learn/tokenomics2/Inflation",
        "learn/tokenomics2/legacy_inflation",
      ],
    },
    {
      type: "category",
      label: "Cross-Chain Messaging",
      link: { type: "doc", id: "learn/interoperability/index"},
      items: [
        "learn/interoperability/asset-list",
      ],
    },
    ...commonSidebar,
  ],
  useSidebar: [
    "use/index",
    {
      type: "category",
      label: "Manage Assets",
      link: { type: "doc", id: "use/manage-assets/index"},
      items: [
        "use/manage-assets/xcm-transactions",
        "use/manage-assets/manage-xc20-with-metamask",
        "use/manage-assets/transfer-tokens",
      ],
    },
    {
      type: "category",
      label: "Manage Wallets",
      link: { type: "doc", id: "use/manage-wallets/index"},
      items: [
        "use/manage-wallets/wallet-providers/index",
      ],
    },
    

    ...commonSidebar,
  ]
  }


module.exports = sidebars;
