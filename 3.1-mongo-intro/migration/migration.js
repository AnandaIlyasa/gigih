import mongoose from "mongoose";
import Artist from "../models/artist.js";
import PopularSong from "../models/popularSong.js";
import Song from "../models/song.js";
import SongArtistMap from "../models/songArtistMap.js";
import artistSchema from "../schemas/artist.js";
import popularSongSchema from "../schemas/popularSong.js";
import songSchema from "../schemas/song.js";
import songArtistSchema from "../schemas/songArtistMap.js";

export default async function migrate() {
    const songs = await insertSongs();
    const artists = await insertArtists();
    await insertSongArtistMap(songs, artists);
    await insertPopularSongs(songs);
}

async function insertSongs() {
    const songModel = mongoose.model('Song', songSchema);
    const songs = await songModel.insertMany([
        new Song("song 1", "album 1"),
        new Song("song 2", "album 2"),
        new Song("song 3", "album 3"),
        new Song("song 4", "album 4"),
        new Song("song 5", "album 5"),
        new Song("song 6", "album 6"),
        new Song("song 7", "album 7"),
        new Song("song 8", "album 8"),
        new Song("song 9", "album 9"),
        new Song("song 10", "album 10")
    ]);

    return songs;
}

async function insertArtists() {
    const artistModel = mongoose.model('Artist', artistSchema);
    const dateNow = new Date();
    const genres = [
        "Genre 1", "Genre 2", "Genre 3","Genre 4", "Genre 5",
        "Genre 6", "Genre 7", "Genre 8", "Genre 9", "Genre 10"
    ]
    const artists = await artistModel.insertMany([
        new Artist("Artist 1", dateNow, genres[0]),
        new Artist("Artist 2", dateNow, genres[1]),
        new Artist("Artist 3", dateNow, genres[2]),
        new Artist("Artist 4", dateNow, genres[3]),
        new Artist("Artist 5", dateNow, genres[4]),
        new Artist("Artist 6", dateNow, genres[5]),
        new Artist("Artist 7", dateNow, genres[6]),
        new Artist("Artist 8", dateNow, genres[7]),
        new Artist("Artist 9", dateNow, genres[8]),
        new Artist("Artist 10", dateNow, genres[9])
    ]);

    return artists;
}

async function insertSongArtistMap(songs, artists) {
    const songArtistMapModel = mongoose.model('SongArtistMap', songArtistSchema);
    songArtistMapModel.insertMany([
        new SongArtistMap(songs[0], artists[0]),
        new SongArtistMap(songs[1], artists[1]),
        new SongArtistMap(songs[2], artists[2]),
        new SongArtistMap(songs[3], artists[3]),
        new SongArtistMap(songs[4], artists[4]),
        new SongArtistMap(songs[5], artists[5]),
        new SongArtistMap(songs[6], artists[6]),
        new SongArtistMap(songs[7], artists[7]),
        new SongArtistMap(songs[8], artists[8]),
        new SongArtistMap(songs[9], artists[9]),
    ])
}

async function insertPopularSongs(songs) {
    const popularSongModel = mongoose.model('PopularSong', popularSongSchema);
    popularSongModel.insertMany([
        new PopularSong(songs[0], 10, 2000),
        new PopularSong(songs[1], 11, 2001),
        new PopularSong(songs[2], 12, 2002),
        new PopularSong(songs[3], 13, 2003),
        new PopularSong(songs[4], 14, 2004),
        new PopularSong(songs[5], 15, 2005),
        new PopularSong(songs[6], 16, 2006),
        new PopularSong(songs[7], 17, 2007),
        new PopularSong(songs[8], 18, 2008),
        new PopularSong(songs[9], 19, 2009)
    ])
}