import axios from "axios";
import moment from "moment";
import { useState, useEffect } from "react";
import { useUser } from "./useUser";
import { CATEGORIES } from '../util';

export const useActivity = () => {
  const { user } = useUser();
  const [activity, setActivity] = useState([]);
  
  const getActivityByCategory = (category) =>
    activity.filter((element) => category === element.category);
    
  const getActivityByTime = (time) => 
    time === 'today' ? activity.filter(
      (element) =>
        moment().format("DD-MM-YYYY") ===
        moment(element.createdAt).format("DD-MM-YYYY")
    ) : time === 'week' ? activity.filter(
      (element) => {
        const start = moment().clone().startOf('week') 
        const end = moment().clone().endOf('week') 
        return moment(element.createdAt).isBetween(start,end)
      }
    ) : activity.filter(
      (element) =>
        moment().format("MM-YYYY") ===
        moment(element.createdAt).format("MM-YYYY")
    );
    
  const getActivitySummary = () => {
    let summary = [];
    for(let category of CATEGORIES){
      let sum = 0;
      getActivityByCategory(category).forEach(element => sum += element.amount)
      summary.push({
        name: category,
        amount: sum
      })
    }
    return summary;
  }

  const calcExpense=(time)=>{
    let expense=0,income=0;
    getActivityByTime(time).map(ele=>{       
       if(ele.status==='-')
         expense+=ele.amount
    })
    getActivityByTime(time).map(ele=>{       
      if(ele.status==='+')
        income+=ele.amount
   })
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

  return { getActivityByCategory, getActivityByTime, getActivitySummary, calcExpense };
};
