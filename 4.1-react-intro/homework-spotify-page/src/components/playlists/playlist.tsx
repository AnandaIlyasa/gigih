export default function Playlist({name}: {name: string}) {
    return (
    <button className="playlist">
        <h3>
            {name}
        </h3>
    </button>
    )
}