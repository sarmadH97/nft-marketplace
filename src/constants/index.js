import { 
  ProfilePic, 
  SquidO,
  Sofia_Pic,
  Sofia_Cover_Photo,
  Sarah_Pic,
  Sarah_Cover_Photo,
  David_Pic,
  David_Cover_Photo,
  Javier_Pic,
  Javier_Cover_Photo
} from "../assets";

export const navLinks = [
    {
      id: "explore",
      title: "Explore",
    },
    {
      id: "marketplace",
      title: "Market Place",
    },
    {
      id: "artist",
      title: "Artist",
    },
    {
      id: "collection",
      title: "Collection",
    },
];

export const stats = [
  {
    id: "artWork",
    title: "Art Work",
    value: "25 K+"
  },
  {
    id: "aution",
    title: "Auction",
    value: "17 K+"
  },
  {
    id: "artist",
    title: "Artist",
    value: "6 K+"
  }
]

export const trendingNft = {
  id: '2247',
  code: '2247',
  name: 'SquidO',
  currentBidInETH: '41.4',
  currentBidInUSD: '$1,712,568',
  imagePath: SquidO,
  remainingTimeForBid: new Date(),
  description: 'We are a community based collection project featuring 3D artwork. 3D SquidO comes in all kind of patterns, traits and sizes with a few surprises along the way.',
  owner: 'Shaz_Ter',
  ownerProfilePic: ProfilePic,
  createdDate: new Date(2023, 6, 24, 4, 42, 0)
}

export const nfts = [
  {
    id: '2247',
    code: '2247',
    name: 'SquidO',
    currentBidInETH: '41.4',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2207',
    code: '2207',
    name: 'Astro Boi',
    currentBidInETH: '23.4',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2208',
    code: '2208',
    name: 'Femliene',
    currentBidInETH: '36.2',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2209',
    code: '2209',
    name: 'Vemas',
    currentBidInETH: '24.9',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2210',
    code: '2210',
    name: 'Robowy',
    currentBidInETH: '51.3',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2211',
    code: '2211',
    name: 'Miklie',
    currentBidInETH: '17.6',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
  {
    id: '2212',
    code: '2212',
    name: 'Champso',
    currentBidInETH: '42.5',
    currentBidInUSD: '$1,712,568',
    imagePath: '',
    remainingTimeForBid: new Date()
  },
]

export let artists = [
  {
    id: '1',
    name: 'Sofia Smith',
    followersCount: 10500,
    isFollowed: false,
    profilePhoto: Sofia_Pic,
    coverPhoto: Sofia_Cover_Photo,
  },
  {
    id: '2',
    name: 'Sarah Marius',
    followersCount: 12200,
    isFollowed: true,
    profilePhoto: Sarah_Pic,
    coverPhoto: Sarah_Cover_Photo,
  },
  {
    id: '3',
    name: 'David Bose',
    followersCount: 15700,
    isFollowed: false,
    profilePhoto: David_Pic,
    coverPhoto: David_Cover_Photo,
  },
  {
    id: '4',
    name: 'Javier Bravo',
    followersCount: 17500,
    isFollowed: true,
    profilePhoto: Javier_Pic,
    coverPhoto: Javier_Cover_Photo,
  },
  {
    id: '5',
    name: 'Michael Bruce',
    followersCount: 9500,
    isFollowed: true,
    profilePhoto: Sofia_Pic,
    coverPhoto: David_Cover_Photo,
  },
  {
    id: '6',
    name: 'Javier Bravo',
    followersCount: 17500,
    isFollowed: true,
    profilePhoto: David_Pic,
    coverPhoto: Sofia_Cover_Photo,
  },
  {
    id: '7',
    name: 'Javier Bravo',
    followersCount: 17500,
    isFollowed: true,
    profilePhoto: David_Pic,
    coverPhoto: David_Cover_Photo,
  },
  
]

