import "./style.css";
import { useContext } from "react";
import { AuthContext } from "../../App";
import useFetch from "../../hooks/useFetch";
import Playlists from "./components/playlists";
import UserLogout from "./components/userLogout";
import Contents from "./components/contents";
import SideNavDrawer from "./components/sideNavDrawer";

export default function Main() {
    const {accessToken} = useContext(AuthContext);
    const [profile] = useFetch(
        `${process.env.REACT_APP_API_URL}/v1/me`, 
        { method: "GET", headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const [playlists] = useFetch(
        `${process.env.REACT_APP_API_URL}/v1/me/playlists`, 
        { method: "GET", headers: { Authorization: `Bearer ${accessToken}` } }
    );
    const [topTracks] = useFetch(
        `${process.env.REACT_APP_API_URL}/v1/me/top/tracks`, 
        { method: "GET", headers: { Authorization: `Bearer ${accessToken}` } }
    );

    return (
        <div className="main-page">
            <SideNavDrawer playlists={playlists} />
            <div id="side-nav">
                <div className="nav-home">
                    <span className="fa fa-home"/>
                    <h3>Home</h3>
                </div>
                <Playlists playlists={playlists} />
            </div>
            <div className="main-content">
                <div className="content-header">
                    <input className="search" placeholder="Search Song"/>
                    {/* <h2>Playlist 1</h2> */}
                    <UserLogout profile={profile} />
                </div>
                <Contents contents={topTracks} />
            </div>
        </div>
    );
}