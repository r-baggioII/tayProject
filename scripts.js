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
      "spotify:track:1kbEbBdEgQdQeLXCJh28pJ", // Down Bad
      "spotify:track:7wAkQFShJ27V8362MqevQr", // So Long London
      "spotify:track:4QMgEffJQuKtjCNvqfRZ0m", // But Daddy I Love Him
      "spotify:track:7IWcDWOfiooH5hRs9XOVYz", // Fresh Out The Slammer
      "spotify:track:5ExOm0dh4NyRyAdSAO9hyM", // Florida!!!
      "spotify:track:799KrpEbhZp0MHeiA8YK9P", // Guilty as Sin?
      "spotify:track:2d8UxVNhJinc8uat9PoM9y", // Who's Afraid of Little Old Me
      "spotify:track:5chnRTB9qMK3W1M41SnU9s", // I Can Fix Him (No Really I Can)
      "spotify:track:3YkNIrAvbKNrrwwEd7NVLl", // LOML
      "spotify:track:2fPvQfGQEZOKtJ9qXeL4x8", // I Can Do It With a Broken Heart
      "spotify:track:1xtw1krCR6Dw2KwkXw5z63", // The Smallest Man Who Ever Lived
      "spotify:track:1tuNqJOtRQVHvONR8Lg3MZ", // The Alchemy
      "spotify:track:4d9PtIEVij9jW5OaLinH66", // Clara Bow
      "spotify:track:62E2nR0od0M5HYxuYLaDz7", // The Black Dog
      "spotify:track:1kcwpPDQnqEqmezzXdJTCP", // ImGonnaGetYouBack
      "spotify:track:4EF6IyONolQy0bIQXm2EmX", // The Albatross
      "spotify:track:1rmEsOezwf2lmIZTMAO5Ag", // Chloe or Sam or Sophia or Marcus
      "spotify:track:5Bedn0svl0ZD7RGmJkmKKw", // How Did It End?
      "spotify:track:7Mts0OfPorF4iwOomvfqn1", // So High School
      "spotify:track:3hlGuz3loYoLfI3bpwieWq", // I Hate It Here
      "spotify:track:7ogK4lJDVDMU6A6vYR5rvD", // Thank You Aimee
      "spotify:track:1Zai5UJ2di3qEuR2HeT2s8", // I Look in People's Windows
      "spotify:track:18WFFUIsewmA8g31KAeo3e", // The Prophecy
      "spotify:track:0g4fMVo4JjwnIpTfFfLdxS", // Cassandra
      "spotify:track:3zMDGj4D8ogaYgAIZPeU7S", // Peter
      "spotify:track:2913xXOVAIDAqxzV2g4VcU", // The Bolter
      "spotify:track:2CnjDMdpRjlWv04Xk3s6MW", // Robin
      "spotify:track:1DTRUYVd8rYpla9hhVVwjo", // The Manuscript
    ];

    const evermore = [
      "spotify:track:2gVhfX2Gy1T9kDuS9azrF7", //willow
      "spotify:track:1gcyHQpBQ1lfXGdhZmWrHP", //champagne problems
      "spotify:track:3Dby3p1m6IOZn2gIIqECgK", //gold rush
      "spotify:track:6sQckd3Z8NPxVVKUnavY1F", //‘tis the damn season
      "spotify:track:6lCvK2AR2uOKkVFCVlAzzm", //tolerate it
      "spotify:track:6uwfVkaOM1mcMkFmSn35ix", //no body, no crime
      "spotify:track:55Vf4bimc1Rtfg0PAQRAo2", //happiness
      "spotify:track:/66tOfHVH3aUrscg8vExRV4",//dorothea
      "spotify:track:2awNGIJHodfLZSClB3PYhz", //coney island
      "spotify:track:43Ykum9T72UOPhBN31grpN", //ivy
      "spotify:track:/52OkpDsU6MmPx1AwGOb6Ap", //cowboy like me
      "spotify:track:5VYWxXUpxuxEmCqMLDqICo", //long story short
      "spotify:track:5uICWmZTLkpEVbK22PBP6e", //marjorie
      "spotify:track:6a8aUhYbaQBUI8PcJ5ZmQ", //closure
      "spotify:track:6Wlq9rqkxrqj5Kls4Kw14H", //evermore 
      "spotify:track:3zwMVvkBe2qIKDObWgXw4N", //right where you left me
      "spotify:track:1kdWw77ZpYOkhxeuhzU1j6" //it’s time to go 
      
    ]
    const folklore = [
      "spotify:track:4pfrrhvplbJZAIsfosGWQP", //the 1
      "spotify:track:0KRYCBwIpWYFNrXOmXbyUh", //cardigan
      "spotify:track:2olxzvoFI9IpxqFeUv7WOX", //the last great american dynasty
      "spotify:track:5S4aYQAJOwJMAamANWlICO", //exile
      "spotify:track:5P2bHCDM2tsgIaYWsZMhu5", //my tears ricochet
      "spotify:track:2I8YAEA1VmCuP1wkJHMpTw", //mirrorball
      "spotify:track:76mOLcXOjOEhyY4mMF1l3r", //seven
      "spotify:track:6nK2pIKFcRc5frrZKHgsi", //august
      "spotify:track:7cm50Lw03k6VvRauJtkyTj", //this is me trying
      "spotify:track:6DrLROM5MG9bxWHeEG5elq", //illicit affairs
      "spotify:track:2ehRU518I0hYqMGQnk4lDY", //invisible string
      "spotify:track:0RP1kqoSPkVXsKiQNhMKzV", //mad woman
      "spotify:track:1EXa37LpSvi3OQ9UYQ28rD", //epiphany
      "spotify:track:3IhtE4fkytdrtEfV34UzkD", //betty
      "spotify:track:6JlI8Ay77m4nJvZTHvfT1J", //peace
      "spotify:track:0YeDG5HnKnG7jpArkzsSPa", //hoax
      "spotify:track:0eFQWVz0qIxDOvhLpZ40P7" //the lakes

    ]
    const red = [
      "spotify:track:6lzc0Al0zfZOIFsFvBS1ki", //State of Grace
      "spotify:track:4OAuvHryIVv4kMDNSLuPt6", //Red
      "spotify:track:3S7HNKPakdwNEBFIVTL6d", //Treacherous
      "spotify:track:6AtZLIzUINvExIUy4QhdjP",//I Knew You Were Trouble
      "spotify:track:3nsfB1vus2qaloUdcBZvDu",//All Too Well
      "spotify:track:3yII7UwgLF6K5zW3xad3MP", //22
      "spotify:track:2r9CbjYgFhtAmcFv1cSquB", //I Almost Do
      "spotify:track:5YqltLsjdqFtvqE7Nrysvs",//We Are Never Ever Getting Back Together
      "spotify:track:7eQj6r5PIdYKEIZjucBMcq",//Stay Stay Stay
      "spotify:track:7eQj6r5PIdYKEIZjucBMcq", //The last time 
      "spotify:track:0y6kdSRCVQhSsHSpWvTUm7", //Holy Ground
      "spotify:track:7J4b3LVCIGO4CMBDFLPoP6", //Sad Beautiful Tragic
      "spotify:track:73qMN9bXy7MSPwwGfH3wQr", //The Lucky One
      "spotify:track:4e5ayHsOLJNLTGfjau2mEw",//Everything Has Changed
      "spotify:track:7qEUFOVcxRI19tbT68JcYK", //Starlight
      "spotify:track:7A2cNLRT0YJc1yjxHlKihs", //Begin Again
      "spotify:track:05GsNucq8Bngd9fnd4fRa0", //The Moment I Knew
      "spotify:track:0NRHj8hDwwmSPaA41o379r", //Come Back... Be Here
      "spotify:track:4pNApnaUWAL2J4KO2eqokq", //Girl at Home
      "spotify:track:0DMVrlMUn01M0IcpDbwgu7", //Treacherous 
      "spotify:track:5jAIouBES8LWMiriuNq170", //State of Grace (Acustic version)
      "spotify:track:7nWui6jiMM2m9qFmET1Mtj", //Ronan 
      "spotify:track:4OmFmE0fzcMG6g0Y8p4eSD", //Better Man 
      "spotify:track:01K4zKU104LyJ8gMb7227B", //Nothing New
      "spotify:track:/0v4z1tuZvn6LGknom9Qx7d", //Babe
      "spotify:track:3z6XUommYDWPHeFhmhhT6j", //Message in a Bottle
      "spotify:track:4CkgMiMqZ5JzW9iYXSTMTL", //I Bet You Think About Me 
      "spotify:track:3oGVx9RBmiYGv5ZCecWLkx",  //Forever Winter
      "spotify:track:4IQkfUsrwXol38VV3U7t7T", //Run
      "spotify:track:6pYNq0ZwpPVazKzsqpf0G8", //The Very First Night
      "spotify:track:5enxwA8aAbwZbf5qCHORXi"//All Too Well (10 minute version)
    ]

    const reputation = [
      "spotify:track:2yLa0QULdQr0qAIvVwN6B5", //Ready For It
      "spotify:track:2x0WlnmfG39ZuDmstl9xfX", //End Game
      "spotify:track:4svZDCRz4cJoneBpjpx8DJ", //I Did Something Bad
      "spotify:track:1R0a2iXumgCiFb7HEZ7gUE", //Don't Blame Me
      "spotify:track:6NFyWDv5CjfwuzoCkw47Xf",//Delicate
      "spotify:track:1P17dC1amhFzptugyAO7Il", //Look What You Made Me Do
      "spotify:track:5PxFv9yJEg9dxvbZggykro",//So It Goes
      "spotify:track:1ZY1PqizIl78geGM4xWlEA",//Gorgeous
      "spotify:track:0VE4kBnHJUgtMf0dy6DRmW",//Getaway Car
      "spotify:track:7HuBDWi18s4aJM8UFnNheH",//King of My Heart
      "spotify:track:7I7JbDv63ZJJsSi24DyJrz",//Dancing With Our Hands Tied
      "spotify:track:6oVxXO5oQ4pTpO8RSnkzvv",//Dress
      "spotify:track:07NxDD1iKCHbAldceD7QLP",//This Is Why We Can't Have Nice Things
      "spotify:track:1GwMQaZz6Au3QLDbjbMdme",//Call It What You Want
      "spotify:track:7F5oktn5YOsR9eR5YsFtqb",//New Year's Day
    ]  

    const speakNow =[
      "spotify:track:7G0gBu6nLdhFDPRLc0HdDG", //Mine
      "spotify:track:3MytWN8L7shNYzGl4tAKRp", //Sparks Fly
      "spotify:track:79uDOz0zuuWS7HWxzMmTa2", //Back to December
      "spotify:track:5xXqyjLicvEpch72qEryFT", //Speak Now
      "spotify:track:1zU8j1x3yi9xalMF96pzKp", //Dear John
      "spotify:track:30Y4CV7A6YqtQtTTo7Ue4j", //Mean
      "spotify:track:6dTA6y0C2ReQklntzZl8l3", //The Story of Us
      "spotify:track:2EFZ9emtKWEglWUQGEQ3P9", //Never Grow Up
      "spotify:track:3sW3oSbzsfecv9XoUdGs7h", //Enchanted
      "spotify:track:0NwGC0v03ysCYINtg6ns58", //Better Than Revenge 
      "spotify:track:12nBPF4Rh4XLFJV0YLN7uj",//Innocent
      "spotify:track:4tMzIAFTFdqGBQLdfbPces",//Haunted
      "spotify:track:59KOoHFcw5XfICnO57holu", //Last Kiss
      "spotify:track:4hqJ4bSlYJOXb6Z4SRmzxs", //Long Live
      "spotify:track:3yNJkriPzWjkkDAWHIAVUq",//Ours
      "spotify:track:4evLyY5Ue1Wesc61t2KXAU", //superman 
      "spotify:track:4e3ZNTAV6PCrdYMUrUlMpQ", //electric touch 
      "spotify:track:0zo975x58DlXbZllWvfYhg", //when emma falls in love 
      "spotify:track:5kHMfzgLZP95O9NBy0ku4v", // i can see you 
      "spotify:track:4ABYxlb92WBIjHu7TIKmml", // castles crumble 
      "spotify:track:4s8BIKx4Zh6ryAEz8RTlaU", // foolish one 
      "spotify:track:1HCdems7PQZRj42QDWLA0A", //timeless 

    ]
    const T1989 = [
      "spotify:track:1hR8BSuEqPCCZfv93zzzz9", //Welcome to New York
      "spotify:track:45wMBGri1PORPjM9PwFfrS",//Blank Space
      "spotify:track:1hjRhYpWyqDpPahmSlUTlc",//Style
      "spotify:track:045ZeOHPIzhxxsm8bq5kyE",//Out of the Woods
      "spotify:track:6GXgd1BPD9bUpqw5AntGV5", //All You Had to Do Was Stay
      "spotify:track:3pv7Q5v2dpdefwdWIvE7yH",//Shake It Off
      "spotify:track:43y1WpBdnEy5TR9aZoSQL9",//I Wish You Would
      "spotify:track:64FzgoLZ3oXu2SriZblHic",//Bad Blood
      "spotify:track:1K39ty6o1sHwwlZwO6a7wK",//Wildest Dreams
      "spotify:track:75W3SngKzTuoQ94uLf3y82",//How You Get
      "spotify:track:5QVVjX0ZItqlVpEuVCM9Yg",//This Love
      "spotify:track:2f0GI2ZLUtbGqFx8t2Gk6A", //I Know Places
      "spotify:track:2ByBBvpR9b7IynvRmnG7kG", //Clean
      "spotify:track:2ve0kuaWUCt4Zx8x4bf1MR",//Wonderland
      "spotify:track:4UwqOWDpdeIDVQDuKT6iza",//You Are In Love
      "spotify:track:2vPMoMDXxu9uX1igWZmXSG",//New Romantics
      "spotify:track:71BqAINEnezjQfxE4VuJfq",//Wonderland
      "spotify:track:4NioO5R9sHEZh4cGzMHyNt",//You Are In Love
      "spotify:track:5KD6AEm19QnMbfWpfoOHMl",//New Romantics
      "spotify:track:6T0sEnqjmHISIKwFETeeiP",//Slut 
      "spotify:track:1Iq8oo9XkmmvCQiGOfORiz", //Say dont go 
      "spotify:track:5KD6AEm19QnMbfWpfoOHMl", //Now that we dont talk 
      "spotify:track:6T0sEnqjmHISIKwFETeeiP", //Suburban legends 
      "spotify:track:1Iq8oo9XkmmvCQiGOfORiz", // is it over now? 
    ] 



    // Array of albums
    const albums = [torturedPoets, evermore, folklore, red, reputation, speakNow, T1989];

    let playbackTimeout;
    let currentController;
  
    // Function to pick a random album
    const getRandomAlbumIndex = () => {
      return Math.floor(Math.random() * albums.length);
    };
  
    // Function to pick a random track from a specific album
    const getRandomTrackFromAlbum = (albumIndex) => {
      return Math.floor(Math.random() * albums[albumIndex].length);
    };
  
    // Controller callback
    const callback = (EmbedController) => {
      currentController = EmbedController;
  
      // Function to play a random track
      const playRandomTrack = () => {
        // Clear any existing timeout
        if (playbackTimeout) {
          clearTimeout(playbackTimeout);
        }
  
        // Stop any currently playing track
        currentController.pause();
  
        // Get random album and track
        const currentAlbumIndex = getRandomAlbumIndex();
        const currentTrackIndex = getRandomTrackFromAlbum(currentAlbumIndex);
        const randomTrack = albums[currentAlbumIndex][currentTrackIndex];
  
        // Load and play the new track
        currentController.loadUri(randomTrack);
        currentController.play();
  
        // Set timeout to stop after 5 seconds
        playbackTimeout = setTimeout(() => {
          currentController.pause();
        }, 5000);
      };
  
      // Ensure the Next button exists and add event listener
      const nextButton = document.getElementById('next-button');
      if (nextButton) {
        nextButton.addEventListener('click', playRandomTrack);
      } else {
        console.error("Next button element not found.");
      }
    };
  
    // Create the controller
    IFrameAPI.createController(element, options, callback);
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

// Start the animation
displayNextLetter();

//Albums and tracks selection 

// Sample music database
const musicDatabase = {
  "Taylor Swift": [
    "Tim McGraw",
    "Picture to Burn",
    "Teardrops on My Guitar",
    "A Place in This World",
    "Cold as You",
    "The Outside",
    "Tied Together with a Smile",
    "Stay Beautiful",
    "Should've Said No",
    "Mary's Song (Oh My My My)",
    "Our Song",
    "I'm Only Me When I'm with You",
    "Invisible",
    "A Perfectly Good Heart",
    "Teardrops on My Guitar"
  ],
  "Fearless (Taylor's Version)": [
    "Fifteen",
    "Love Story",
    "Hey Stephen",
    "White Horse",
    "You Belong with Me",
    "Breathe",
    "Tell Me Why",
    "You're Not Sorry",
    "The Way I Loved You",
    "Forever & Always",
    "The Best Day",
    "Change",
    "Jump Then Fall",
    "Untouchable",
    "Forever & Always (Piano Version)",
    "Come In with the Rain",
    "Superstar",
    "The Other Side of the Door",
    "Today Was a Fairytale",
    "You All Over Me",
    "Mr. Perfectly Fine",
    "We Were Happy",
    "That's When",
    "Don't You",
    "Bye Bye Baby"
  ],
  "Speak Now (Taylor's Version)": [
    "Mine",
    "Sparks Fly",
    "Back to December",
    "Speak Now",
    "Dear John",
    "Mean",
    "The Story of Us",
    "Never Grow Up",
    "Enchanted",
    "Better than Revenge",
    "Innocent",
    "Haunted",
    "Last Kiss",
    "Long Live",
    "Ours",
    "Superman",
    "Electric Touch (featuring Fall Out Boy)",
    "When Emma Falls in Love",
    "I Can See You",
    "Castles Crumbling (featuring Hayley Williams)",
    "Foolish One",
    "Timeless"
  ],
  "Red (Taylor's Version)": [
    "State of Grace",
    "Red",
    "Treacherous",
    "I Knew You Were Trouble",
    "All Too Well",
    "22",
    "I Almost Do",
    "We Are Never Ever Getting Back Together",
    "Stay Stay Stay",
    "The Last Time (featuring Gary Lightbody of Snow Patrol)",
    "Holy Ground",
    "Sad Beautiful Tragic",
    "The Lucky One",
    "Everything Has Changed (featuring Ed Sheeran)",
    "Starlight",
    "Begin Again",
    "The Moment I Knew",
    "Come Back... Be Here",
    "Girl at Home",
    "State of Grace (acoustic version)",
    "Ronan",
    "Better Man",
    "Nothing New (featuring Phoebe Bridgers)",
    "Babe",
    "Message in a Bottle",
    "I Bet You Think About Me (featuring Chris Stapleton)",
    "Forever Winter",
    "Run (featuring Ed Sheeran)",
    "The Very First Night",
    "All Too Well (10 Minute Version)"
  ],
  "1989 (Taylor's Version)": [
    "Welcome to New York",
    "Blank Space",
    "Style",
    "Out of the Woods",
    "All You Had to Do Was Stay",
    "Shake It Off",
    "I Wish You Would",
    "Bad Blood",
    "Wildest Dreams",
    "How You Get the Girl",
    "This Love",
    "I Know Places",
    "Clean",
    "Wonderland",
    "You Are in Love",
    "New Romantics",
    "Slut!",
    "Say Don't Go",
    "Now That We Don't Talk"
  ],
"Reputation":[
  "…Ready for It?",
  "End Game", 
  "I Did Something Bad",	
  "Don't Blame Me",	
  "Delicate",	
  "Look What You Made Me Do",	
  "So It Goes...",	
  "Gorgeous",	
  "Getaway Car",	
  "King of My Heart",	
  "Dancing with Our Hands Tied",
  "Dress",	
  "This Is Why We Can't Have Nice Things"	, 
  "Call It What You Want"	,
  "New Year's Day"	,
  ],
}

//put the names with comas as elements of the array, delete any other remaininf text that isnt bewteen quotation marks

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
  
