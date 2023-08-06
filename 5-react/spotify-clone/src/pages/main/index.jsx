import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../App";
import Button from "../../components/button";

export default function Main() {
    const {accessToken} = useContext(AuthContext);
    const [profile, setProfile] = useState();
    const [playlists, setPlaylists] = useState([]);
    const [topTracks, setTopTracks] = useState([]);

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setProfile(data);
        }).catch((error) => {
            console.log("error fetching profile: ", error);
        })
    }, [accessToken]);

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/playlists", {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setPlaylists(data);
        }).catch((error) => {
            console.log("error fetching playlists: ", error);
        })
    }, [accessToken]);

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me/top/tracks", {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}`,
        }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setTopTracks(data);
            console.log("top tracks: ", data);
        }).catch((error) => {
            console.log("error fetching playlists: ", error);
        })
    }, [accessToken]);

    return (
        <div className="main-page">
            <div className="side-nav">
                <div className="nav-home">
                    <span className="fa fa-home"/>
                    <h3>Home</h3>
                </div>
                <ul>
                    {playlists?.items?.map(playlistItem => (
                        <li key={playlistItem.id} className="playlist-item">
                            <img src={playlistItem.images[0]?.url} alt="" />
                            <h3>{playlistItem.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="main-content">
                <div className="content-header">
                    <input className="search" placeholder="Search Song"/>
                    {/* <h2>Playlist 1</h2> */}
                    <div className="user-logout">
                        <span className="fa fa-user"></span>
                        <h3>{profile ? profile.display_name : ""}</h3>
                        <Button label="Logout" bg="red" />
                    </div>
                </div>
                <div className="content-container">
                    {topTracks?.items?.map(track => (
                        <li key={track.id} className="song-item">
                            <img src={track.album.images[0]?.url} alt=""/>
                            <h3>{track.name}</h3>
                            <p>{track.artists?.map(artist => artist.name).join(", ")}</p>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}