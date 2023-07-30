import SongHeader from "./songHeader";
import Songs from "./songs";
import './style.css';

export default function SongSection(props: { 
    songs: {
        id: string, 
        songTitle: string, 
        artists: {id: string, name: string}[]
    }[]
}) {
    return (
        <div className="song-section">
            <SongHeader/>
            <Songs songs={props.songs}/>
        </div>
    )
}