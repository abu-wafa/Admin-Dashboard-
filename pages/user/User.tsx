import { useQuery } from "@tanstack/react-query";
import Single from "../../src/components/single/Single";
import { singleUser } from "../../src/data";
import { useParams } from "react-router-dom";
import "./user.scss";

export const User = () => {
  const { id } = useParams();
  const url = "http://localhost:8800/api/users/" + id;
  //// fetch user data from backend
  // const { isPending, data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () => fetch(url).then((res) => res.json()),
  // });
  console.log(singleUser);
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
