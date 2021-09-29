import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = () => {
  const [user, setUser] = useState({
    isAuthorized: false,
    id: "",
    token: "",
  });

  useEffect(() => {
    axios.get(process.env.REACT_APP_API + "/user").then((res) => {
      setUser(res.data)
    });
  }, []);

  return {user};
};
