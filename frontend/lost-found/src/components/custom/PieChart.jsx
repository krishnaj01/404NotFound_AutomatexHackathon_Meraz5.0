import { useCountContext } from "@/context/CountContext";
import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#4C1D95", "#A78BFA"];

function ItemPieChart() {
  const {lostCount, foundCount} = useCountContext();
  const data = [
    { name: "Lost Items", value: lostCount },
    { name: "Found Items", value: foundCount },
  ];

  return (
    <PieChart width={300} height={300} className="m-0">
      <Pie
        data={data}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

export default ItemPieChart;