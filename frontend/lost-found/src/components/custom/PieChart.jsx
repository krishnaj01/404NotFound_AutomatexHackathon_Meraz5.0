import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F"];

function ItemPieChart({ lostItemCount, foundItemCount }) {
  const data = [
    { name: "Lost Items", value: lostItemCount },
    { name: "Found Items", value: foundItemCount },
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