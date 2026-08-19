import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc, Music, Sparkles, X } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { REPERTOIRE_TRACKS } from '../data/bandData';
import { Track } from '../types';

export const AudioPlayerBar: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackId, setCurrentTrackId] = useState<string | null>(null);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((playing, trackId) => {
      setIsPlaying(playing);
      setCurrentTrackId(trackId);
      if (playing && !currentTrackId) {
        setIsCollapsed(false);
      }
    });
    return unsubscribe;
  }, [currentTrackId]);

  const currentTrack: Track | undefined = REPERTOIRE_TRACKS.find(t => t.id === currentTrackId) || (
    isPlaying ? {
      id: currentTrackId || 'demo',
      title: 'Интерактивный микшер NAKAMA',
      originalArtist: 'NAKAMA Band Live',
      category: 'dance',
      audioStyle: 'funk',
      duration: '0:45',
      tag: '6 Вокалов',
      tagColor: 'terracotta',
      bpm: 120
    } : undefined
  );

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioEngine.stop();
    } else if (currentTrack) {
      audioEngine.playTrack(currentTrack.id, currentTrack.audioStyle, currentTrack.bpm);
    } else {
      // Play default track
      const first = REPERTOIRE_TRACKS[0];
      audioEngine.playTrack(first.id, first.audioStyle, first.bpm);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted && val > 0) setIsMuted(false);
    audioEngine.setMasterVolume(val);
  };

  const handleToggleMute = () => {
    if (isMuted) {
      audioEngine.setMasterVolume(volume);
      setIsMuted(false);
    } else {
      audioEngine.setMasterVolume(0);
      setIsMuted(true);
    }
  };

  if (!isPlaying && !currentTrackId) {
    return null; // Keep hidden until user presses play or interacts with music
  }

  if (isCollapsed) {
    return (
      <div 
        onClick={() => setIsCollapsed(false)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#9B2F19] text-white shadow-2xl border border-[#F3A300]/40 flex items-center gap-2 cursor-pointer hover:scale-105 transition-all animate-bounce"
        title="Развернуть аудиоплеер NAKAMA"
      >
        <Disc className="w-5 h-5 animate-spin-slow" />
        <span className="text-xs font-mono font-bold">LIVE AUDIO</span>
      </div>
    );
  }

  return (
    <aside 
      id="floating-audio-bar"
      aria-label="Музыкальный плеер"
      className="fixed bottom-0 inset-x-0 z-40 bg-[#1A1009]/95 backdrop-blur-xl border-t border-[#9B2F19]/50 shadow-2xl transition-all duration-300 py-3 px-4 sm:px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Track Info & Animated Disc */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div className={`w-10 h-10 rounded-full bg-[#27170E] border border-[#9B2F19] flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <Disc className="w-5 h-5 text-[#F3A300]" />
            </div>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-display font-bold text-[#F1D8C1] truncate">
                {currentTrack?.title || 'NAKAMA Live Demo'}
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-[#9B2F19]/30 text-[#F3A300] border border-[#9B2F19]/50">
                100% Живой звук
              </span>
            </div>
            <p className="text-[11px] text-[#F1D8C1]/60 truncate font-mono">
              {currentTrack?.originalArtist}
            </p>
          </div>
        </div>

        {/* Center: Play / Pause Control */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleTogglePlay}
            className="w-10 h-10 rounded-full bg-[#9B2F19] hover:bg-[#BA371E] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            aria-label={isPlaying ? 'Пауза' : 'Воспроизвести'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>
        </div>

        {/* Right: Volume & Collapse */}
        <div className="flex items-center gap-4 shrink-0">
          
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="text-[#F1D8C1]/70 hover:text-white cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-[#BA371E]" /> : <Volume2 className="w-4 h-4 text-[#F3A300]" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 accent-[#9B2F19] cursor-pointer h-1.5"
            />
          </div>

          <button
            onClick={() => setIsCollapsed(true)}
            className="p-1.5 rounded-full text-[#F1D8C1]/50 hover:text-white hover:bg-[#3A2312] cursor-pointer"
            title="Свернуть плеер"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
