export default class SongPlaylistMap {
    id: number;
    songId: number;
    playlistId: number;
    playCount: number;
    constructor(id: number, songId: number, playlistId: number, playCount: number = 0) {
        this.id = id;
        this.songId = songId;
        this.playlistId = playlistId;
        this.playCount = playCount;
    }
}