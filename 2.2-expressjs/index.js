const express = require('express');
const app = express();
const port = 3000;

const songList = [
    {
        title: 'SloMo',
        artists: ['Chanel'],
        url: 'https://open.spotify.com/embed/track/3XREkzDHsWdBL5tybyCDBH?utm_source=generator',
        playlist: 'My fav'
    },
    {
        title: 'Don\'t start now',
        artists: ['Dua Lipa'],
        url: 'https://open.spotify.com/embed/track/3PfIrDoz19wz7qK7tYeu62?utm_source=generator',
        playlist: 'hip hop'
    },
];

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  const playlists = songList.map((song)=> song.playlist).filter((value, index, array) => array.indexOf(value) === index);
  res.render('index.ejs', {songList, playlists});
})

app.get('/playlist/:name', (req, res) => {
  const playlistSongs = songList.filter((song) => song.playlist === req.params.name);
  res.render('playlist.ejs', {playlist: req.params.name, playlistSongs});
})

app.get('/song', (req, res) => {
  const playlists = songList.map((song)=> song.playlist).filter((value, index, array) => array.indexOf(value) === index);
  res.render('addSong.ejs', {playlists});
})

app.post('/song', (req, res) => {
  const artists = req.body.artists.split(",");
  const newSong = {...req.body, artists};
  songList.push(newSong);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})