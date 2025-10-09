import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import "./PieChart.scss";
const data = [
  { name: "Google", value: 400, color: "#8884d8" },
  { name: "Facebook", value: 300, color: "#82ca9d" },
  { name: "Twitter", value: 300, color: "#ffc658" },
  { name: "Threeds", value: 200, color: "#00c658" },
];

function PieChartComponent() {
  return (
    <div className="pieChart">
      <h2>Leads by Source</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "5px",
                outline: "none",
              }}
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={"60%"}
              outerRadius={"80%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div
                className="dot"
                style={{ backgroundColor: item.color }}
              ></div>
              <span>{item.name}</span>
            </div>
            <span className="values" style={{ color: item.color }}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartComponent;
