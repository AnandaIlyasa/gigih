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

const addSongToPlaylist = (req: Request, res: Response) => {
    const playlistId = parseInt(req.params.playlistId);
    const songId = parseInt(req.params.songId);
    playlistService.addSongToPlaylist(playlistId, songId);
}

router.get('/song', getAllSongs)
router.get('/playlist/:playlistId/song/:songId', addSongToPlaylist)
router.post('/', createOne)
router.patch('/:songId', patchOneById)
router.delete('/:songId', deleteOneById)
router.get('/sorted/descend/play-count', readAllSortedDescendByPlayCount)