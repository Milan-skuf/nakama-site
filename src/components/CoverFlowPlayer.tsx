import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Sliders,
  Radio,
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreHorizontal,
  Info,
  Disc3,
} from 'lucide-react';
import { TRACKS_DATA } from '../data/content';
import { TrackItem } from '../types';
import { CONTENT_IMAGES } from '../content';
import { useTheme } from '../context/ThemeContext';
import { downloadRepertoirePdf } from '../utils/generateRepertoirePdf';

// Rotating collection of authentic NAKAMA band photos
const PHOTO_SERIES = [
  {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(217, 119, 6, 0.45)', // Warm Amber Gold
    badge: 'DISCO & FUNK',
    labelNote: 'SUNNY GROOVE',
  },
  {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(225, 29, 72, 0.45)', // Crimson Red
    badge: 'CINEMATIC LIVE',
    labelNote: 'VOCAL DRIVE',
  },
  {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(37, 99, 235, 0.45)', // Stadium Cobalt
    badge: '100% LIVE',
    labelNote: 'RHYTHM & BRASS',
  },
  {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(168, 85, 247, 0.45)', // Purple / Violet Diva
    badge: 'CONCERT LIGHTS',
    labelNote: 'ATMOSPHERE',
  },
  {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(220, 38, 38, 0.45)', // Fiery Sunset Red
    badge: '10 ARTISTS',
    labelNote: 'FULL BAND',
  },
];

// Curated album covers and aesthetic mood colors for each track
const TRACK_ART_MAP: Record<
  string,
  {
    image: string;
    bgGlow: string;
    badge: string;
    labelNote: string;
  }
> = {
  // Atmosphere tracks
  't-atm-1': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(217, 119, 6, 0.45)',
    badge: 'DISCO VIBES',
    labelNote: 'SUNNY GROOVE',
  },
  't-atm-2': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(14, 116, 144, 0.45)',
    badge: 'CINEMATIC',
    labelNote: 'SKYFALL LIVE',
  },
  't-atm-3': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(212, 157, 66, 0.45)',
    badge: 'LOUNGE GROOVE',
    labelNote: 'STYLISH BRASS',
  },
  't-atm-4': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(168, 85, 247, 0.45)',
    badge: 'NEO-SOUL',
    labelNote: 'FUNK GROOVE',
  },

  // Russian hits
  't-ru-1': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(79, 70, 229, 0.45)',
    badge: '80S DANCEFLOOR',
    labelNote: 'SEDAIA NOCH',
  },
  't-ru-2': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(234, 88, 12, 0.45)',
    badge: 'SINGALONG',
    labelNote: 'BATARAIKA',
  },
  't-ru-3': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(220, 38, 38, 0.45)',
    badge: 'RUSSIAN ROCK',
    labelNote: 'SPLIN LIVE',
  },
  't-ru-4': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(37, 99, 235, 0.45)',
    badge: 'STADIUM ROCK',
    labelNote: 'ZVERI LIVE',
  },
  't-ru-5': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(16, 185, 129, 0.45)',
    badge: 'PARTY BLAST',
    labelNote: 'DANCEFLOOR',
  },

  // World hits
  't-wh-1': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(225, 29, 72, 0.45)',
    badge: 'VOCAL POWER',
    labelNote: 'THE BEST',
  },
  't-wh-2': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(217, 119, 6, 0.45)',
    badge: 'FUNK & GROOVE',
    labelNote: 'UPTOWN FUNK',
  },
  't-wh-3': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(168, 85, 247, 0.45)',
    badge: 'SYNTHWAVE',
    labelNote: 'BLINDING LIGHTS',
  },
  't-wh-4': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(14, 116, 144, 0.45)',
    badge: 'POP DRIVE',
    labelNote: 'FEEL THE BEAT',
  },

  // Party tracks
  't-pty-1': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(220, 38, 38, 0.45)',
    badge: 'ROCK & BRASS',
    labelNote: 'PARTY ANTHEM',
  },
  't-pty-2': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(37, 99, 235, 0.45)',
    badge: 'ROCK ANTHEM',
    labelNote: 'BON JOVI',
  },
  't-pty-3': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(212, 157, 66, 0.45)',
    badge: 'VOCAL SOUL',
    labelNote: 'LETET LIVE',
  },
  't-pty-4': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(225, 29, 72, 0.45)',
    badge: 'DANCE ROCK',
    labelNote: 'POKER FACE',
  },

  // Rock tracks
  't-rck-1': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(234, 88, 12, 0.45)',
    badge: 'RAW ROCK',
    labelNote: 'BEGGIN LIVE',
  },
  't-rck-2': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(79, 70, 229, 0.45)',
    badge: 'ARENA BEAT',
    labelNote: 'BELIEVER',
  },
  't-rck-3': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(220, 38, 38, 0.45)',
    badge: 'STADIUM RIFF',
    labelNote: 'SEVEN NATION',
  },
  't-rck-4': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(14, 116, 144, 0.45)',
    badge: 'GRUNGE DRIVE',
    labelNote: 'NIRVANA LIVE',
  },

  // Slow tracks
  't-slw-1': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(212, 157, 66, 0.45)',
    badge: 'FIRST DANCE',
    labelNote: 'ROMANTIC',
  },
  't-slw-2': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(217, 119, 6, 0.45)',
    badge: 'LOVE BALLAD',
    labelNote: 'PERFECT',
  },
  't-slw-3': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(168, 85, 247, 0.45)',
    badge: 'DUET POWER',
    labelNote: 'SHALLOW',
  },
  't-slw-4': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(16, 185, 129, 0.45)',
    badge: 'NOSTALGIA',
    labelNote: 'DELTAPLAN',
  },

  // Final tracks
  't-fnl-1': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(37, 99, 235, 0.45)',
    badge: 'GRAND FINALE',
    labelNote: 'JOURNEY',
  },
  't-fnl-2': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(212, 157, 66, 0.45)',
    badge: 'SINGALONG',
    labelNote: 'SANSARA',
  },
  't-fnl-3': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(168, 85, 247, 0.45)',
    badge: 'CLIMAX',
    labelNote: 'QUEEN LIVE',
  },
  't-fnl-4': {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(217, 119, 6, 0.45)',
    badge: 'CHAMPIONS',
    labelNote: 'FINAL BOW',
  },

  // New Year tracks
  't-ny-1': {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(16, 185, 129, 0.45)',
    badge: 'NEW YEAR',
    labelNote: 'LAST CHRISTMAS',
  },
  't-ny-2': {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(14, 116, 144, 0.45)',
    badge: 'WINTER ROCK',
    labelNote: 'VIUGA LIVE',
  },
  't-ny-3': {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(225, 29, 72, 0.45)',
    badge: 'HOLIDAY SET',
    labelNote: 'TRI BELYKH KONYA',
  },
  't-ny-4': {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(212, 157, 66, 0.45)',
    badge: 'ABBA LIVE',
    labelNote: 'HAPPY NEW YEAR',
  },

  // Backwards compatibility keys
  t1: {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(220, 38, 38, 0.45)',
    badge: 'ROCK & BRASS',
    labelNote: 'PARTY ANTHEM',
  },
  t2: {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(217, 119, 6, 0.45)',
    badge: 'DISCO VIBES',
    labelNote: 'SUNNY GROOVE',
  },
  t3: {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(225, 29, 72, 0.45)',
    badge: 'VOCAL POWER',
    labelNote: 'LIVE DRIVE',
  },
  t4: {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(168, 85, 247, 0.45)',
    badge: 'GLOBAL HIT',
    labelNote: 'THE BEST',
  },
  t5: {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(79, 70, 229, 0.45)',
    badge: '80S DANCEFLOOR',
    labelNote: 'SEDAIA NOCH',
  },
  t6: {
    image: CONTENT_IMAGES.dsc00649,
    bgGlow: 'rgba(212, 157, 66, 0.4)',
    badge: 'SLOW DANCE',
    labelNote: 'ROMANTIC',
  },
  t7: {
    image: CONTENT_IMAGES.dsc09924,
    bgGlow: 'rgba(14, 116, 144, 0.45)',
    badge: 'CINEMATIC',
    labelNote: 'SKYFALL LIVE',
  },
  t8: {
    image: CONTENT_IMAGES.dsc00684,
    bgGlow: 'rgba(234, 88, 12, 0.45)',
    badge: 'SINGALONG',
    labelNote: 'BATARAIKA',
  },
  t9: {
    image: CONTENT_IMAGES.dsc00852,
    bgGlow: 'rgba(37, 99, 235, 0.45)',
    badge: 'STADIUM ROCK',
    labelNote: 'DON\'T STOP',
  },
  t10: {
    image: CONTENT_IMAGES.dsc09942,
    bgGlow: 'rgba(16, 185, 129, 0.45)',
    badge: 'HOLIDAY SET',
    labelNote: 'NEW YEAR',
  },
};

export const getTrackArt = (track?: TrackItem, index: number = 0) => {
  if (track?.id && TRACK_ART_MAP[track.id]) {
    return TRACK_ART_MAP[track.id];
  }
  return PHOTO_SERIES[Math.abs(index) % PHOTO_SERIES.length];
};

const CATEGORIES = [
  { key: 'all', label: 'все треки' },
  { key: 'party', label: 'раскачать зал' },
  { key: 'rock', label: 'на разрыв' },
  { key: 'ru_hits', label: 'русские хиты' },
  { key: 'world_hits', label: 'мировые хиты' },
  { key: 'slow', label: 'медляки' },
  { key: 'atmosphere', label: 'атмосфера' },
  { key: 'ny', label: 'новый год' },
];

interface CoverFlowPlayerProps {
  tracks?: TrackItem[];
  title?: string;
  className?: string;
}

export const CoverFlowPlayer: React.FC<CoverFlowPlayerProps> = ({
  tracks = TRACKS_DATA,
  title = 'Послушайте, как звучит живой состав NAKAMA',
  className = '',
}) => {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  const [showEqModal, setShowEqModal] = useState(false);
  const [showTracklist, setShowTracklist] = useState(false);
  const [pitchOffset, setPitchOffset] = useState(0);
  const [bassBoost, setBassBoost] = useState(true);

  // Filtered tracks
  const filteredTracks = useMemo(() => {
    return activeCategory === 'all'
      ? tracks
      : tracks.filter((t) => t.category === activeCategory);
  }, [activeCategory, tracks]);

  // Keep active index within bounds when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);

  const currentTrack = filteredTracks[activeIndex] || filteredTracks[0] || tracks[0];
  const currentArt = getTrackArt(currentTrack, activeIndex);

  // Audio Context refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthNodesRef = useRef<OscillatorNode[]>([]);
  const timerRef = useRef<number | null>(null);

  const trackDurationSec = useMemo(() => {
    if (!currentTrack?.duration) return 50;
    const parts = currentTrack.duration.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 50;
  }, [currentTrack]);

  // -------------------------------------------------------------
  // Web Audio Playback Engine
  // -------------------------------------------------------------
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    if (!masterGainRef.current && audioCtxRef.current) {
      const gain = audioCtxRef.current.createGain();
      gain.gain.value = isMuted ? 0 : volume;
      gain.connect(audioCtxRef.current.destination);
      masterGainRef.current = gain;
    }
  };

  const startPlayback = () => {
    initAudio();
    stopAudioNodes();

    if (!audioCtxRef.current || !masterGainRef.current) return;
    const ctx = audioCtxRef.current;
    const master = masterGainRef.current;

    const pitchMult = 1 + pitchOffset / 100;
    const notes = [130.81, 164.81, 196.0, 246.94, 261.63, 329.63, 392.0];
    const baseSeed = (currentTrack.title.charCodeAt(0) || 70) % notes.length;
    const tonic = (notes[baseSeed] || 196.0) * pitchMult;

    // Bassline
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bassOsc.type = 'sawtooth';
    bassOsc.frequency.setValueAtTime(tonic / 2, ctx.currentTime);
    bassGain.gain.setValueAtTime(bassBoost ? 0.055 : 0.035, ctx.currentTime);

    const lpFilter = ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(1600 * pitchMult, ctx.currentTime);

    bassOsc.connect(bassGain);
    bassGain.connect(lpFilter);

    // Melody
    const leadOsc = ctx.createOscillator();
    const leadGain = ctx.createGain();
    leadOsc.type = 'triangle';
    leadOsc.frequency.setValueAtTime(tonic, ctx.currentTime);
    leadOsc.frequency.exponentialRampToValueAtTime(tonic * 1.015, ctx.currentTime + 1.2);
    leadGain.gain.setValueAtTime(0.075, ctx.currentTime);

    leadOsc.connect(leadGain);
    leadGain.connect(lpFilter);
    lpFilter.connect(master);

    bassOsc.start();
    leadOsc.start();
    synthNodesRef.current = [bassOsc, leadOsc];

    // Playback progression timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentTimeSec((prev) => {
        const next = prev + 1;
        if (next >= trackDurationSec) {
          handleNext();
          return 0;
        }
        setProgress((next / trackDurationSec) * 100);
        return next;
      });
    }, 1000);
  };

  const stopAudioNodes = () => {
    synthNodesRef.current.forEach((node) => {
      try {
        node.stop();
        node.disconnect();
      } catch {
        // already stopped
      }
    });
    synthNodesRef.current = [];

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAudioNodes();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      startPlayback();
    }
  };

  const handlePrev = () => {
    const prevIndex = activeIndex <= 0 ? filteredTracks.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
    setProgress(0);
    setCurrentTimeSec(0);
    if (isPlaying) {
      stopAudioNodes();
      setTimeout(() => startPlayback(), 100);
    }
  };

  const handleNext = () => {
    const nextIndex = activeIndex >= filteredTracks.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    setProgress(0);
    setCurrentTimeSec(0);
    if (isPlaying) {
      stopAudioNodes();
      setTimeout(() => startPlayback(), 100);
    }
  };

  const handleSelectIndex = (index: number) => {
    if (index === activeIndex) {
      handleTogglePlay();
      return;
    }
    setActiveIndex(index);
    setProgress(0);
    setCurrentTimeSec(0);
    if (isPlaying) {
      stopAudioNodes();
      setTimeout(() => startPlayback(), 100);
    }
  };

  // Touch swipe support for mobile
  const touchStartXRef = useRef<number | null>(null);

  // Preload all high-res cover photos so there is zero decoding lag during card flip
  useEffect(() => {
    Object.values(CONTENT_IMAGES).forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard controls (Left/Right arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === ' ') {
        e.preventDefault();
        handleTogglePlay();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, isPlaying, filteredTracks]);

  // Volume update
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : volume,
        audioCtxRef.current.currentTime
      );
    }
  }, [volume, isMuted]);

  // Cleanup
  useEffect(() => {
    return () => {
      stopAudioNodes();
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadRepertoire = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      await downloadRepertoirePdf(tracks);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  // Helper to compute 3D card layout properties relative to activeIndex
  const getCardStyle = (index: number) => {
    const total = filteredTracks.length;
    let offset = index - activeIndex;

    // Wrap around for cyclic circular carousel
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);

    if (offset === 0) {
      return {
        transform: 'perspective(1200px) rotateY(0deg) translateZ(50px) translateX(0%) scale(1.05)',
        zIndex: 30,
        opacity: 1,
        filter: 'brightness(1.02)',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
      };
    }

    if (offset === -1) {
      return {
        transform:
          'perspective(1200px) rotateY(26deg) translateZ(-35px) translateX(-55%) scale(0.86)',
        zIndex: 20,
        opacity: 0.78,
        filter: 'brightness(0.75)',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
      };
    }

    if (offset === 1) {
      return {
        transform:
          'perspective(1200px) rotateY(-26deg) translateZ(-35px) translateX(55%) scale(0.86)',
        zIndex: 20,
        opacity: 0.78,
        filter: 'brightness(0.75)',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
      };
    }

    if (offset === -2) {
      return {
        transform:
          'perspective(1200px) rotateY(36deg) translateZ(-90px) translateX(-95%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.55)',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
      };
    }

    if (offset === 2) {
      return {
        transform:
          'perspective(1200px) rotateY(-36deg) translateZ(-90px) translateX(95%) scale(0.72)',
        zIndex: 10,
        opacity: 0.45,
        filter: 'brightness(0.55)',
        pointerEvents: 'auto' as const,
        visibility: 'visible' as const,
      };
    }

    // Smooth off-screen buffer cards: maintain 3D transform and fade smoothly in/out instead of abrupt display:none
    const direction = offset > 0 ? 1 : -1;
    return {
      transform: `perspective(1200px) rotateY(${direction * -40}deg) translateZ(-150px) translateX(${direction * 135}%) scale(0.58)`,
      zIndex: 1,
      opacity: 0,
      filter: 'brightness(0.35)',
      pointerEvents: 'none' as const,
      visibility: absOffset > 3 ? ('hidden' as const) : ('visible' as const),
    };
  };

  return (
    <div
      className={`relative w-full select-none py-2 sm:py-6 ${className}`}
    >
      {/* Dynamic Ambient Background Glow (Crimson & Amber lights matching reference) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[680px] h-[400px] sm:h-[680px] rounded-full pointer-events-none blur-[120px] sm:blur-[160px] transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle, ${currentArt.bgGlow} 0%, rgba(234, 88, 12, 0.22) 45%, transparent 75%)`,
        }}
      />
      {/* Secondary warm gold aura */}
      <div className="absolute top-1/3 left-2/3 w-80 h-80 rounded-full bg-amber-500/10 pointer-events-none blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center justify-between min-h-[480px] sm:min-h-[520px] gap-6">
        {/* =========================================================================
            1. CINEMATIC PLAYER HEADER & GENRE CATEGORY SELECTOR
           ========================================================================= */}
        <div className="w-full max-w-4xl mx-auto text-center space-y-2.5 px-4">
          <p className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-70">
            репертуар · {tracks.length}+ треков · 100% живой звук
          </p>

          <h2
            className={`font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight ${
              isDark ? 'text-white' : 'text-[#141218]'
            }`}
          >
            {title}
          </h2>

          <p className="font-handwriting text-xl sm:text-2xl text-[#8CA069] dark:text-[#A6BE7E] -rotate-1 select-none">
            «звучит так же мощно, как на живом концерте»
          </p>

          {/* Genre Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setActiveCategory(cat.key)}
                  className={`text-xs font-display font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#8CA069] text-white shadow-md scale-105'
                      : isDark
                      ? 'bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white'
                      : 'bg-black/5 text-[#3E3A47] hover:bg-black/10 hover:text-black'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            2. THE 3D COVER FLOW CAROUSEL (Direct visual match to Image 4)
           ========================================================================= */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full flex items-center justify-center h-[340px] sm:h-[400px] md:h-[440px]"
        >
          {/* Navigation Chevron Left */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Cover"
            className={`absolute left-1 sm:left-4 z-40 p-2.5 sm:p-3 rounded-full backdrop-blur-xl transition-all hover:scale-110 cursor-pointer shadow-xl border ${
              isDark
                ? 'bg-black/50 hover:bg-black/80 text-white/70 hover:text-white border-white/20'
                : 'bg-white/80 hover:bg-white text-black/70 hover:text-black border-black/10'
            }`}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Chevron Right */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Cover"
            className={`absolute right-1 sm:right-4 z-40 p-2.5 sm:p-3 rounded-full backdrop-blur-xl transition-all hover:scale-110 cursor-pointer shadow-xl border ${
              isDark
                ? 'bg-black/50 hover:bg-black/80 text-white/70 hover:text-white border-white/20'
                : 'bg-white/80 hover:bg-white text-black/70 hover:text-black border-black/10'
            }`}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Stage Container */}
          <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
            {filteredTracks.map((track, idx) => {
              const cardStyle = getCardStyle(idx);
              const isCenter = idx === activeIndex;
              const art = getTrackArt(track, idx);

              return (
                <div
                  key={track.id}
                  onClick={() => handleSelectIndex(idx)}
                  className="absolute cursor-pointer transition-all duration-500 ease-out will-change-transform"
                  style={{
                    ...cardStyle,
                    width: 'clamp(210px, 42vw, 290px)',
                    height: 'clamp(270px, 54vw, 370px)',
                  }}
                >
                  {/* The Cover Flow Card Shell */}
                  <div
                    className={`relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden border border-white/20 bg-neutral-900 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group card-dark-scope ${
                      isCenter ? 'ring-2 ring-[#8CA069]/50' : ''
                    }`}
                  >
                    {/* Album Art Image with subtle dark vignette */}
                    <img
                      src={art.image}
                      alt={`${track.title} cover`}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay (both bottom for text and subtle top for indicators) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

                    {/* Film Reel Frame indicator on active card */}
                    {isCenter && (
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 select-none">
                        <span className="badge-film-live text-[9px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                          LIVE
                        </span>
                        <span className="badge-duration-pill text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                          {track.duration}
                        </span>
                      </div>
                    )}

                    {/* Lower Glassmorphism Plate (Exact match to Charlie Puth card in reference) */}
                    <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-md border-t border-white/15 text-center flex flex-col justify-end">
                      {/* Original Artist Name (Bold & prominent) */}
                      <h4 className="font-sans font-bold text-sm sm:text-base text-white keep-white tracking-tight truncate">
                        {track.originalArtist}
                      </h4>

                      {/* Track Title */}
                      <p className="font-sans text-xs text-neutral-300 keep-white truncate mt-0.5">
                        {track.title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. FLOATING FROSTED GLASS DOCK PLAYER (Direct match to Image 4)
           ========================================================================= */}
        <div className="w-full max-w-xl sm:max-w-2xl mx-auto relative z-40">
          <div
            className={`rounded-full backdrop-blur-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4 transition-all ${
              isDark
                ? 'bg-neutral-900/90 hover:bg-neutral-900/95 border border-white/25 text-white shadow-[0_20px_50px_rgba(0,0,0,0.65)]'
                : 'bg-[#FBF9F4]/95 hover:bg-white/95 border-0 text-[#141218] shadow-[0_20px_45px_rgba(20,18,24,0.12)]'
            }`}
          >
            {/* Left Controls: SkipBack, Play/Pause, SkipForward */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                title="Предыдущий трек"
                className={`p-2 transition-colors cursor-pointer hover:scale-110 active:scale-95 outline-none ${
                  isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-[#141218]/70 hover:text-[#141218]'
                }`}
              >
                <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 fill-current stroke-none" />
              </button>

              {/* Play / Pause Pill Button */}
              <button
                type="button"
                onClick={handleTogglePlay}
                title={isPlaying ? 'Пауза' : 'Воспроизведение'}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer shrink-0 outline-none ring-0 ${
                  isDark
                    ? 'bg-neutral-700 hover:bg-black text-white border border-white/15'
                    : 'bg-[#141218]/70 hover:bg-black text-white border-0'
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white stroke-none" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white stroke-none ml-0.5" />
                )}
              </button>

              <button
                type="button"
                onClick={handleNext}
                title="Следующий трек"
                className={`p-2 transition-colors cursor-pointer hover:scale-110 active:scale-95 outline-none ${
                  isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-[#141218]/70 hover:text-[#141218]'
                }`}
              >
                <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 fill-current stroke-none" />
              </button>
            </div>

            {/* Center: Dynamic Island / Mini Track Badge with Waveform */}
            <div className="relative flex-1 min-w-0 mx-1 sm:mx-2">
              <div
                className={`rounded-2xl px-3 py-1.5 border flex items-center gap-2.5 overflow-hidden transition-colors ${
                  isDark
                    ? 'bg-black/60 border-white/15'
                    : 'bg-black/[0.05] border-black/10'
                }`}
              >
                {/* Mini Album Art Thumbnail */}
                <div
                  className={`w-8 h-8 rounded-lg overflow-hidden shrink-0 border relative ${
                    isDark ? 'border-white/20' : 'border-black/10'
                  }`}
                >
                  <img
                    src={currentArt.image}
                    alt={currentTrack.title}
                    className="w-full h-full object-cover"
                  />
                  {isPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span
                        className={`w-2 h-2 rounded-full animate-ping ${
                          isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                        }`}
                      />
                    </div>
                  )}
                </div>

                {/* Track Details & Scrubber */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[11px] sm:text-xs font-bold truncate block ${
                        isDark ? 'text-white' : 'text-[#141218]'
                      }`}
                    >
                      {currentTrack.originalArtist}
                    </span>
                    <span
                      className={`text-[9px] font-mono shrink-0 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {formatTime(currentTimeSec)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-[9px] sm:text-[10px] truncate block ${
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {currentTrack.title}
                    </span>
                  </div>

                  {/* Micro Progress Bar inside Island */}
                  <div
                    className={`w-full h-1 rounded-full overflow-hidden mt-1 ${
                      isDark ? 'bg-white/15' : 'bg-black/10'
                    }`}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#8CA069] via-amber-400 to-[#A66CD9]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Live Animated Equalizer Bars (Exact match to reference Image 4) */}
                <div className="flex items-end gap-0.5 h-5 px-1 shrink-0">
                  {[40, 90, 60, 100, 50].map((barHeight, bIdx) => (
                    <div
                      key={bIdx}
                      className={`w-0.5 rounded-full transition-all duration-200 ${
                        isDark ? 'bg-[#D49D42]' : 'bg-[#B88228]'
                      }`}
                      style={{
                        height: isPlaying
                          ? `${Math.max(20, barHeight * (0.4 + Math.random() * 0.6))}%`
                          : '25%',
                      }}
                    />
                  ))}
                </div>

                {/* More Details Button (...) */}
                <button
                  type="button"
                  onClick={() => setShowTracklist((prev) => !prev)}
                  title="Подробнее о треке"
                  className={`p-1 transition-colors cursor-pointer ${
                    isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-500 hover:text-black'
                  }`}
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Controls: AirPlay, Equalizer/FX, Volume */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Radio / Live Stream Icon */}
              <button
                type="button"
                onClick={() => handleTogglePlay()}
                title="Прямой эфир"
                className={`p-2 transition-colors cursor-pointer hidden sm:block ${
                  isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-[#141218]/70 hover:text-[#141218]'
                }`}
              >
                <Radio
                  className={`w-4 h-4 ${
                    isPlaying ? 'text-[#8CA069] animate-pulse' : ''
                  }`}
                />
              </button>

              {/* Equalizer / Audio FX toggle */}
              <button
                type="button"
                onClick={() => setShowEqModal((prev) => !prev)}
                title="Настройки звука и EQ"
                className={`p-2 transition-colors cursor-pointer ${
                  showEqModal
                    ? isDark
                      ? 'text-[#D49D42]'
                      : 'text-[#B88228]'
                    : isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-[#141218]/70 hover:text-[#141218]'
                }`}
              >
                <Sliders className="w-4 h-4" />
              </button>

              {/* Volume Slider & Toggle */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowVolumePopup((prev) => !prev)}
                  title="Громкость"
                  className={`p-2 transition-colors cursor-pointer ${
                    isDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-[#141218]/70 hover:text-[#141218]'
                  }`}
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-4 h-4 text-red-500" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>

                {/* Volume Popover Slider */}
                {showVolumePopup && (
                  <div
                    className={`absolute bottom-12 right-0 border p-3 rounded-2xl shadow-2xl backdrop-blur-xl z-50 flex flex-col items-center gap-2 ${
                      isDark
                        ? 'bg-[#141218] border-white/20 text-white'
                        : 'bg-white border-black/10 text-[#141218]'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {Math.round(volume * 100)}%
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={isMuted ? 0 : volume}
                      onChange={(e) => {
                        setVolume(parseFloat(e.target.value));
                        if (isMuted) setIsMuted(false);
                      }}
                      className={`w-24 cursor-pointer ${
                        isDark ? 'accent-[#D49D42]' : 'accent-[#B88228]'
                      }`}
                    />
                    <button
                      type="button"
                      onClick={() => setIsMuted((prev) => !prev)}
                      className={`text-[10px] font-mono hover:underline cursor-pointer ${
                        isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                      }`}
                    >
                      {isMuted ? 'ВКЛ' : 'MUTE'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. SOUND FX & EQUALIZER MODAL
           ========================================================================= */}
        {showEqModal && (
          <div
            className={`w-full max-w-md mx-auto p-4 rounded-2xl border backdrop-blur-xl space-y-3 z-40 shadow-2xl ${
              isDark
                ? 'bg-[#141218]/95 border-white/20 text-white'
                : 'bg-white/98 border-black/10 text-[#141218]'
            }`}
          >
            <div
              className={`flex items-center justify-between text-xs font-mono ${
                isDark ? 'text-white' : 'text-[#141218]'
              }`}
            >
              <span
                className={`flex items-center gap-1.5 ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                <span>ЭКВАЛАЙЗЕР И АНАЛОГОВЫЙ ЗВУК NAKAMA</span>
              </span>
              <button
                type="button"
                onClick={() => setShowEqModal(false)}
                className={`transition-colors cursor-pointer ${
                  isDark
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-500 hover:text-black'
                }`}
              >
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className={isDark ? 'text-neutral-300' : 'text-neutral-700'}>
                Плотный бас (Bass Boost):
              </span>
              <button
                type="button"
                onClick={() => setBassBoost((prev) => !prev)}
                className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all cursor-pointer ${
                  bassBoost
                    ? isDark
                      ? 'bg-[#D49D42] text-black'
                      : 'bg-[#B88228] text-white'
                    : isDark
                    ? 'bg-white/10 text-neutral-400'
                    : 'bg-black/5 text-neutral-600'
                }`}
              >
                {bassBoost ? 'ВКЛ' : 'ВЫКЛ'}
              </button>
            </div>

            <div className="space-y-1 text-xs font-mono">
              <div
                className={`flex items-center justify-between text-[10px] ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                <span>Питч / Тональность:</span>
                <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>
                  {pitchOffset}%
                </span>
              </div>
              <input
                type="range"
                min="-6"
                max="6"
                step="1"
                value={pitchOffset}
                onChange={(e) => setPitchOffset(parseInt(e.target.value, 10))}
                className={`w-full cursor-pointer ${
                  isDark ? 'accent-[#D49D42]' : 'accent-[#B88228]'
                }`}
              />
            </div>
          </div>
        )}

        {/* =========================================================================
            5. OPTIONAL EXPANDABLE FULL TRACKLIST MODAL / DRAWER
           ========================================================================= */}
        {showTracklist && (
          <div
            className={`w-full max-w-2xl mx-auto rounded-3xl p-5 backdrop-blur-2xl space-y-3 z-40 max-h-[320px] overflow-y-auto shadow-2xl border ${
              isDark
                ? 'bg-[#141218]/95 border-white/20 scrollbar-thumb-white/20'
                : 'bg-white/98 border-black/10 scrollbar-thumb-black/20'
            }`}
          >
            <div
              className={`flex items-center justify-between pb-2 border-b ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <span
                className={`text-xs font-mono font-bold uppercase tracking-wider ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                ПОЛНЫЙ РЕПЕРТУАР ({filteredTracks.length} ТРЕКОВ)
              </span>
              <button
                type="button"
                disabled={isGeneratingPdf}
                onClick={handleDownloadRepertoire}
                className={`text-[11px] font-mono hover:underline flex items-center gap-1 cursor-pointer disabled:opacity-60 disabled:cursor-wait ${
                  isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                }`}
              >
                <Download className="w-3 h-3" />
                <span>{isGeneratingPdf ? 'ГОТОВИМ PDF…' : 'СКАЧАТЬ (.PDF)'}</span>
              </button>
            </div>

            <div className="space-y-1">
              {filteredTracks.map((track, tIdx) => {
                const isCur = tIdx === activeIndex;
                return (
                  <button
                    key={track.id}
                    type="button"
                    onClick={() => handleSelectIndex(tIdx)}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between text-xs transition-all cursor-pointer ${
                      isCur
                        ? isDark
                          ? 'bg-white/15 border border-[#D49D42] text-white font-bold'
                          : 'bg-black/5 border border-[#B88228] text-[#141218] font-bold'
                        : isDark
                        ? 'bg-white/5 border border-white/5 text-neutral-300 hover:bg-white/10 hover:text-white'
                        : 'bg-black/[0.02] border border-black/5 text-neutral-700 hover:bg-black/5 hover:text-black'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className={`font-mono w-5 ${
                          isDark ? 'text-neutral-500' : 'text-neutral-400'
                        }`}
                      >
                        {tIdx + 1}.
                      </span>
                      <span className="truncate">{track.title}</span>
                      <span
                        className={`font-normal truncate ${
                          isDark ? 'text-neutral-400' : 'text-neutral-500'
                        }`}
                      >
                        — {track.originalArtist}
                      </span>
                    </div>
                    <span
                      className={`text-[10px] font-mono shrink-0 ${
                        isDark ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {track.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* End of Player Controls */}
      </div>
    </div>
  );
};
