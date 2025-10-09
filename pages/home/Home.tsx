import { lazy, Suspense } from "react";
import "./home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../src/data";
import Loader from "../../src/components/loader/Loader";
// lazy-load heavy components
const TopBox = lazy(() => import("../../src/components/topBox/TopBox"));
const ChartBox = lazy(() => import("../../src/components/chartBox/ChartBox"));
const Barcharts = lazy(
  () => import("../../src/components/barCharts/barCharts")
);
const BigChart = lazy(() => import("../../src/components/areaChart/areaChart"));
const PieChart = lazy(() => import("../../src/components/pieChart/pieChart"));
export default function home() {
  return (
    <div className="home">
      <Suspense fallback={<Loader color="#8884d8" />}>
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
      </Suspense>
    </div>
  );
}
