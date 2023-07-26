import Playlist from "./playlist";

export default function PlaylistSection() {
    const playlists = [
        {name: "playlist 1"},
        {name: "playlist 2"},
        {name: "playlist 3"},
    ]
    return (
        <section className="playlists">
            <h1>Playlists</h1>
            <div className="playlists-wrapper">
                {playlists.map((playlist) => {
                    return (<Playlist {...playlist}/>)
                })}
            </div>
        </section>
    )
}