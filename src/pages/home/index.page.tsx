import Footer from "components/mocules/footer";
import Header from "components/mocules/header";
import HomePageContent from "components/organisms/home-page-content";
import LandingTemplate from "components/templates/landing.template";
import { useHomeController } from "./home.controller";

const Home = () => {
  const {} = useHomeController();
  return (
    <LandingTemplate
      HeaderComp={<Header />}
      ContentComp={<HomePageContent />}
      FooterComp={<Footer />}
    />
  );
};

export default Home;
