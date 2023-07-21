import Song from "../models/song";

export default class SongRepository {
    private allSongs: Song[];
    private idCounter: number;
    
    constructor(allSongs: Song[]) {
        this.allSongs = allSongs;
        this.idCounter = allSongs.length;
    }

    create(data: any) {
        const newSong: Song = new Song(this.idCounter++, data.title, data.artistIds);
        this.allSongs.push(newSong);
    }

    read(id: number): Song {
        const song: Song | undefined = this.allSongs.find((songItem) => songItem.id === id);
        if(song === undefined) {
            throw new Error(`song with id ${id} is not found`);
        }
        return song;
    }
    
    update(id: number, data: any) {
        const foundId: number = this.allSongs.findIndex((song) => song.id === id);
        if(foundId === -1) {
            throw new Error(`song with id ${id} is not found`);
        }
        const newSong: Song = new Song(id, data.title, data.artistIds);
        this.allSongs[foundId] = newSong;
    }

    delete(id: number) {
        const foundId: number = this.allSongs.findIndex((song) => song.id === id);
        if(foundId === -1) {
            throw new Error(`song with id ${id} is not found`);
        }
        this.allSongs.filter((song) => song.id !== id);
    }

    readAll(): Song[] {
        return this.allSongs;
    }
}