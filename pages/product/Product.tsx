import { useParams } from "react-router-dom";
import Single from "../../src/components/single/Single";
import { singleProduct } from "../../src/data";
import "./Product.scss";
import { useGlobalContext } from "../../src/context";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../src/components/loader/Loader";

function Product() {

  const { id } = useParams<{ id: string }>();
  const { Base_url } = useGlobalContext()!;

  const { isPending, data, error } = useQuery({
    queryKey: ["poduct", id],
    queryFn: () => fetch(`${Base_url}products/${id}`).then((res) => res.json()),
    enabled: !!id, // Only run query if id exists
  });

  if (isPending) {
    return <Loader color="#g0g4cc" />;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }
  const productData = {id:data.id , title:data.title , img : data.img , info :{
    productId: data.id,
    color: data.color,
    price: data.price,
    producer: data.producer,
    Avilability: data.inStock ? "In Stock" : "Out of Stock"
  }};
  console.log(productData);
  return (
    <div>
      <Single {...singleProduct} {...productData} />
    </div>
  );
}

export default Product;
