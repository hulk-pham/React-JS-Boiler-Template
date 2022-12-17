import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <Outlet />
    </>
  );
};

export default RootLayout;
