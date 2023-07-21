import Playlist from "../models/playlist";
import Song from "../models/song";
import PlaylistRepository from "../repositories/playlistRepository";
import SongPlaylistMapRepository from "../repositories/songPlaylistMap";
import SongRepository from "../repositories/songRepository";

export default class PlaylistService {
    playlistRepository: PlaylistRepository;
    songRepository: SongRepository;
    songPlaylistMapRepository: SongPlaylistMapRepository;

    constructor(playlistRepository: PlaylistRepository, songRepository: SongRepository, songPlaylistMapRepository: SongPlaylistMapRepository) {
        this.playlistRepository = playlistRepository;
        this.songRepository = songRepository;
        this.songPlaylistMapRepository = songPlaylistMapRepository;
    }

    getAllPlaylist(): Playlist[] {
        return this.playlistRepository.readAll();
    }

    getPlaylistById(id: number): Playlist {
        return this.playlistRepository.read(id);
    }

    addSongToPlaylist(playlistId: number, songId: number) {
        try {
            const foundSong = this.songRepository.read(songId);
            const foundPlaylist = this.playlistRepository.read(playlistId);
            this.songPlaylistMapRepository.create({songId: foundSong.id, playlistId: foundPlaylist});
        } catch (error) {
            throw new Error(`cannot add song with id ${songId} to playlist with id ${playlistId}: ` + error);
        }
    }

    playSongFromPlaylist(playlistId: number, songId: number) {
        try {
            const allSongPlaylistMaps = this.songPlaylistMapRepository.readAll();
            const foundSongPlaylistMap = allSongPlaylistMaps.find((item) => item.playlistId === playlistId && item.songId == songId);
            if(foundSongPlaylistMap === undefined) {
                throw new Error(`song with id ${songId} in playlist with id ${playlistId} is not found`);
            }
            foundSongPlaylistMap.playCount++;
            this.songPlaylistMapRepository.update(foundSongPlaylistMap.id, foundSongPlaylistMap);
        } catch (error) {
            throw new Error(`cannot play song with id ${songId} in playlist with id ${playlistId}: ` + error);
        }
    }

    getAllSongFromPlaylist(playlistId: number): Song[] {
        try {
            const allSongPlaylistMaps = this.songPlaylistMapRepository.readAll();
            const matchSongPlaylistMaps = allSongPlaylistMaps.filter((songPlaylistMap) => songPlaylistMap.playlistId === playlistId);
            const allSongInPlaylist: Song[] = [];
            for(const songPlaylistMap of matchSongPlaylistMaps) {
                const song = this.songRepository.read(songPlaylistMap.songId);
                allSongInPlaylist.push(song);
            }
            return allSongInPlaylist;
        } catch (error) {
            throw new Error(`cannot get all song in playlist with id ${playlistId}: ` + error);
        }
    }

    
}