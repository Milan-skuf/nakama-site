import React, { useState } from 'react';
import { VideoGallerySection } from './VideoGallerySection';
import { PhotoGallerySection } from './PhotoGallerySection';
import { Video, Image as ImageIcon } from 'lucide-react';

interface MediaPageProps {
  initialTab?: 'video' | 'photo';
}

export const MediaPage: React.FC<MediaPageProps> = ({ initialTab = 'video' }) => {
  const [activeTab, setActiveTab] = useState<'video' | 'photo'>(initialTab);

  return (
    <div className="pt-20">
      {/* Sub navigation for Media */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'video'
                ? 'bg-[#9B2F19] text-white shadow-lg'
                : 'border border-[#3A2312] bg-[#23150B] text-[#F1D8C1]/70 hover:text-white hover:bg-[#3A2312]'
            }`}
          >
            Видеоархив
          </button>
          <button
            onClick={() => setActiveTab('photo')}
            className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'photo'
                ? 'bg-[#9B2F19] text-white shadow-lg'
                : 'border border-[#3A2312] bg-[#23150B] text-[#F1D8C1]/70 hover:text-white hover:bg-[#3A2312]'
            }`}
          >
            Фотогалерея
          </button>
        </div>
      </div>

      {/* Render active section */}
      {activeTab === 'video' ? <VideoGallerySection /> : <PhotoGallerySection />}
    </div>
  );
};
