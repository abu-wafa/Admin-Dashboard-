import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./areaChart.scss";
function BigChart() {
  const data = [
    {
      name: "sun",
      Books: 4000,
      Clothes: 2400,
      Electronic: 2400,
    },
    {
      name: "Mon",
      Books: 3000,
      Clothes: 1398,
      Electronic: 2210,
    },
    {
      name: "Tue",
      Books: 2000,
      Clothes: 9800,
      Electronic: 2290,
    },
    {
      name: "Wed",
      Books: 2780,
      Clothes: 3908,
      Electronic: 2000,
    },
    {
      name: "Thu",
      Books: 1890,
      Clothes: 4800,
      Electronic: 2181,
    },
    {
      name: "Fri",
      Books: 2390,
      Clothes: 3800,
      Electronic: 2500,
    },
    {
      name: "Sat",
      Books: 3490,
      Clothes: 4300,
      Electronic: 2100,
    },
  ];
  return (
    <div className="areaChart">
      <h2>Revenue Analytics</h2>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Books"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="Clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="Electronic"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BigChart;
