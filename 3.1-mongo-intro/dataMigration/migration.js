import mongoose from "mongoose";
import artistSchema from "../schema/artist.js";
import popularSongSchema from "../schema/popularSong.js";
import songSchema from "../schema/song.js";
import songArtistSchema from "../schema/songArtistMap.js";

export default async function migrate() {
    const songs = await insertSongs();
    const artists = await insertArtists();
    await insertSongArtistMap(songs, artists);
    await insertPopularSongs(songs);
}

async function insertSongs() {
    const songModel = mongoose.model('Song', songSchema);
    const songs = await songModel.insertMany([
        {
            "title": "song 1",
            "album": "album 1"
        },
        {
            "title": "song 2",
            "album": "album 2"
        },
        {
            "title": "song 3",
            "album": "album 3"
        },
        {
            "title": "song 4",
            "album": "album 4"
        },
        {
            "title": "song 5",
            "album": "album 5"
        },
        {
            "title": "song 6",
            "album": "album 6"
        },
        {
            "title": "song 7",
            "album": "album 7"
        },
        {
            "title": "song 8",
            "album": "album 8"
        },
        {
            "title": "song 9",
            "album": "album 9"
        },
        {
            "title": "song 10",
            "album": "album 10"
        }
    ]);

    return songs;
}

async function insertArtists() {
    const artistModel = mongoose.model('Artist', artistSchema);
    const artists = await artistModel.insertMany([
        {
            "name": "Artist 1",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 2",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 3",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 4",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 5",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 6",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 7",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 8",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 9",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        },
        {
            "name": "Artist 10",
            "dateOfBirth": new Date(),
            "genres": [
                "pop",
                "hip hop"
            ]
        }
    ]);

    return artists;
}

async function insertSongArtistMap(songs, artists) {
    const songArtistMapModel = mongoose.model('SongArtistMap', songArtistSchema);
    songArtistMapModel.insertMany([
        {
            "songId": songs[0],
            "artistId": artists[0]
        },
        {
            "songId": songs[1],
            "artistId": artists[1]
        },
        {
            "songId": songs[2],
            "artistId": artists[2]
        },
        {
            "songId": songs[3],
            "artistId": artists[3]
        },
        {
            "songId": songs[4],
            "artistId": artists[4]
        },
        {
            "songId": songs[5],
            "artistId": artists[5]
        },
        {
            "songId": songs[6],
            "artistId": artists[6]
        },
        {
            "songId": songs[7],
            "artistId": artists[7]
        },
        {
            "songId": songs[8],
            "artistId": artists[8]
        },
        {
            "songId": songs[9],
            "artistId": artists[9]
        },
    ])
}

async function insertPopularSongs(songs) {
    const popularSongModel = mongoose.model('PopularSong', popularSongSchema);
    popularSongModel.insertMany([
        {
            "songId": songs[0],
            "playCount": 6,
            "period": 2000
        },
        {
            "songId": songs[1],
            "playCount": 9,
            "period": 2001
        },
        {
            "songId": songs[2],
            "playCount": 4,
            "period": 2002
        },
        {
            "songId": songs[3],
            "playCount": 19,
            "period": 2003
        },
        {
            "songId": songs[4],
            "playCount": 29,
            "period": 2004
        },
        {
            "songId": songs[5],
            "playCount": 6,
            "period": 2005
        },
        {
            "songId": songs[6],
            "playCount": 7,
            "period": 2006
        },
        {
            "songId": songs[7],
            "playCount": 7,
            "period": 2007
        },
        {
            "songId": songs[8],
            "playCount": 8,
            "period": 2008
        },
        {
            "songId": songs[9],
            "playCount": 23,
            "period": 2009
        },
    ])
}