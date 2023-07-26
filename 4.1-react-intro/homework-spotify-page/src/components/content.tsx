import PlaylistSection from "./playlists";
import SongSection from "./songs";
import "./style.css";

export default function Content() {
    return (
        
    <div className="content">
        <SongSection/>
        <PlaylistSection/>
    </div>

    )
}