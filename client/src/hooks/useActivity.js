import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";
import { CATEGORIES } from '../util';

export const useActivity = () => {
  const { user } = useUser();
  const [activity, setActivity] = useState([]);

  const filterActivity = (category,time) => {
    const activitybycategory = category === '' ? activity : 
    activity.filter((element) => category === element.category);

    const filteredactivity = time === '' ? activity : 
    time === 'week' ? activitybycategory.filter(
      (element) => {
        const start = moment().clone().startOf('week') 
        const end = moment().clone().endOf('week') 
        return moment(element.createdAt).isBetween(start,end)
      }
    ) : time=== 'month' ? activitybycategory.filter(
      (element) =>
        moment().format("MM-YYYY") ===
        moment(element.createdAt).format("MM-YYYY")
    ) : activitybycategory.filter(
      (element) =>
        moment(time).format("DD-MM-YYYY") ===
        moment(element.createdAt).format("DD-MM-YYYY")
    );

    return filteredactivity;
  }
    
  const getActivitySummary = (time) => {
    let summary = [];
    for(let category of CATEGORIES){
      let sum = 0;
      filterActivity(category,time).forEach(element => sum += element.amount)
      summary.push({
        name: category,
        amount: sum
      })
    }
    return summary;
  }

  const calcExpense=(time)=>{
    let expense=0,income=0;
    filterActivity('',time).map(ele =>       
       ele.status==='-' ? expense += ele.amount : income += ele.amount
    )
    return {expense,income}
 }

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

  return { getActivitySummary, calcExpense, filterActivity };
};
