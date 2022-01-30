# Javascript Music Player
![alt text][javascript]

[javascript]: https://github.com/yourwpmadesimple/javascript-navigation-animation/blob/master/javascript_banner.jpg "Javascript Banner"

## Songs Array (Artist, Title, Display Name)
```javascript
// Music
const songs = [
  {
    name: "wayne-1",
    displayName: "Electric Chill Machine",
    artist: "Wayne Development",
  },
  {
    name: "wayne-2",
    displayName: "Seven Nation Army (Remix)",
    artist: "Wayne Development",
  },
  {
    name: "wayne-3",
    displayName: "Goodnight, Disco Queen",
    artist: "Wayne Development",
  },
  {
    name: "metric-1",
    displayName: "Front Row (Remix)",
    artist: "Metric/Wayne Development",
  },
];
```

## Update The DOM
```javascript
// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}
```

## Next / Previous Functionality and Event Listeners
```javascript
// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// on Load - Select First Song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
```

## Setting up Progress Bar
```javascript
// Get Element Additions
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
// Update Progress Bar & Time
function updateProgressBar(e) {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;
    // Update Progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}
```