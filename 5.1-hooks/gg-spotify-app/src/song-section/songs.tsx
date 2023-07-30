export default function Songs(props: { 
    songs: {
        id: string, 
        songTitle: string, 
        artists: {id: string, name: string}[]
    }[]
}) {
    return (
        <ul className="song-wrapper">
            {props.songs.map(song => (
                <li key={song.id} className="song-item">
                    <span className="fa fa-play"></span>
                    <div className="song-info">
                        <h2>{song.songTitle}</h2>
                        <p>
                            {song.artists.map(artist => (
                                <span key={artist.id}>{artist.name}, </span>
                            ))}
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}