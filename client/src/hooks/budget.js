import {useEffect,useState} from 'react';
import axios from 'axios';
import {useUser} from './useUser'

export const useBudget=(id)=>{
  const {user} = useUser();
    const [budgets, setBudgets] = useState({
        userid:id,
        income: 0.0,
        savings: 0.0,
        budget: 0.0,
      });

      useEffect(() => {
        function getBudget() {
          axios
            .get("/api/getbudget", {
              params: {
                id: id,
              },
            })
            .then((res) => {
              if (res.data) {
                setBudgets(res.data);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
        getBudget();
      }, [id]);
      return budgets;
}
