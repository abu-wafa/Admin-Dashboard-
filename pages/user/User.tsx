import Single from "../../src/components/single/Single";
import { singleUser } from "../../src/data";
import "./User.scss";

export const User = () => {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  );
};

export default User;
