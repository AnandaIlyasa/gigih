import Artist from "../models/artist";
import Playlist from "../models/playlist";
import Song from "../models/song";
import SongPlaylistMap from "../models/songPlaylistMap";

export default class DataStorage {
    artists: Artist[] = [
        new Artist(0, "Artist 1"),
        new Artist(1, "Artist 2"),
    ]

    songs: Song[] = [
        new Song(0, "Song 1", [0]),
        new Song(1, "Song 2", [0, 1]),
    ]

    playlists: Playlist[] = [
        new Playlist(0, "Playlist 1"),
        new Playlist(1, "Playlist 2"),
    ]

    songPlaylistMaps: SongPlaylistMap[] = [
        new SongPlaylistMap(0, this.songs[0].id, this.playlists[0].id, 10),
        new SongPlaylistMap(1, this.songs[1].id, this.playlists[1].id, 11),
    ]
}