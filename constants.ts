
import { MembershipTier, MembershipPlan, Provider } from './types';

export const PLANS: MembershipPlan[] = [
  {
    id: MembershipTier.CORE,
    price: 49,
    includedHours: 0,
    emergencyPriority: false,
    benefits: ['Emergency care access', 'Verified provider pool', 'Basic booking tools']
  },
  {
    id: MembershipTier.PLUS,
    price: 199,
    includedHours: 10,
    emergencyPriority: true,
    benefits: ['10 Care Hours included', 'Priority emergency queue', 'SLA: 2hr response', 'Rollover hours']
  },
  {
    id: MembershipTier.PREMIUM,
    price: 399,
    includedHours: 25,
    emergencyPriority: true,
    benefits: ['25 Care Hours included', 'Highest priority response', 'Dedicated care concierge', 'VIP provider network']
  }
];

export const MOCK_PROVIDERS: Provider[] = [
  {
    id: 'p1',
    name: 'Sarah Mitchell',
    avatar: 'https://picsum.photos/seed/sarah/200',
    rating: 4.9,
    completedBookings: 124,
    verified: true,
    specialties: ['Infant Care', 'Early Education'],
    trustScore: 98,
    bio: 'Former preschool teacher with 8 years of experience. Certified in Infant CPR and First Aid.'
  },
  {
    id: 'p2',
    name: 'David Chen',
    avatar: 'https://picsum.photos/seed/david/200',
    rating: 4.8,
    completedBookings: 86,
    verified: true,
    specialties: ['Special Needs', 'Toddlers'],
    trustScore: 95,
    bio: 'Current nursing student specializing in pediatric care. Experienced with neurodivergent children.'
  },
  {
    id: 'p3',
    name: 'Elena Rodriguez',
    avatar: 'https://picsum.photos/seed/elena/200',
    rating: 5.0,
    completedBookings: 215,
    verified: true,
    specialties: ['Homework Help', 'Bilingual (Spanish)'],
    trustScore: 99,
    bio: 'Professional nanny for over 10 years. Focuses on developmental play and educational support.'
  }
];
