import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";

export const useActivity = () => {
  const { user } = useUser();
  const [activity, setActivity] = useState([]);

  const getActivityByCategory = (category) =>
    activity.filter((element) => category === element.category);

  const getActivityToday = () =>
      activity.filter(
        (element) =>
          moment().format("DD-MM-YYYY") ===
          moment(element.createdAt).format("DD-MM-YYYY")
      );

  getActivityToday();
  useEffect(() => {
    axios
      .get("/api/getactivity", {
        params: {
          user,
        },
      })
      .then((res) => {
        setActivity(res.data);
      });
  }, [user]);

  return { activity, getActivityByCategory, getActivityToday };
};
