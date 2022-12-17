import { Outlet } from "react-router-dom";
const LandingPageLayout = () => {
  return (
    <>
      <p>This is header bar</p>
      <Outlet />
      <p>This is bottom bar</p>
    </>
  );
};

export default LandingPageLayout;
