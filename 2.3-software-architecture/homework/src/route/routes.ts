import { Request, Response, Router } from "express";
import DataStorage from "../data/dataStorage";
import PlaylistRepository from "../repositories/playlistRepository";
import SongPlaylistMapRepository from "../repositories/songPlaylistMap";
import SongRepository from "../repositories/songRepository";
import PlaylistService from "../services/playlistService";
import SongService from "../services/songService";

const router: Router = Router();
const dataStorage: DataStorage = new DataStorage();

const songRepository: SongRepository = new SongRepository(dataStorage.songs);
const playlistRepository: PlaylistRepository = new PlaylistRepository(dataStorage.playlists)
const songPlaylistMapRepository: SongPlaylistMapRepository = new SongPlaylistMapRepository(dataStorage.songPlaylistMaps);

const songService: SongService = new SongService(songRepository, songPlaylistMapRepository);
const playlistService: PlaylistService = new PlaylistService(playlistRepository, songRepository, songPlaylistMapRepository);

const getAllSongs = (req: Request, res: Response) => {
    const allSongs = songService.getAllSong();
    res.json(allSongs);
}

const getAllSongsSortedByPlayCountDesc = (req: Request, res: Response) => {
    const allSortedSongs = songService.getAllSongOrderByPlayCountDesc();
    res.json(allSortedSongs);
}

const getAllPlaylist = (req: Request, res: Response) => {
    const allPlaylists = playlistService.getAllPlaylist();
    res.json(allPlaylists);
}

const getAllSongFromPlaylist = (req: Request, res: Response) => {
    const playlistId = parseInt(req.params.playlistId);
    const allSongsFromPlaylist = playlistService.getAllSongFromPlaylist(playlistId);
    res.json(allSongsFromPlaylist);
}

const addSongToPlaylist = (req: Request, res: Response) => {
    const playlistId = parseInt(req.params.playlistId);
    const songId = parseInt(req.params.songId);
    playlistService.addSongToPlaylist(playlistId, songId);
    res.status(201).send("request succeed");
}

const playSong = (req: Request, res: Response) => {
    const playlistId = parseInt(req.params.playlistId);
    const songId = parseInt(req.params.songId);
    playlistService.playSongFromPlaylist(playlistId, songId);
    res.status(201).send("request succeed");
}

router.get('/song', getAllSongs)
router.get('/song/sorted-desc/playcount', getAllSongsSortedByPlayCountDesc)
router.get('/playlist/', getAllPlaylist)
router.get('/playlist/:playlistId', getAllSongFromPlaylist)
router.post('/playlist/:playlistId/song/:songId', addSongToPlaylist)
router.put('/playlist/:playlistId/song/:songId', playSong)

export { router };
