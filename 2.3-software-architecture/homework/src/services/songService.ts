import Song from "../models/song";
import SongPlaylistMapRepository from "../repositories/songPlaylistMap";
import SongRepository from "../repositories/songRepository";

export default class SongService {
    songRepository: SongRepository;
    songPlaylistMapRepository: SongPlaylistMapRepository;
    
    constructor(songRepository: SongRepository, songPlaylistMapRepository: SongPlaylistMapRepository) {
        this.songRepository = songRepository;
        this.songPlaylistMapRepository = songPlaylistMapRepository;
    }

    getSongById(id: number): Song {
        return this.songRepository.read(id);
    }

    getAllSong(): Song[] {
        return this.songRepository.readAll();
    }

    getAllSongOrderByPlayCountDesc() {
        try {
            const allSongPlaylistMaps = this.songPlaylistMapRepository.readAll();
            const allSongs = this.songRepository.readAll();
            const sortedSongs = allSongs.map((song) => {
                    const totalPlayCount = allSongPlaylistMaps
                        .filter((songPlaylistMap) => songPlaylistMap.songId === song.id)
                        .reduce((currPlayCountSum, currPlaylistMap) => currPlayCountSum + currPlaylistMap.playCount, 0);
                        return {totalPlayCount, ...song};
                }).sort((a, b) => b.totalPlayCount - a.totalPlayCount);
            return sortedSongs;
        } catch (error) {
            throw new Error(`cannot get all song ordered by total play: ` + error);
        }
    }
}