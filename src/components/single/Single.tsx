import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Single.scss";

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { id: number; time: string; text: string }[];
};

function Single(props: Props) {
  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && (
              <img src={props.img} alt="userimgs" className="itemImg" />
            )}
            <h2>{props.title}</h2>
            <button>Update</button>
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => {
              return (
                <div className="item" key={item[0]}>
                  <span className="itemTitle">{item[0]}:</span>
                  <span className="itemValue"> {item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className="charts">
          {props.chart && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((item) => {
                  return (
                    <Line
                      key={item.name}
                      type="monotone"
                      dataKey={item.name}
                      stroke={item.color}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="activities">
        <h3>Last Activities</h3>
        <ul>
          {props.activities &&
            props.activities.map((activite) => {
              return (
                <li key={activite.id}>
                  <div>
                    <p>{activite.text}</p>
                    <time> {activite.time}</time>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Single;
