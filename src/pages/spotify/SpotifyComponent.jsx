import React, { useState, useEffect } from 'react';

const SpotifyComponent = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  // Fetch the top tracks and the currently playing track from the backend
  useEffect(() => {
    // Fetch the currently playing track
    fetch('https://cactro-backend-test-3.onrender.com/spotify/currently-playing')
      .then((response) => response.json())
      .then((data) => setCurrentlyPlaying(data))
      .catch((error) => console.error("Error fetching currently playing track:", error));

    // Fetch the top tracks
    fetch('https://cactro-backend-test-3.onrender.com/spotify/top-tracks')
      .then((response) => response.json())
      .then((data) => setTopTracks(data))
      .catch((error) => console.error("Error fetching top tracks:", error));
  }, []);

  // Play the track
  const playTrack = async (uri) => {
    try {
      const response = await fetch(`https://cactro-backend-test-3.onrender.com/spotify/play?uri=${uri}`);
      const data = await response.json();

      // Check if the response contains the 'message' key
      if (data?.message) {
        if (data.message === "Premium account required") {
          alert("You need a Premium Spotify account to play this track.");
        } else {
          alert("Error: " + data.message);
        }
      } else {
        alert("The track is now playing!");
      }
    } catch (error) {
      console.error('Error playing track:', error);
      alert('Error playing track.');
    }
  };

  return (
    <div style={{ color: 'white', padding: '20px' }}>
      <h2>Spotify Component</h2>

      {/* Currently Playing Section */}
      <div style={{ marginBottom: '20px' }}>
        <h3>Currently Playing</h3>
        {currentlyPlaying ? (
          <div style={{ padding: '10px', border: '1px solid white' }}>
            <h4>{currentlyPlaying.name}</h4>
            <p>{currentlyPlaying.artist}</p>
            <p>URI: {currentlyPlaying.uri}</p>
          </div>
        ) : (
          <p>Loading currently playing song...</p>
        )}
      </div>

      {/* Top Tracks Section */}
      <div>
        <h3>Top Tracks</h3>
        {topTracks.length > 0 ? (
          topTracks.map((track, index) => (
            <div
              key={index}
              style={{
                marginBottom: '10px',
                border: '1px solid white',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              <h4>{track.name}</h4>
              <p>{track.artist}</p>
              <button
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#1DB954',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => playTrack(track.uri)}
              >
                Play
              </button>
            </div>
          ))
        ) : (
          <p>Loading top tracks...</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyComponent;
