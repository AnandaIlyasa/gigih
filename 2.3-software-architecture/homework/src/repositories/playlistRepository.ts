import Playlist from "../models/playlist";

export default class PlaylistRepository {
    private allPlaylists: Playlist[];
    private idCounter: number;
    
    constructor(allPlaylists: Playlist[]) {
        this.allPlaylists = allPlaylists;
        this.idCounter = allPlaylists.length;
    }

    create(data: any) {
        const newPlaylist: Playlist = new Playlist(this.idCounter++, data.name);
        this.allPlaylists.push(newPlaylist);
    }

    read(id: number): Playlist {
        const playlist: Playlist | undefined = this.allPlaylists.find((playlistItem) => playlistItem.id === id);
        if(playlist === undefined) {
            throw new Error(`playlist with id ${id} is not found`);
        }
        return playlist;
    }
    
    update(id: number, data: any) {
        const foundId: number = this.allPlaylists.findIndex((playlist) => playlist.id === id);
        if(foundId === -1) {
            throw new Error(`playlist with id ${id} is not found`);
        }
        const newPlaylist: Playlist = new Playlist(id, data.name);
        this.allPlaylists[foundId] = newPlaylist;
    }

    delete(id: number) {
        const foundId: number = this.allPlaylists.findIndex((playlist) => playlist.id === id);
        if(foundId === -1) {
            throw new Error(`playlist with id ${id} is not found`);
        }
        this.allPlaylists.filter((playlist) => playlist.id !== id);
    }

    readAll(): Playlist[] {
        return this.allPlaylists;
    }
}