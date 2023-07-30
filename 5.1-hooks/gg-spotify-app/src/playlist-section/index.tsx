import Playlists from "./playlists";
import PlaylistHeader from "./playlistHeader";
import './style.css';

export default function PlaylistSection(props: { playlists: {id: string, playlistTitle: string}[] }) {
    return (
        <div className="playlist-section">
            <PlaylistHeader/>
            <Playlists playlists={props.playlists}/>
        </div>
    )
}