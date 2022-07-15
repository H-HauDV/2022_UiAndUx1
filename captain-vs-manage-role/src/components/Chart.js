import React from "react";
import "../scss/chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Janary", Days: 25 },
  { name: "Feburary", Days: 27 },
  { name: "March", Days: 29 },
  { name: "April", Days: 29 },
  { name: "May", Days: 25 },
];
const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Attendance in last 5 month</div>
      <ResponsiveContainer width="100%" height="100%" aspect={2 / 1}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Days"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
