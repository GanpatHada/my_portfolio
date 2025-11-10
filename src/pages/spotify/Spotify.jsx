import { useState, useEffect } from "react";
import "./Spotify.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPause, FaPlay } from "react-icons/fa";

/* 🔹 Loading Component */
const Loading = ({ num = 1 }) => (
  <div className="loading-wrapper">
    {Array.from({ length: num }).map((_, i) => (
      <div key={i} className="loading">
        <h2></h2>
        <p></p>
      </div>
    ))}
  </div>
);

/* 🔹 Currently Playing */
const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState(null);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/currently-playing");
        const data = await res.json();
        setSong(data.success && data.data ? data.data : null);
      } catch {
        toast.error("Failed to fetch currently playing song");
      } finally {
        setLoading(false);
      }
    };
    fetchNowPlaying();
  }, []);

  const pauseTrack = async () => {
    try {
      const res = await fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/pause", { method: "PUT" });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to pause track");
      toast.success("Track paused!");
    } catch (err) {
      toast.error(err.message || "Something went wrong while pausing");
    }
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (loading) return <Loading num={1} />;
  if (!song) return <p className="no-song-playing track-card">No song is playing currently 🎧</p>;

  const progress = song.progressPercent || 0;

  return (
    <section className="now-playing-section track-card">
      <img src={song.album.image} alt={song.name} className="track-image" />
      <div className="track-info">
        <h4>
          <a href={song.externalURL} target="_blank" rel="noreferrer" className="track-link">
            {song.name}
          </a>
        </h4>

        <p>
          {song.artists.map((artist, i) => (
            <span key={artist.id}>
              <a href={artist.externalURL} target="_blank" rel="noreferrer" className="artist-link">
                {artist.name}
              </a>
              {i < song.artists.length - 1 && ", "}
            </span>
          ))}
        </p>

        <p>
          <a href={song.album.externalURL} target="_blank" rel="noreferrer" className="album-link">
            {song.album.name}
          </a>
        </p>

        <div className="track-action">
          <button className={song.isPlaying ? "pause-btn" : "play-btn"} onClick={pauseTrack}>
            {song.isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <div className="progress-bar-wrapper">
            {formatTime(song.progressMs)}
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            {formatTime(song.durationMs)}
          </div>
        </div>
      </div>
    </section>
  );
};

/* 🔹 Top Tracks */
const TopTracks = () => {
  const [topTracks, setTopTracks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const res = await fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/top-tracks");
        const data = await res.json();
        if (data.success) setTopTracks(data.data);
        else toast.error(data.message || "Failed to load top tracks");
      } catch {
        toast.error("Failed to fetch top tracks");
      } finally {
        setLoading(false);
      }
    };
    fetchTopTracks();
  }, []);

  const playTrack = async (uri) => {
    try {
      const res = await fetch(
        `https://spotify-api-v57j.onrender.com/api/v1/spotify/play?uri=${encodeURIComponent(uri)}`,
        { method: "PUT" }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to play track");
      toast.success("Track is now playing!");
    } catch (err) {
      toast.error(err.message || "Something went wrong while playing");
    }
  };

  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (loading) return <Loading num={3} />;
  if (topTracks.length === 0) return <p>No top tracks found 🎵</p>;

  return (
    <div className="top-tracks">
      {topTracks.map((track) => (
        <div key={track.id} className="track-card">
          <img src={track.album.image} alt={track.album.name} className="album-art" />

          <div className="track-info">
            <h4>
              <a href={track.trackURL} target="_blank" rel="noopener noreferrer" className="track-link">
                {track.name}
              </a>
            </h4>

            <p>
              Artists:{" "}
              {track.artists.map((artist, i) => (
                <a
                  key={artist.id}
                  href={artist.externalURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-link"
                >
                  {artist.name}
                  {i < track.artists.length - 1 && ", "}
                </a>
              ))}
            </p>

            <p>
              Album:{" "}
              <a href={track.album.externalURL} target="_blank" rel="noopener noreferrer" className="album-link">
                {track.album.name}
              </a>
            </p>

            <p>Duration: {formatDuration(track.durationMs)}</p>

            <div className="track-actions">
              <button className="play-btn" onClick={() => playTrack(track.uri)}>
                <FaPlay />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* 🔹 Followed Artists */
const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const res = await fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/followed-artists");
        const data = await res.json();
        if (data.success) setArtists(data.data);
        else toast.error(data.message || "Failed to load followed artists");
      } catch {
        toast.error("Failed to fetch followed artists");
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  if (loading) return <Loading num={4} />;
  if (artists.length === 0) return <p>You’re not following any artists 🎤</p>;

  return (
    <div className="artists-list">
      {artists.map((artist) => (
        <div key={artist.id} className="artist-card">
          {artist.image && <img src={artist.image} alt={artist.name} className="artist-image" />}
          <div className="artist-info">
            <div>
              <h4>
                <a href={artist.externalURL} target="_blank" rel="noopener noreferrer" className="artist-link">
                  {artist.name}
                </a>
              </h4>
              <span className="followers">
                {artist.followers.toLocaleString()} followers | {artist.popularity}% Popularity
              </span>
            </div>
            <div className="genres">
              {artist.genres.map((gen, i) => (
                <span key={i}>{gen}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* 🔹 Main Spotify Component */
const Spotify = () => {
  const [activeTab, setActiveTab] = useState("artists");

  return (
    <div className="spotify-container">
      <NowPlaying />

      <div className="spotify-tabs">
        <button className={`tab-button ${activeTab === "artists" ? "active" : ""}`} onClick={() => setActiveTab("artists")}>
          Followed Artists
        </button>
        <button className={`tab-button ${activeTab === "tracks" ? "active" : ""}`} onClick={() => setActiveTab("tracks")}>
          Top Tracks
        </button>
      </div>

      <div className="tab-content">{activeTab === "artists" ? <Artists /> : <TopTracks />}</div>
    </div>
  );
};

export default Spotify;
