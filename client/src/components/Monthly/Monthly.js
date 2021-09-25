import React from "react";
import { VictoryChart,VictoryLine,VictoryTooltip } from "victory";
import { useActivity } from "../../hooks/useActivity";
import moment from "moment";

const Monthly = () => {
   const { getMonthSummary } =  useActivity();
   const data = getMonthSummary('',moment())
  return (
    <div>
      <h1>Monthly Status</h1>
      <VictoryChart >
          
        <VictoryLine
          style={{
            data: { stroke: "#c43a31" },
            parent: { border: "1px solid #ccc" },
          }}
          data={data}
          x="day"
          y="expense"
          
        
        />
        <VictoryLine
          style={{
            data: { stroke: "#000" }
          }}
          data={data}
          
          y="income"
        />
      </VictoryChart>
    </div>
  );
};

export default Monthly;
