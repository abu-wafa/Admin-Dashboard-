import Single from "../../src/components/single/Single";
import { singleUser } from "../../src/data";
import "./User.scss";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "../../src/context";
import Loader from "../../src/components/loader/Loader";

export const User = () => {
  const { id } = useParams<{ id: string }>();
  const { Base_url } = useGlobalContext()!;

  const { isPending, data, error } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetch(`${Base_url}users/${id}`).then((res) => res.json()),
    enabled: !!id, // Only run query if id exists
  });

  if (isPending) {
    return <Loader color="#f054cc" />;
  }

  if (error) {
    return <div>Error loading user data</div>;
  }

// Use API data if available, fallback to static data
const userData = {id:data.id, title:data.firstName, img:data.img, info:{
  username: data.firstName + "99",
    fullname: data.firstName + " " + data.lastName,
    email: data.email,
    phone: data.phone,
    status: data.verified ? "verified" : "unverified",
}}; 


  return (
    <div>
      <Single {...singleUser } {...userData} />
    </div>
  );
};

export default User;
