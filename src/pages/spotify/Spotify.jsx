import { useState, useEffect } from "react";
import "./Spotify.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const NowPlaying = () => {
  const [loading, setLoading] = useState(true);
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/currently-playing")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) setSong(data.data);
        else setSong(null);
      })
      .catch(() => toast.error("Failed to fetch currently playing song"))
      .finally(() => setLoading(false));
  }, []);

  const pauseTrack = async () => {
    try {
      const res = await fetch(
        "https://spotify-api-v57j.onrender.com/api/v1/spotify/pause",
        { method: "PUT" }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to pause track");
      toast.success("Track paused!");
    } catch (err) {
      toast.error(err.message || "Something went wrong while pausing");
    }
  };

  if (loading) return <p>Loading</p>;

  if (!song) return <p>No song is playing currently 🎧</p>;

  return (
    <section className="now-playing-section">
      <div className="track-card playing-now">
        <h4>{song.name}</h4>
        <p>{song.artist}</p>
        <div className="button-group">
          <button className="pause-button" onClick={pauseTrack}>
            Pause
          </button>
        </div>
      </div>
    </section>
  );
};

const Spotify = () => {
  const [activeTab, setActiveTab] = useState("artists");
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [followedArtists, setFollowedArtists] = useState([]);
  const [loading, setLoading] = useState({
    playing: true,
    tracks: true,
    artists: true,
  });

  useEffect(() => {
    // 🎧 Fetch currently playing
    fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/currently-playing")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) setCurrentlyPlaying(data.data);
        else setCurrentlyPlaying(null);
      })
      .catch(() => toast.error("Failed to fetch currently playing song"))
      .finally(() => setLoading((p) => ({ ...p, playing: false })));

    // 🔥 Fetch top tracks
    fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/top-tracks")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setTopTracks(data.data);
        else toast.error(data.message || "Failed to load top tracks");
      })
      .catch(() => toast.error("Failed to fetch top tracks"))
      .finally(() => setLoading((p) => ({ ...p, tracks: false })));

    // 🎨 Fetch followed artists
    fetch("https://spotify-api-v57j.onrender.com/api/v1/spotify/followed-artists")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setFollowedArtists(data.data);
        else toast.error(data.message || "Failed to load followed artists");
      })
      .catch(() => toast.error("Failed to fetch followed artists"))
      .finally(() => setLoading((p) => ({ ...p, artists: false })));
  }, []);

  // ▶️ Play / Pause
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

  const pauseTrack = async () => {
    try {
      const res = await fetch(
        `https://spotify-api-v57j.onrender.com/api/v1/spotify/pause`,
        { method: "PUT" }
      );
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to pause track");
      toast.success("Track paused!");
    } catch (err) {
      toast.error(err.message || "Something went wrong while pausing");
    }
  };


  const renderTabContent = () => {
    switch (activeTab) {
      case "artists":
        if (loading.artists)
          return <p className="loading-text">Loading followed artists...</p>;
        if (followedArtists.length === 0)
          return <p className="loading-text">You’re not following any artists 🎤</p>;
        return followedArtists.map((artist, i) => (
          <div key={i} className="artist-card">
            {artist.image && (
              <img src={artist.image} alt={artist.name} className="artist-image" />
            )}
            <div className="artist-info">
              <h4>{artist.name}</h4>
              <p>Followers: {artist.followers.toLocaleString()}</p>
              <p className="genres">
                Genres: {artist.genres?.length ? artist.genres.join(", ") : "N/A"}
              </p>
            </div>
          </div>
        ));

      case "tracks":
        if (loading.tracks)
          return <p className="loading-text">Loading top tracks...</p>;
        if (topTracks.length === 0)
          return <p className="loading-text">No top tracks found</p>;
        return topTracks.slice(0, 10).map((track, i) => (
          <div key={i} className="track-card">
            <h4>{track.name}</h4>
            <p>{track.artist}</p>
            <button className="play-button" onClick={() => playTrack(track.uri)}>
              Play
            </button>
          </div>
        ));

      default:
        return null;
    }
  };

  return (
    <div className="spotify-container">
      <NowPlaying/>
      <div className="spotify-tabs">
        <button
          className={`tab-button ${activeTab === "artists" ? "active" : ""}`}
          onClick={() => setActiveTab("artists")}
        >
          Followed Artists
        </button>
        <button
          className={`tab-button ${activeTab === "tracks" ? "active" : ""}`}
          onClick={() => setActiveTab("tracks")}
        >
          Top Tracks
        </button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Spotify;
