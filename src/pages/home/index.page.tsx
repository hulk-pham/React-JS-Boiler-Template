import { Link } from "react-router-dom";
import { useHomeController } from "./home.controller";

const Home = () => {
  const { homeData } = useHomeController();
  console.log(homeData.data?.[0].content);

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
    </div>
  );
};

Home.whyDidYouRender = true;

export default Home;
