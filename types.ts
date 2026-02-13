
export enum MembershipTier {
  CORE = 'Core',
  PLUS = 'Plus',
  PREMIUM = 'Premium'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  tier: MembershipTier;
  walletHours: number;
  emergencyHours: number;
  children: ChildProfile[];
}

export interface ChildProfile {
  id: string;
  name: string;
  age: number;
  needs: string[];
  allergies: string[];
}

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  completedBookings: number;
  verified: boolean;
  specialties: string[];
  trustScore: number;
  bio: string;
}

export interface CareRequest {
  id: string;
  type: 'emergency' | 'planned';
  status: 'pending' | 'matched' | 'completed';
  date: string;
  startTime: string;
  duration: number;
  notes: string;
  providerId?: string;
}

export interface MembershipPlan {
  id: MembershipTier;
  price: number;
  includedHours: number;
  emergencyPriority: boolean;
  benefits: string[];
}
