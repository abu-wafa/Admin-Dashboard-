import Single from "../../src/components/single/Single";
import { singleProduct } from "../../src/data";
import "./Product.scss";

function Product() {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
}

export default Product;
