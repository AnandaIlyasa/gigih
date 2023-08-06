import React, { useState, useEffect, createContext } from "react";
import Login from "./pages/login";
import Main from "./pages/main";

export const AuthContext = createContext();

function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    function extractAccessToken() {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const token = hashParams.get("access_token");
      setAccessToken(token);
    }

    if (!accessToken) {
      extractAccessToken();
    }
  }, [accessToken]);

  return (
    <div className="App">
      <AuthContext.Provider value={{ accessToken, setAccessToken }}>
        {accessToken ? <Main /> : <Login />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
