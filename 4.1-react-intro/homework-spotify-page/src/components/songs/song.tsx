
export default function Song({title, artist, imgUrl}: {title: string, artist: string, imgUrl: string}) {
    return (
        <div className="card">
            <img src={imgUrl} alt="" width="100%" height="100">
            </img>
            <div className="card-info">
                <div className="song-info">
                    <p>
                        {artist}
                    </p>
                    <h3>
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    )
}