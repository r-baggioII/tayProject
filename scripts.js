import { reputation,red,T1989,midnights,folklore,evermore,torturedPoets,lover,speakNow,Fearless,TaylorSwift,musicDatabase } from "./albums.js"; // Use relative path

let randomTrack;
let randomAlbum;

const albums = [reputation, red, speakNow, T1989, lover, torturedPoets, evermore, folklore, midnights,Fearless,TaylorSwift];

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById('embed-iframe');

  // Define the options for the initial track
  const options = {
    width: '0%',
    height: '0',
    uri: 'spotify:track:6dODwocEuGzHAavXqTbwHv',
  };
  let playbackTimeout;
  let currentController;

  // Function to pick a random value from an array
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
  };


  const playRandomTrack = () => {
    if (!currentController) return;

    // Clear any existing timeout
    if (playbackTimeout) {
      clearTimeout(playbackTimeout);
    }

    // Stop any currently playing track
    currentController.pause();

    // Pick a new random track
    randomAlbum = albums[getRandomIndex(albums)]; // Get a random album from the array of albums
    const randomAlbumArray = Object.values(randomAlbum); // Convert the object into an array
    randomTrack= randomAlbumArray[getRandomIndex(randomAlbumArray)]; // Store the selected random track

    // Load and play the new track
    currentController.loadUri(randomTrack);
    currentController.play();

    updateButtonVisibility('playing');

    // Set timeout to stop after 5 seconds
    playbackTimeout = setTimeout(() => {
      currentController.pause();
    }, 2000);
  };

  // Controller callback
  const callback = (EmbedController) => {
    currentController = EmbedController;

    updateButtonVisibility('initial');

    // Add event listener to the Next button
    const nextButton = document.getElementById('next-button');
    const playAgainButton = document.getElementById('playAgain-button');
    
    if (nextButton) {
      // Remove any existing listeners first
      nextButton.replaceWith(nextButton.cloneNode(true));
      const newNextButton = document.getElementById('next-button');
      newNextButton.addEventListener('click', playRandomTrack);      

    } else {
      console.error("Next button element not found.");
    }

    if (playAgainButton) {
      playAgainButton.replaceWith(playAgainButton.cloneNode(true));
      const newPlayAgainButton = document.getElementById('playAgain-button');
      newPlayAgainButton.addEventListener('click', () => {
        if (currentController && randomTrack) {
          currentController.loadUri(randomTrack);
          currentController.play();
          playbackTimeout = setTimeout(() => {
            currentController.pause();
          }, 2000);
          
        }
      });
    } else {
      console.error("Play Again button element not found.");
    }
    
    
  };

  // Create the controller
  IFrameAPI.createController(element, options, callback);
};



const updateButtonVisibility = (state) => {
  const playRandomButton = document.getElementById('next-button');
  const checkAnswerButton = document.getElementById('check-button');
  const playAgainButton = document.getElementById('playAgain-button');

  switch(state) {
    case 'initial':
      playRandomButton.style.display = 'inline-block';
      checkAnswerButton.style.display = 'none';
      playAgainButton.style.display = 'none'; 
      break;
    case 'playing':
      playRandomButton.style.display = 'none';
      checkAnswerButton.style.display = 'inline-block';
      playAgainButton.style.display = 'inline-block'; 
      break;
    case 'answered':
      playRandomButton.style.display = 'inline-block';
      checkAnswerButton.style.display = 'none';
      playAgainButton.style.display = 'none'; 
      break;
  }
};

const message = "Guess the song!! (Taylor Swift Edition)"; // The message to display

const displayElement = document.getElementById('message');
let index = 0;
const interval = 200; // Time in milliseconds between letters

function displayNextLetter() {
  if (index < message.length) {
    displayElement.textContent += message[index];
    index++;
    setTimeout(displayNextLetter, interval);
  } else {
    // Clear the text and restart the animation
    setTimeout(() => {
      displayElement.textContent = '';
      index = 0;
      displayNextLetter();
    }, 1000); // Pause for 1 second before restarting
  }
}
displayNextLetter();
// Populate album dropdown
const albumSelect = document.getElementById('album');
Object.keys(musicDatabase).forEach(album => {
  const option = document.createElement('option');
  option.value = album;
  option.textContent = album;
  albumSelect.appendChild(option);
});
// Function to update tracks based on selected album
function updateTracks() {
  const albumSelect = document.getElementById('album');
  const trackSelect = document.getElementById('track');
  const selectedAlbum = albumSelect.value;

  // Clear current tracks
  trackSelect.innerHTML = '';

  if (selectedAlbum) {
    // Enable track select
    trackSelect.disabled = false;

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Track';
    trackSelect.appendChild(defaultOption);

    // Add tracks for selected album
    musicDatabase[selectedAlbum].forEach(track => {
      const option = document.createElement('option');
      option.value = track;
      option.textContent = track;
      trackSelect.appendChild(option);
    });
  } else {
    // Disable track select if no album selected
    trackSelect.disabled = true;
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'First select an album';
    trackSelect.appendChild(option);
  }
}
window.updateTracks = updateTracks; //Makes the function available in the browser console


function checkAnswer() {
  const selectedTrack = document.getElementById('track').value;

  // Create a map of URIs to track names from the reputation object
  const trackMap = Object.entries(randomAlbum).reduce((map, [name, uri]) => {
    map[uri] = name;
    return map;
  }, {});

  // Get the track name corresponding to the current URI
  const currentTrackName = trackMap[randomTrack];

  if (!selectedTrack) {
    displayMessage('Please select a track before checking your answer!', 'error');
    return;
  }

  if (selectedTrack === currentTrackName) {
    updateScore();
    displayMessage('Correct! You guessed the track!', 'success');

  } else {
    displayMessage('Incorrect. Try again!', 'error');
  }
  updateButtonVisibility('answered');

}
// Update score and display
function updateScore() {
  const scoreElement = document.getElementById('score');
  let score = parseInt(scoreElement.innerText, 10) || 0;
  score += 13;
  scoreElement.innerText = score;


  const bestScoreElement = document.getElementById('Bestscore');
  let bestScore = parseInt(bestScoreElement.innerText, 10) || 0;
  if (score > bestScore) {
    bestScoreElement.innerText = score;
  }
}
// Display a message to the user
function displayMessage(message, type) {
  const messageContainer = document.getElementById('message');
  messageContainer.innerText = message;

  if (type === 'success') {
    messageContainer.style.color = '#62466B';
  } else if (type === 'error') {
    messageContainer.style.color = '#62466B';
  }
}
// Add event listeners
document.querySelector('.controls').addEventListener('click', (event) => {
  if (event.target.id === 'check-button') {
    const buttonText = event.target.innerText;

    if (buttonText === 'Play Random Song') {
      playRandomTrack();
    }else (buttonText === 'Check Answer') 
      updateButtonVisibility('playing');

  }
});

// Add event listeners
document.querySelector('.controls').addEventListener('click', (event) => {
  if (event.target.id === 'check-button') {
    if (event.target.innerText === 'Play Random Song') {
      playRandomTrack();
    } else if (event.target.innerText === 'Check Answer') {
      checkAnswer();

    }
  }
});
 

