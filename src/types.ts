export type PageRoute = 
  | 'home'
  | 'about'
  | 'packages'
  | 'repertoire'
  | 'media'
  | 'video'
  | 'photo'
  | 'cases'
  | 'agencies'
  | 'agency'
  | 'contacts'
  | 'team'
  | 'looks'
  | 'philosophy';

export interface BandMember {
  id: string;
  name: string;
  role: string;
  instrument: string;
  category: 'vocal' | 'rhythm' | 'sound';
  bio: string;
  image: string;
  colorImage: string;
}

export type RepertoireCategory = 
  | 'all'
  | 'atmosphere'
  | 'russian'
  | 'foreign'
  | 'dance'
  | 'rock'
  | 'slow'
  | 'final'
  | 'newyear';

export interface Track {
  id: string;
  title: string;
  originalArtist: string;
  category: RepertoireCategory;
  tag: string;
  tagColor: 'terracotta' | 'olive' | 'yellow' | 'purple' | 'brown';
  duration: string;
  audioStyle: 'funk' | 'rock' | 'pop' | 'ballad' | 'disco' | 'latin';
  bpm: number;
  description?: string;
}

export interface PackagePlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceNum: number;
  duration: string;
  badge?: string;
  badgeColor?: string;
  recommendedFor: string;
  features: string[];
  exclusiveFeatures: string[];
  isPopular?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  eventType: 'corporate' | 'wedding' | 'private' | 'festival';
  eventTypeName: string;
  city: string;
  guestsCount: number;
  year: string;
  task: string;
  solution: string;
  result: string;
  quote: string;
  organizer: string;
  organizerRole: string;
  image: string;
  videoUrl?: string;
}

export interface CostumeLook {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  palette: string[];
  suitableFor: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  companyOrEvent: string;
  avatar: string;
  rating: number;
  text: string;
  eventDate: string;
  city: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email?: string;
  eventType: string;
  date: string;
  city: string;
  guestsCount?: string;
  packageType: string;
  comment?: string;
  promoCode?: string;
}
