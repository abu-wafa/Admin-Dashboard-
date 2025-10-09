import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
type Props = {
  title: string;
  icon: string;
  color: string;
  dataKey: string;
  number: string | number;
  percentage: number;
  chartData: object[];
};

function ChartBox(props: Props) {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="boxTitle">
          <img src={props.icon} alt={props.title} />
          <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to="/" style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                labelStyle={{ display: "none" }}
                contentStyle={{ background: "transparent", border: "none" }}
                position={{ x: 15, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
