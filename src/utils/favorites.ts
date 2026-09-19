import { useState, useEffect, useCallback } from 'react';
import { TRACKS_DATA } from '../data/content';
import { TrackItem } from '../types';

const STORAGE_KEY = 'nakama_favorite_tracks';
const EVENT_KEY = 'nakama_favorites_updated';

export function getFavoriteTrackIds(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFavoriteTrackIds(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: ids }));
  } catch {
    // Ignore localStorage errors (e.g. private mode)
  }
}

export function toggleFavoriteTrackId(id: string): string[] {
  const current = getFavoriteTrackIds();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  saveFavoriteTrackIds(next);
  return next;
}

export function clearFavoriteTracks(): void {
  saveFavoriteTrackIds([]);
}

export function getFavoriteTracks(): TrackItem[] {
  const ids = getFavoriteTrackIds();
  return TRACKS_DATA.filter((t) => ids.includes(t.id));
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => getFavoriteTrackIds());

  useEffect(() => {
    const updateHandler = () => {
      setFavoriteIds(getFavoriteTrackIds());
    };

    window.addEventListener(EVENT_KEY, updateHandler);
    window.addEventListener('storage', updateHandler);

    return () => {
      window.removeEventListener(EVENT_KEY, updateHandler);
      window.removeEventListener('storage', updateHandler);
    };
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    toggleFavoriteTrackId(id);
  }, []);

  const isFavorite = useCallback(
    (id: string) => favoriteIds.includes(id),
    [favoriteIds]
  );

  const clearFavorites = useCallback(() => {
    clearFavoriteTracks();
  }, []);

  const favoriteTracks = TRACKS_DATA.filter((t) => favoriteIds.includes(t.id));

  return {
    favoriteIds,
    favoriteTracks,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    count: favoriteIds.length,
  };
}
