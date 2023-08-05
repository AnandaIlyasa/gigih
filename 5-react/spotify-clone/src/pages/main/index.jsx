import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../App";

export default function Main() {
    const {accessToken} = useContext(AuthContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch("https://api.spotify.com/v1/me", {
            method: "GET", headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            setProfile(data);
        }).catch((error) => {
            console.log("error fetching profile: ", error);
            setProfile(null);
        })
    }, [accessToken]);

    return (
        <div className="main-page">
            <h3>Welcome: {profile && profile.display_name}</h3>
        </div>
    );
}