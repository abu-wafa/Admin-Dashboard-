import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barCharts.scss";
type Props = {
  title: string;
  dataKey: string;
  color: string;
  chartData: object[];
};
function BarCharts(props: Props) {
  return (
    <div className="barCharts">
      <h1>{props.title}</h1>
      <div className="charts">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ backgroundColor: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarCharts;
