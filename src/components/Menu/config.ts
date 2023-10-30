import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Farmhub',
  //   icon: 'FarmhubIcon',
  //   // href: 'https://farmhub.community',
  //   items: [
  //     {
  //       label: 'Farmhub',
  //       href: 'https://farmhub.community',
  //       icon: 'FarmhubIcon'
  //     },
  //     {
  //       label: 'Toad.Farm',
  //       href: 'https://toad.farm',
  //       icon: 'ToadFarmIcon'
  //     },
  //     {
  //       label: 'Mouse.Farm',
  //       href: 'https://mouse.farm',
  //       icon: 'MouseFarmIcon'
  //     },
  //     {
  //       label: 'Snek.Farm',
  //       href: 'https://snek.farm',
  //       icon: 'SnekFarmIcon'
  //     },
  //     {
  //       label: 'Cobra.Farm',
  //       href: 'https://cobra.farm',
  //       icon: 'CobraIcon'
  //     },
  //     {
  //       label: 'Eagle.Farm',
  //       href: 'https://eagle.farm',
  //       icon: 'EagleFarmIcon'
  //     },
  //     {
  //       label: 'Eagle\'s Nest',
  //       href: 'https://eaglenest.finance',
  //       icon: 'EagleNestIcon'
  //     },
  //   ]
  // },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '',
        icon: 'TradeIcon',
      },
      {
        label: 'Liquidity',
        href: '',
        icon: 'LiquidityIcon',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pond',
    icon: 'ToadBreeding',
    href: '/nests',
  },
  // {
  //   label: 'Memes',
  //   icon: 'SunIcon',
  //   href: '/memes',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  {
    label: 'Presale',
    icon: 'TicketIcon',
    href: '/Ifos',
  },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'PulseX',
      //   href: 'https://app.pulsex.com/swap',
      // },
      {
        label: 'DexScanner',
        href: 'https://dexscreener.com/',
      },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      // },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: "Github",
      //   href: "https://github.com/farmhubbsc",
      //   icon: 'GithubIcon', 
      // },
      {
        label: "Docs",
        href: "https://froogys-organization.gitbook.io/froggy-farm/",
        icon: 'BooksIcon',
      },
      // {
      //   label: "Blog",
      //   href: "https://farmhub.medium.com/",
      // },
    ],
  },
  // {
  //   label: 'Audit by Solidity',
  //   icon: 'AuditIcon',
  //   href: 'https://solidity.finance/audits/Farmhub/',
  // },
]


export default config
