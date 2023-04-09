import dotenv from "dotenv";
import { Environment } from "../helpers/enviroment";

dotenv.config();

export const SKILL_KEYS: string[] = [
  "javascript",
  "typescript",
  "react",
  "python",
  "css",
  "html",
  "git",
  "node",
  'java'

];

export const SPOTIFY_AUTHORIZATION_SCOPES = [
  "user-read-playback-position",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-top-read",
];

export const IMAGE_RESPONSE_HEADERS: [string, string] = [
  "Content-Type",
  "image/svg+xml",
];

/**
 * Tells the user when to update the image.
 */
export const CACHE_CONTROL_RESPONSE_HEADERS: [string, string] = [
  "Cache-Control",
  "s-maxage=1, stale-while-revalidate",
];

/**
 * Spotify authorization endpoint.
 */
export const SPOTIFY_AUTHORIZATION_URL = new URL(
  "https://accounts.spotify.com/api/token"
);

/**
 * Spotify currently playing endpoint.
 */
export const SPOTIFY_CURRENT_PLAYING_URL =
  "https://api.spotify.com/v1/me/player/currently-playing";

/**
 * Spotify top played endpoint.
 */
export const SPOTIFY_GET_TOP_PLAYED_URL =
  "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=";

/**
 * Spotify audio features endpoint.
 */
export const SPOTIFY_GET_TRACK_AUDIO_FEATURES_URL =
  "https://api.spotify.com/v1/audio-features";

/**
 * Spotify get track endpoint.
 */
export const SPOTIFY_GET_TRACK_URL = "https://api.spotify.com/v1/tracks";

/**
 * Spotify recently played endpoint.
 */
export const SPOTIFY_RECENTLY_PLAYED_URL =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

/**
 * Spotify authorization header.
 */
export const SPOTIFY_AUTHORIZATION = `Basic ${Buffer.from(
  `${Environment.getSpotifyClientId()}:${Environment.getSpotifyClientSecret()}`
).toString("base64")}`;
