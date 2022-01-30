// Get Elements
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const playTitle = document.getElementById("title");

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

// Check it Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Play / Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// on Load - Select First Song
loadSong(songs[3]);
