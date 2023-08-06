import { generateRandomString } from "../utils/utils";

const authEndpoint = "https://accounts.spotify.com/authorize";
const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = "http://localhost:3000";
const state = generateRandomString(8);
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-top-read",
];

export const implicitAuth = () => {
  const params = new URLSearchParams({
    client_id,
    response_type: "token",
    redirect_uri,
    state,
    scope: scopes.join(" "),
  });

  window.location = `${authEndpoint}?${params}`;
};
