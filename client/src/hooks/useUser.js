import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState({
    isAuthorized: false,
    id: "",
    token: "",
  });

  useEffect(() => {
    axios.get("https://budgetrack.onrender.com/api/user").then((res) => {
      setUser(res.data)
    });
  }, []);

  return {user};
};
