import { Link } from "react-router-dom";
import { useHomeController } from "./home.controller";

const Home = () => {
  const { userData } = useHomeController();
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      Home
      <p>
        Current User:{" "}
        {userData?.data?.firstName + " " + userData?.data.lastName}
      </p>
    </div>
  );
};

Home.whyDidYouRender = true;

export default Home;
