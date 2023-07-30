export default function Playlists(props: { playlists: {id: string, playlistTitle: string}[] }) {
    return (
        <ul className="playlist-item-container">
            {props.playlists.map(playlistItem => (
                <li key={playlistItem.id} className="playlist-item">
                    <span className="fa fa-headphones"></span>
                    <h3>{playlistItem.playlistTitle}</h3>
                </li>
            ))}
        </ul>
    )
}