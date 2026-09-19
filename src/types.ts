export interface TrackItem {
  id: string;
  title: string;
  originalArtist: string;
  category: 'atmosphere' | 'ru_hits' | 'world_hits' | 'party' | 'rock' | 'slow' | 'final' | 'ny';
  tag: string;
  duration: string;
  audioPreviewUrl?: string;
}

export interface PhotoSlotInfo {
  id: string;
  blockName: string;
  title: string;
  description: string;
  recommendedFileName?: string;
  wfolioUrl?: string;
  currentImage?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape' | 'wide';
}

export interface PackageItem {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  duration: string;
  features: string[];
  description: string;
  suitableFor: string;
  isPopular?: boolean;
  photoSlot?: PhotoSlotInfo;
}

export interface ConditionItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  features: string[];
  photoSlot?: PhotoSlotInfo;
}

export interface SongRemakeItem {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  badge?: string;
  description: string;
  features?: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  text: string;
  isPlaceholder?: boolean;
  eventDate?: string;
  eventType?: string;
}

export interface LeadFormData {
  name: string;
  eventType: string;
  eventDate: string;
  city: string;
  budget?: string;
  comment?: string;
}
