window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');

  // Define the options for the initial track
  const options = {
    width: '0%',
    height: '0',
    uri: 'spotify:track:6dODwocEuGzHAavXqTbwHv',
  };

  const torturedPoets = [
    "spotify:track:6dODwocEuGzHAavXqTbwHv", // Fortnight
    "spotify:track:4PdLaGZubp4lghChqp8erB", // The Tortured Poets Department
    "spotify:track:7uGYWMwRy24dm7RUDDhUlD", // My Boy Only Breaks His Favorite Toys
  ];

  let currentTrackIndex = null; // To store the current random track index
  let playbackTimeout;

  // Function to pick a random track
  const getRandomTrackIndex = () => {
    return Math.floor(Math.random() * torturedPoets.length);
  };

  // Controller callback
  const callback = (EmbedController) => {
    const playButton = document.getElementById('play-button');
    const nextButton = document.createElement('button'); // Create a Next button
    nextButton.id = "next-button";
    nextButton.innerText = "Next Random Track";
    document.querySelector(".controls").appendChild(nextButton); // Add Next button to the controls

    // Play random track logic
    const playRandomTrack = () => {
      currentTrackIndex = getRandomTrackIndex(); // Get a new random track index
      const randomTrack = torturedPoets[currentTrackIndex];
      EmbedController.loadUri(randomTrack); // Load the random track
      EmbedController.play(); // Start playing
      clearTimeout(playbackTimeout); // Clear any previous timeout
      playbackTimeout = setTimeout(() => {
        EmbedController.pause(); // Pause after 5 seconds
      }, 5000);
    };

    // Play button logic
    playButton.addEventListener('click', () => {
      playRandomTrack();
    });

    // Next button logic
    nextButton.addEventListener('click', () => {
      playRandomTrack();
    });
  };

  // Create the controller with options and callback
  IFrameAPI.createController(element, options, callback);
};
