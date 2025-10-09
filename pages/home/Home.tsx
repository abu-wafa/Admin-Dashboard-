import "./home.scss";
import "../../src/components/topBox/TopBox";
import TopBox from "../../src/components/topBox/TopBox";
import ChartBox from "../../src/components/chartBox/ChartBox";
import Barcharts from "../../src/components/barCharts/barCharts";
import BigChart from "../../src/components/areaChart/areaChart";
import PieChart from "../../src/components/pieChart/pieChart";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../src/data";
export default function home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChart />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        <BigChart />
      </div>
      <div className="box box8">
        <Barcharts {...barChartBoxRevenue} />
      </div>
      <div className="box box9">
        <Barcharts {...barChartBoxVisit} />
      </div>
    </div>
  );
}
