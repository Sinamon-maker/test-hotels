import { useState } from "react";

const useAuth = (func) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setrefreshToken] = useState("");
  const [user, setUser] = useState(null);
  const [er, setErr] = useState(null);

  const request = async (...args) => {
    console.log("kkkkkkkkkk");
    const response = await func(...args);
    if (!response.ok) {
      const { message, status } = response.data;
      setErr({ ...er, message, status });
    }
    const { accessToken, refreshToken } = response.data.tokens;
    setAccessToken(accessToken);
    setrefreshToken(refreshToken);
    if (response.data.user) {
      const newUser = response.data.user;
      setUser(newUser);
    }
    return response;
  };

  return { accessToken, refreshToken, user, er, request };
};

export default useAuth;
