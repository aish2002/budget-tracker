import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";

export const useActivity = () => {
  const { user } = useUser()
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    if(user.isAuthenticated){
      axios.get("/api/getactivity")
      .then((res) => {
        console.log(res.data);
        setActivity(res.data);
      });
    }
  }, [user]);

  return { activity };
};