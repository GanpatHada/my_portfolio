import React, { useState, useEffect } from 'react';
import './Spotify.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Spotify = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    fetch('https://spotify-api-v57j.onrender.com/api/v1/spotify/currently-playing')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCurrentlyPlaying(data.data);
        } else {
          toast.error(data.message || "Failed to load currently playing track");
        }
      })
      .catch((err) => {
        console.error("Error fetching currently playing track:", err);
        toast.error("Failed to fetch currently playing track");
      });

    fetch('https://spotify-api-v57j.onrender.com/api/v1/spotify/top-tracks')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTopTracks(data.data);
        } else {
          toast.error(data.message || "Failed to load top tracks");
        }
      })
      .catch((err) => {
        console.error("Error fetching top tracks:", err);
        toast.error("Failed to fetch top tracks");
      });
  }, []);

  const playTrack = async (uri) => {
    try {
      const res = await fetch(`https://spotify-api-v57j.onrender.com/api/v1/spotify/play?uri=${encodeURIComponent(uri)}`, {
        method: 'PUT',
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to play track");
      toast.success(data.message || "Track is now playing!");
    } catch (error) {
      toast.info(error.message || "Something went wrong while playing the track");
    }
  };


  const pauseTrack = async () => {
    try {
      const res = await fetch(`https://spotify-api-v57j.onrender.com/api/v1/spotify/pause`, {
        method: 'PUT',
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || "Failed to pause track");
      toast.success(data.message || "Track is now paused!");
    } catch (error) {
      toast.info(error.message || "Something went wrong while pausing the track");
    }
  };

  return (
    <div className="spotify-container">
      <h2>My Spotify Activity</h2>

      <div className="currently-playing-section">
        <h3>Currently Playing</h3>
        {currentlyPlaying ? (
          <div className="track-card">
            <h4>{currentlyPlaying.name}</h4>
            <p>{currentlyPlaying.artist}</p>
            <div className="button-group">
              <button className="pause-button" onClick={pauseTrack}>
                Pause
              </button>
            </div>
          </div>
        ) : (
          <p className='loading-text'>Loading currently playing song...</p>
        )}
      </div>

      <div className="top-tracks-section">
        <h3>Top Tracks</h3>
        {topTracks.length > 0 ? (
          topTracks.map((track, index) => (
            <div key={index} className="track-card">
              <h4>{track.name}</h4>
              <p>{track.artist}</p>
              <button className="play-button" onClick={() => playTrack(track.uri)}>
                Play
              </button>
            </div>
          ))
        ) : (
          <p className='loading-text'>Loading top tracks...</p>
        )}
      </div>
    </div>
  );
};

export default Spotify;
