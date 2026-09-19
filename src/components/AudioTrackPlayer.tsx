import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Play, Pause, Disc3, Volume2, VolumeX, Download, Filter, Radio, Music2, Heart, Check, ChevronDown, Sparkles } from 'lucide-react';
import { TRACKS_DATA } from '../data/content';
import { TrackItem } from '../types';
import { NowPlayingArt } from './NowPlayingArt';
import { useTheme } from '../context/ThemeContext';
import { useFavorites } from '../utils/favorites';

const CATEGORIES = [
  { key: 'all', label: 'все треки' },
  { key: 'atmosphere', label: 'атмосфера' },
  { key: 'ru_hits', label: 'русские хиты' },
  { key: 'world_hits', label: 'зарубежные хиты' },
  { key: 'party', label: 'раскачать зал' },
  { key: 'rock', label: 'на разрыв' },
  { key: 'slow', label: 'медляки' },
  { key: 'final', label: 'финал' },
  { key: 'ny', label: 'новый год' },
];

interface AudioTrackPlayerProps {
  tracks?: TrackItem[];
  title?: string;
  onFinishSelection?: () => void;
}

export const AudioTrackPlayer: React.FC<AudioTrackPlayerProps> = ({
  tracks = TRACKS_DATA,
  title,
  onFinishSelection,
}) => {
  const { isDark } = useTheme();
  const { isFavorite, toggleFavorite, count: favoritesCount, favoriteTracks } = useFavorites();
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentTrack, setCurrentTrack] = useState<TrackItem>(tracks[0] || TRACKS_DATA[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 - 100
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [displayLimit, setDisplayLimit] = useState(12);

  // Subtle vinyl-surface ambience on the synthesized preview (always on, no user-facing toggle)
  const crackleEnabled = true;

  // Web Audio refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const synthNodesRef = useRef<OscillatorNode[]>([]);
  const crackleNodeRef = useRef<AudioNode | null>(null);
  const timerRef = useRef<number | null>(null);

  // Filtered tracks
  const filteredTracks = useMemo(() => {
    if (activeCategory === 'favorites') {
      return tracks.filter((t) => isFavorite(t.id));
    }
    return activeCategory === 'all'
      ? tracks
      : tracks.filter((t) => t.category === activeCategory);
  }, [activeCategory, tracks, isFavorite]);

  const visibleTracks = useMemo(() => {
    return filteredTracks.slice(0, displayLimit);
  }, [filteredTracks, displayLimit]);

  const handleFinishSelectionClick = () => {
    if (onFinishSelection) {
      onFinishSelection();
    } else {
      const el = document.getElementById('booking-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Track duration in seconds
  const trackDurationSec = useMemo(() => {
    if (!currentTrack?.duration) return 50;
    const parts = currentTrack.duration.split(':');
    if (parts.length === 2) {
      return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    }
    return 50;
  }, [currentTrack]);

  // -------------------------------------------------------------
  // Web Audio Initialization and Playback Engine
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

    // 1. Synthesize Track Melodic Harmony
    const notes = [130.81, 164.81, 196.0, 246.94, 261.63, 329.63, 392.0];
    const baseSeed = (currentTrack.title.charCodeAt(0) || 70) % notes.length;
    const tonic = notes[baseSeed] || 196.0;

    // Bassline oscillator
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bassOsc.type = 'sawtooth';
    bassOsc.frequency.setValueAtTime(tonic / 2, ctx.currentTime);
    bassGain.gain.setValueAtTime(0.04, ctx.currentTime);

    // Warm Low-pass filter for analog vinyl sound
    const lpFilter = ctx.createBiquadFilter();
    lpFilter.type = 'lowpass';
    lpFilter.frequency.setValueAtTime(1400, ctx.currentTime);

    bassOsc.connect(bassGain);
    bassGain.connect(lpFilter);

    // Lead melody oscillator
    const leadOsc = ctx.createOscillator();
    const leadGain = ctx.createGain();
    leadOsc.type = 'triangle';
    leadOsc.frequency.setValueAtTime(tonic, ctx.currentTime);
    leadOsc.frequency.exponentialRampToValueAtTime(tonic * 1.01, ctx.currentTime + 1.2);
    leadGain.gain.setValueAtTime(0.07, ctx.currentTime);

    leadOsc.connect(leadGain);
    leadGain.connect(lpFilter);

    lpFilter.connect(master);

    bassOsc.start();
    leadOsc.start();
    synthNodesRef.current = [bassOsc, leadOsc];

    // 2. Authentic Vinyl Surface Noise & Dust Pops
    if (crackleEnabled) {
      try {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = output[i];
          if (Math.random() < 0.0006) {
            output[i] += (Math.random() - 0.5) * 0.35; // vinyl pop/tick
          }
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = 1800;
        noiseFilter.Q.value = 1.2;

        const noiseGain = ctx.createGain();
        noiseGain.gain.value = 0.025;

        whiteNoise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(master);

        whiteNoise.start();
        crackleNodeRef.current = whiteNoise;
      } catch {
        // Fallback gracefully
      }
    }

    // 3. Playback timer
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setCurrentTimeSec((prev) => {
        const next = prev + 1;
        if (next >= trackDurationSec) {
          handleNextTrack();
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

    if (crackleNodeRef.current) {
      try {
        (crackleNodeRef.current as AudioBufferSourceNode).stop();
        crackleNodeRef.current.disconnect();
      } catch {
        // already stopped
      }
      crackleNodeRef.current = null;
    }

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

  const handleSelectTrack = (track: TrackItem) => {
    if (currentTrack.id === track.id) {
      handleTogglePlay();
      return;
    }
    setCurrentTrack(track);
    setProgress(0);
    setCurrentTimeSec(0);
    setIsPlaying(true);
    setTimeout(() => startPlayback(), 50);
  };

  const handleNextTrack = () => {
    const currentIndex = tracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = currentIndex >= tracks.length - 1 ? 0 : currentIndex + 1;
    setCurrentTrack(tracks[nextIndex]);
    setProgress(0);
    setCurrentTimeSec(0);
    if (isPlaying) {
      setTimeout(() => startPlayback(), 100);
    }
  };

  // Update volume
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

  const handleDownloadRepertoire = () => {
    const textContent =
      `РЕПЕРТУАР КАВЕР-ГРУППЫ NAKAMA (100+ ТРЕКОВ)\n\n` +
      `10 человек на сцене, 6 вокалистов, 100% живой звук без плейбеков.\n` +
      `Город: Новосибирск, выезд по всей России.\nМенеджер: 8-906-980-65-25 (Анна)\n\n` +
      TRACKS_DATA.map(
        (t, idx) => `${idx + 1}. ${t.title} — ${t.originalArtist} [${t.tag}]`
      ).join('\n') +
      `\n\n... и ещё более 90 треков в полном концертном каталоге.`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NAKAMA_Repertoire_100_Tracks.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`space-y-8 font-sans ${isDark ? 'text-white' : 'text-[#141218]'}`}>
      {/* 2-Column Luxury Hi-Fi Player Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* =========================================================================
            LEFT: NOW PLAYING ARTWORK (same visual language as the homepage player)
           ========================================================================= */}
        <div className="lg:col-span-5">
          <NowPlayingArt
            track={currentTrack}
            trackIndex={tracks.findIndex((t) => t.id === currentTrack.id)}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
          />
        </div>

        {/* =========================================================================
            RIGHT: ACTIVE TRACK SHOWCASE, CONTROLS & REPERTOIRE LIST
           ========================================================================= */}
        <div className="lg:col-span-7 space-y-6">
          {/* Active Track Frosted Glass Showcase Card */}
          <div
            className={`rounded-[28px] p-5 sm:p-7 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-5 border ${
              isDark
                ? 'bg-white/[0.04] border-white/15'
                : 'bg-black/[0.03] border-black/10'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full uppercase border ${
                    isDark
                      ? 'bg-[#D49D42]/20 text-[#D49D42] border-[#D49D42]/30'
                      : 'bg-[#B88228]/15 text-[#B88228] border-[#B88228]/30'
                  }`}
                >
                  {currentTrack.tag}
                </span>
                <span
                  className={`text-[11px] flex items-center gap-1 font-bold uppercase tracking-wider ${
                    isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                  }`}
                >
                  <Radio
                    className={`w-3 h-3 animate-pulse ${
                      isDark ? 'text-[#D49D42]' : 'text-[#B88228]'
                    }`}
                  />
                  <span>ЖИВОЙ КАВЕР NAKAMA</span>
                </span>
              </div>

              <span
                className={`text-xs font-mono ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                {currentTrack.duration}
              </span>
            </div>

            {/* Title & Artist */}
            <div>
              <h3
                className={`font-serif text-2xl sm:text-3xl font-normal tracking-tight ${
                  isDark ? 'text-white' : 'text-[#141218]'
                }`}
              >
                {currentTrack.title}
              </h3>
              <p
                className={`text-sm font-sans mt-0.5 ${
                  isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                }`}
              >
                Оригинал: {currentTrack.originalArtist}
              </p>
            </div>

            {/* Dynamic Animated Equalizer Waveform */}
            <div className="space-y-2">
              <div className="flex items-end justify-between gap-1 h-9 px-1">
                {[28, 45, 80, 60, 35, 95, 70, 50, 85, 40, 65, 90, 55, 75, 45, 85, 60, 30, 90, 70, 40, 80, 55, 95, 65, 40, 75, 50].map(
                  (h, idx) => {
                    const isActiveBar = (idx / 28) * 100 <= progress;
                    return (
                      <div
                        key={idx}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          isActiveBar
                            ? 'bg-gradient-to-t from-[#D49D42] to-[#E8590C]'
                            : isDark
                            ? 'bg-white/20'
                            : 'bg-black/15'
                        }`}
                        style={{
                          height: isPlaying
                            ? `${Math.max(15, h * (0.6 + Math.random() * 0.5))}%`
                            : `${h * 0.4}%`,
                        }}
                      />
                    );
                  }
                )}
              </div>

              {/* Progress Scrub Bar */}
              <div
                className={`relative w-full h-1.5 rounded-full overflow-hidden ${
                  isDark ? 'bg-white/10' : 'bg-black/10'
                }`}
              >
                <div
                  className="h-full bg-gradient-to-r from-[#D49D42] to-[#E8590C] rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div
                className={`flex items-center justify-between text-[11px] font-mono ${
                  isDark ? 'text-neutral-400' : 'text-[#686370]'
                }`}
              >
                <span>{formatTime(currentTimeSec)}</span>
                <span>{currentTrack.duration || formatTime(trackDurationSec)}</span>
              </div>
            </div>

            {/* Transport Bar: START / STOP + Volume */}
            <div
              className={`flex items-center justify-between gap-4 pt-2 border-t ${
                isDark ? 'border-white/10' : 'border-black/10'
              }`}
            >
              <button
                type="button"
                onClick={handleTogglePlay}
                className={`px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-[0.2em] font-bold flex items-center gap-2.5 transition-all shadow-xl cursor-pointer ${
                  isPlaying
                    ? 'bg-[#8CA069] hover:bg-[#9cb07b] text-black shadow-[0_0_20px_rgba(140,160,105,0.5)] scale-105'
                    : isDark
                    ? 'bg-white hover:bg-neutral-200 text-black hover:scale-105'
                    : 'bg-[#141218] hover:bg-neutral-800 text-white hover:scale-105'
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'STOP' : 'START'}</span>
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsMuted((prev) => !prev)}
                  className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/15 border-white/15 text-neutral-300 hover:text-white'
                      : 'bg-black/5 hover:bg-black/10 border-black/10 text-[#4A4552] hover:text-[#141218]'
                  }`}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
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
                  className="w-20 accent-[#D49D42] cursor-pointer"
                  title="Громкость"
                />
              </div>
            </div>
          </div>

          {/* Genre Filter Pills - Mobile horizontal scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] shrink-0 font-bold uppercase tracking-wider hidden sm:flex border ${
                isDark
                  ? 'bg-white/[0.06] border-white/15 text-neutral-300'
                  : 'bg-black/[0.05] border-black/10 text-[#4A4552]'
              }`}
            >
              <Filter className={`w-3 h-3 ${isDark ? 'text-white' : 'text-[#141218]'}`} />
              <span>ЖАНР:</span>
            </div>

            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  id={`cat-filter-${cat.key}`}
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setDisplayLimit(12);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-200 cursor-pointer uppercase tracking-wider ${
                    active
                      ? isDark
                        ? 'bg-white text-black font-black border border-white shadow-md scale-105'
                        : 'bg-[#141218] text-white font-black border border-[#141218] shadow-md scale-105'
                      : isDark
                      ? 'bg-white/[0.06] text-neutral-300 hover:text-white border border-white/15 hover:bg-white/[0.12] font-semibold'
                      : 'bg-black/[0.05] text-[#4A4552] hover:text-[#141218] border border-black/10 hover:bg-black/[0.08] font-semibold'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}

            {/* Favorites Category Tab */}
            <button
              type="button"
              id="cat-filter-favorites"
              onClick={() => {
                setActiveCategory('favorites');
                setDisplayLimit(12);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-200 cursor-pointer uppercase tracking-wider flex items-center gap-1.5 ${
                activeCategory === 'favorites'
                  ? 'bg-rose-600 text-white font-black border border-rose-500 shadow-md scale-105'
                  : favoritesCount > 0
                  ? isDark
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold hover:bg-rose-500/30'
                    : 'bg-rose-50 text-rose-700 border border-rose-300 font-bold hover:bg-rose-100'
                  : isDark
                  ? 'bg-white/[0.06] text-neutral-400 border border-white/15 font-semibold'
                  : 'bg-black/[0.05] text-[#686370] border border-black/10 font-semibold'
              }`}
            >
              <Heart
                className={`w-3.5 h-3.5 ${
                  activeCategory === 'favorites' || favoritesCount > 0
                    ? 'fill-current text-rose-500'
                    : ''
                }`}
              />
              <span>ИЗБРАННОЕ</span>
              {favoritesCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-white text-rose-700 font-black">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>

          {/* Scrollable Repertoire Tracklist */}
          <div className="space-y-2">
            <div
              className={`flex items-center justify-between text-xs font-mono ${
                isDark ? 'text-neutral-400' : 'text-[#686370]'
              }`}
            >
              <span className="uppercase tracking-wider">
                {activeCategory === 'favorites'
                  ? 'ВАШИ ВЫБРАННЫЕ ТРЕКИ ДЛЯ ЗАЯВКИ:'
                  : 'ТРЕКЛИСТ КОНЦЕРТА:'}
              </span>
              <span className={isDark ? 'text-[#D49D42]' : 'text-[#B88228]'}>
                {filteredTracks.length} ТРЕКОВ
              </span>
            </div>

            {filteredTracks.length === 0 ? (
              <div
                className={`p-8 text-center rounded-2xl border ${
                  isDark
                    ? 'border-white/10 bg-white/[0.02] text-neutral-400'
                    : 'border-black/10 bg-black/[0.02] text-[#686370]'
                }`}
              >
                <Heart className="w-8 h-8 mx-auto mb-2 opacity-30" />
                <p className="text-sm font-medium">В этой категории пока нет треков</p>
                {activeCategory === 'favorites' && (
                  <p className="text-xs mt-1">
                    Нажимайте на сердечко рядом с любой песней в списке, чтобы собрать персональный сет-лист!
                  </p>
                )}
              </div>
            ) : (
              <div
                className={`max-h-[340px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin ${
                  isDark ? 'scrollbar-thumb-white/20' : 'scrollbar-thumb-black/20'
                }`}
              >
                {visibleTracks.map((track) => {
                  const isSelected = track.id === currentTrack.id;
                  const isCurrentPlaying = isSelected && isPlaying;
                  const favorited = isFavorite(track.id);

                  return (
                    <div
                      key={track.id}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between gap-3 text-xs ${
                        isSelected
                          ? isDark
                            ? 'bg-white/15 border-[#D49D42] text-white shadow-lg'
                            : 'bg-[#B88228]/15 border-[#B88228] text-[#141218] shadow-md'
                          : isDark
                          ? 'bg-white/[0.03] border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                          : 'bg-black/[0.03] border-black/10 text-[#4A4552] hover:bg-black/[0.06] hover:text-[#141218]'
                      }`}
                    >
                      {/* Play button + Track Meta */}
                      <button
                        type="button"
                        onClick={() => handleSelectTrack(track)}
                        className="flex items-center gap-3 truncate flex-grow cursor-pointer text-left"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform hover:scale-110 ${
                            isCurrentPlaying
                              ? 'bg-[#D49D42] text-black font-bold shadow-md'
                              : isDark
                              ? 'bg-white/10 text-white hover:bg-white/20'
                              : 'bg-black/10 text-[#141218] hover:bg-black/15'
                          }`}
                          title={isCurrentPlaying ? 'Пауза' : 'Слушать аудиосниппет'}
                        >
                          {isCurrentPlaying ? (
                            <Pause className="w-3.5 h-3.5 fill-current" />
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          )}
                        </div>

                        <div className="truncate">
                          <span
                            className={`font-medium truncate block ${
                              isDark ? 'text-white' : 'text-[#141218]'
                            }`}
                          >
                            {track.title}
                          </span>
                          <span
                            className={`text-[10px] font-sans truncate block ${
                              isDark ? 'text-neutral-400' : 'text-[#686370]'
                            }`}
                          >
                            {track.originalArtist}
                          </span>
                        </div>
                      </button>

                      {/* Duration & Favorite Heart Button */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className={`text-[10px] font-mono hidden sm:inline ${
                            isDark ? 'text-neutral-400' : 'text-[#686370]'
                          }`}
                        >
                          {track.duration}
                        </span>

                        {/* Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(track.id);
                          }}
                          className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                            favorited
                              ? 'text-rose-500 hover:scale-125 hover:text-rose-400'
                              : isDark
                              ? 'text-neutral-500 hover:text-rose-400 hover:bg-white/10'
                              : 'text-neutral-400 hover:text-rose-600 hover:bg-black/5'
                          }`}
                          title={favorited ? 'Убрать из избранного' : 'Добавить в избранное'}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              favorited ? 'fill-rose-500 text-rose-500' : 'stroke-current'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination / Show More */}
            {filteredTracks.length > displayLimit && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setDisplayLimit((prev) => prev + 12)}
                  className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                    isDark
                      ? 'bg-white/5 hover:bg-white/15 border-white/15 text-neutral-200'
                      : 'bg-black/5 hover:bg-black/10 border-black/10 text-[#141218]'
                  }`}
                >
                  Показать ещё ({filteredTracks.length - displayLimit})
                </button>
              </div>
            )}
          </div>

          {/* Sticky / Floating Selection Completion Bar when items are favorited */}
          {favoritesCount > 0 && (
            <div
              className={`p-4 rounded-2xl border shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 transition-all animate-fadeIn ${
                isDark
                  ? 'bg-gradient-to-r from-[#D49D42]/20 via-[#E8590C]/15 to-transparent border-[#D49D42]/40 text-white'
                  : 'bg-gradient-to-r from-[#B88228]/15 via-[#C54E0E]/10 to-transparent border-[#B88228]/40 text-[#141218]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wide">
                    Выбрано песен: {favoritesCount}
                  </div>
                  <div
                    className={`text-[11px] font-sans truncate max-w-xs sm:max-w-md ${
                      isDark ? 'text-neutral-300' : 'text-[#4A4552]'
                    }`}
                  >
                    {favoriteTracks.map((t) => t.title).join(', ')}
                  </div>
                </div>
              </div>

              <button
                type="button"
                id="finish-selection-btn"
                onClick={handleFinishSelectionClick}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-display font-black uppercase tracking-wider shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 ${
                  isDark
                    ? 'bg-white text-black hover:bg-neutral-200'
                    : 'bg-[#141218] text-white hover:bg-black'
                }`}
              >
                <Check className="w-4 h-4 text-[#8CA069]" />
                <span>Завершить отбор и отправить в заявку</span>
              </button>
            </div>
          )}

          {/* Footer: Repertoire Download & Live Info */}
          <div
            className={`flex flex-wrap items-center justify-between gap-3 pt-3 border-t text-xs ${
              isDark ? 'border-white/10' : 'border-black/10'
            }`}
          >
            <button
              type="button"
              onClick={handleDownloadRepertoire}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/10 hover:bg-white/20 border-white/15 text-white'
                  : 'bg-black/5 hover:bg-black/10 border-black/10 text-[#141218]'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-[#D49D42]" />
              <span>СКАЧАТЬ РЕПЕРТУАР (.TXT)</span>
            </button>

            <span
              className={`text-[11px] font-mono ${
                isDark ? 'text-neutral-400' : 'text-[#686370]'
              }`}
            >
              100+ ПЕСЕН В ПОЛНОМ РАЙДЕРЕ NAKAMA
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
