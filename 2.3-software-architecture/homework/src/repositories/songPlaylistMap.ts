import SongPlaylistMap from "../models/songPlaylistMap";

export default class SongPlaylistMapRepository {
    private allSongPlaylistMaps: SongPlaylistMap[];
    private idCounter: number;
    
    constructor(allSongPlaylistMaps: SongPlaylistMap[]) {
        this.allSongPlaylistMaps = allSongPlaylistMaps;
        this.idCounter = allSongPlaylistMaps.length;
    }

    create(data: any) {
        const newSongPlaylistMap: SongPlaylistMap = new SongPlaylistMap(this.idCounter++, data.songId, data.playlistId);
        this.allSongPlaylistMaps.push(newSongPlaylistMap);
    }

    read(id: number): SongPlaylistMap {
        const songPlaylistMap: SongPlaylistMap | undefined = this.allSongPlaylistMaps.find((songPlaylistMapItem) => songPlaylistMapItem.id === id);
        if(songPlaylistMap === undefined) {
            throw new Error(`songPlaylistMap with id ${id} is not found`);
        }
        return songPlaylistMap;
    }
    
    update(id: number, data: any) {
        const foundId: number = this.allSongPlaylistMaps.findIndex((songPlaylistMap) => songPlaylistMap.id === id);
        if(foundId === -1) {
            throw new Error(`songPlaylistMap with id ${id} is not found`);
        }
        const newSongPlaylistMap: SongPlaylistMap = new SongPlaylistMap(id, data.songId, data.playlistId);
        this.allSongPlaylistMaps[foundId] = newSongPlaylistMap;
    }

    delete(id: number) {
        const foundId: number = this.allSongPlaylistMaps.findIndex((songPlaylistMap) => songPlaylistMap.id === id);
        if(foundId === -1) {
            throw new Error(`songPlaylistMap with id ${id} is not found`);
        }
        this.allSongPlaylistMaps.filter((songPlaylistMap) => songPlaylistMap.id !== id);
    }

    readAll(): SongPlaylistMap[] {
        return this.allSongPlaylistMaps;
    }
}