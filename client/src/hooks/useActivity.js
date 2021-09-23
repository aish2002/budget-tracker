import axios from "axios";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";

export const useActivity = () => {
  const { user } = useUser()
  const [activity, setActivity] = useState([]);

  const getActivityByCategory = (category) => activity.filter(element => category === element.category)

  useEffect(() => {
    axios.get("/api/getactivity",{
      params: {
        user
      }
    })
    .then((res) => {
      setActivity(res.data);
    });
  }, [user]);

  return { activity,getActivityByCategory };
};
