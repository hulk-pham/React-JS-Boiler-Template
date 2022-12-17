import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
      <p>This is navigater bar</p>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
