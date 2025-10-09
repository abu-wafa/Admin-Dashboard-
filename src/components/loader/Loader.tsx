import "./Loader.scss";
import { HashLoader } from "react-spinners";

function Loader(props: { color: string }) {
  return (
    <div className="loader">
      <HashLoader
        color={props.color || "#f054cc"}
        loading
        size={100}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loader;
