# Javascript Music Player
![alt text][javascript]

[javascript]: https://github.com/yourwpmadesimple/javascript-navigation-animation/blob/master/javascript_banner.jpg "Javascript Banner"

## Songs Array (Artist, Title, Display Name)
```json
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