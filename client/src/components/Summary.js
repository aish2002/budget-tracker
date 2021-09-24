import React from "react";
import { useActivity } from "../hooks/useActivity";
import { VictoryPie,VictoryTooltip } from "victory";
import { COLORS } from "../util";

const Summary = () => {
  const { getActivitySummary } = useActivity();

  return (
      
    <VictoryPie
      colorScale={COLORS}
      data={getActivitySummary()}
      x="name"
      y="amount"
      labels={({ datum }) => `${datum.name} - ${datum.amount} `}
      labelComponent={<VictoryTooltip 
        style={{ fill: "#fff" }}
        flyoutPadding={10} flyoutStyle={
            {
                stroke: "#9072C2",
                fill: "#9072C2"
            }
        }
        
        />
    }
    />
    
  );
};

export default Summary;
