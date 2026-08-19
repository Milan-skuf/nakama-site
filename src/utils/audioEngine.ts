/**
 * High-quality Web Audio Melodic & Rhythm Synthesizer
 * Generates dynamic musical soundscapes for track previews and ensemble layers
 */

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTimer: number | null = null;
  private currentTrackId: string | null = null;
  private masterGain: GainNode | null = null;
  private vocalGain: GainNode | null = null;
  private bassGain: GainNode | null = null;
  private drumGain: GainNode | null = null;
  private harmonyGain: GainNode | null = null;
  private activeNodes: (AudioNode | number)[] = [];
  private onStateChangeListeners: ((isPlaying: boolean, trackId: string | null) => void)[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.vocalGain = this.ctx.createGain();
      this.vocalGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.vocalGain.connect(this.masterGain);

      this.bassGain = this.ctx.createGain();
      this.bassGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.bassGain.connect(this.masterGain);

      this.drumGain = this.ctx.createGain();
      this.drumGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
      this.drumGain.connect(this.masterGain);

      this.harmonyGain = this.ctx.createGain();
      this.harmonyGain.gain.setValueAtTime(0.6, this.ctx.currentTime);
      this.harmonyGain.connect(this.masterGain);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public subscribe(listener: (isPlaying: boolean, trackId: string | null) => void) {
    this.onStateChangeListeners.push(listener);
    return () => {
      this.onStateChangeListeners = this.onStateChangeListeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.onStateChangeListeners.forEach(l => l(this.isPlaying, this.currentTrackId));
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrackId(): string | null {
    return this.currentTrackId;
  }

  public playTrack(trackId: string, style: 'funk' | 'rock' | 'pop' | 'ballad' | 'disco' | 'latin' = 'funk', bpm: number = 120) {
    this.initContext();
    if (!this.ctx) return;

    if (this.isPlaying && this.currentTrackId === trackId) {
      this.stop();
      return;
    }

    this.stop();
    this.isPlaying = true;
    this.currentTrackId = trackId;
    this.notify();

    const beatDuration = 60 / bpm;
    let step = 0;

    // Chord progressions by style (frequencies in Hz)
    const progressions: Record<string, number[][]> = {
      funk: [
        [261.63, 329.63, 392.00, 466.16], // C7
        [293.66, 349.23, 440.00, 523.25], // Dm7
        [349.23, 440.00, 523.25, 622.25], // F7
        [392.00, 493.88, 587.33, 698.46], // G7
      ],
      rock: [
        [220.00, 277.18, 329.63], // A
        [293.66, 369.99, 440.00], // D
        [329.63, 415.30, 493.88], // E
        [349.23, 440.00, 523.25], // F
      ],
      pop: [
        [261.63, 329.63, 392.00], // C
        [392.00, 493.88, 587.33], // G
        [220.00, 261.63, 329.63], // Am
        [349.23, 440.00, 523.25], // F
      ],
      ballad: [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [293.66, 349.23, 440.00, 523.25], // Dm7
        [392.00, 493.88, 587.33, 698.46], // G7
      ],
      disco: [
        [293.66, 349.23, 440.00], // Dm
        [392.00, 493.88, 587.33], // G
        [261.63, 329.63, 392.00], // C
        [220.00, 261.63, 329.63], // Am
      ],
      latin: [
        [220.00, 261.63, 329.63], // Am
        [293.66, 349.23, 440.00], // Dm
        [329.63, 392.00, 493.88], // Em
        [329.63, 415.30, 493.88], // E7
      ]
    };

    const chordProg = progressions[style] || progressions.pop;

    const playLoop = () => {
      if (!this.isPlaying || !this.ctx) return;

      const chordIndex = Math.floor(step / 4) % chordProg.length;
      const currentChord = chordProg[chordIndex];
      const time = this.ctx.currentTime;

      // 1. Kick & Snare Drums
      if (step % 2 === 0) {
        this.playKick(time);
      } else {
        this.playSnare(time);
      }
      this.playHiHat(time);

      // 2. Bassline
      const rootFreq = currentChord[0] / 2;
      const bassNote = step % 4 === 2 ? rootFreq * 1.5 : rootFreq;
      this.playBass(bassNote, time, beatDuration * 0.8);

      // 3. Brass / Synth Harmony Chords
      if (step % 2 === 0 || style === 'funk') {
        this.playChord(currentChord, time, beatDuration * 0.9);
      }

      // 4. Vocal Melodic lead riff (simulated warm polyphonic vocal lead)
      if (step % 2 === 1) {
        const leadFreq = currentChord[(step % currentChord.length)] * 2;
        this.playVocalLead(leadFreq, time, beatDuration * 0.6);
      }

      step++;
      const timerId = window.setTimeout(playLoop, beatDuration * 500); // 8th notes
      this.currentTimer = timerId;
    };

    playLoop();
  }

  private playKick(time: number) {
    if (!this.ctx || !this.drumGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.3);
    
    gain.gain.setValueAtTime(0.8, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3);

    osc.connect(gain);
    gain.connect(this.drumGain);

    osc.start(time);
    osc.stop(time + 0.3);
  }

  private playSnare(time: number) {
    if (!this.ctx || !this.drumGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.2);

    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

    osc.connect(gain);
    gain.connect(this.drumGain);
    osc.start(time);
    osc.stop(time + 0.2);
  }

  private playHiHat(time: number) {
    if (!this.ctx || !this.drumGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(8000, time);

    gain.gain.setValueAtTime(0.15, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

    osc.connect(gain);
    gain.connect(this.drumGain);
    osc.start(time);
    osc.stop(time + 0.05);
  }

  private playBass(freq: number, time: number, duration: number) {
    if (!this.ctx || !this.bassGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, time);

    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.bassGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  private playChord(chord: number[], time: number, duration: number) {
    if (!this.ctx || !this.harmonyGain) return;
    chord.forEach((freq, i) => {
      if (!this.ctx || !this.harmonyGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.12 / (i + 1), time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

      osc.connect(gain);
      gain.connect(this.harmonyGain);

      osc.start(time);
      osc.stop(time + duration);
    });
  }

  private playVocalLead(freq: number, time: number, duration: number) {
    if (!this.ctx || !this.vocalGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    
    // Add subtle vibrato
    osc.frequency.setValueAtTime(freq, time);
    osc.frequency.linearRampToValueAtTime(freq * 1.01, time + duration * 0.5);
    osc.frequency.linearRampToValueAtTime(freq, time + duration);

    gain.gain.setValueAtTime(0.01, time);
    gain.gain.linearRampToValueAtTime(0.25, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.vocalGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // Multi-voice ensemble layer control (for Ensemble section interactive mixer)
  public setLayerVolume(layer: 'vocal' | 'bass' | 'drum' | 'harmony', volume: number) {
    this.initContext();
    if (!this.ctx) return;
    const map = {
      vocal: this.vocalGain,
      bass: this.bassGain,
      drum: this.drumGain,
      harmony: this.harmonyGain,
    };
    const target = map[layer];
    if (target) {
      target.gain.setTargetAtTime(volume, this.ctx.currentTime, 0.05);
    }
  }

  public setMasterVolume(vol: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, vol)), this.ctx.currentTime, 0.05);
    }
  }

  public stop() {
    if (this.currentTimer) {
      clearTimeout(this.currentTimer);
      this.currentTimer = null;
    }
    this.isPlaying = false;
    this.currentTrackId = null;
    this.notify();
  }
}

export const audioEngine = new AudioEngine();
