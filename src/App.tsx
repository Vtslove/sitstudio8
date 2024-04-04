import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import LinkedInLearning from "./pages/LinkedInLearning";
import ABOUTRESPONSIVE from "./pages/ABOUTRESPONSIVE";
import ServicesResponsive from "./pages/ServicesResponsive";
import SNTL from "./pages/SNTL";
import Coingrig from "./pages/Coingrig";
import SmartCity from "./pages/SmartCity";
import RealEstate from "./pages/RealEstate";
import Games from "./pages/Games";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/linkedin-learning":
        title = "";
        metaDescription = "";
        break;
      case "/about-responsive":
        title = "";
        metaDescription = "";
        break;
      case "/services-responsive":
        title = "";
        metaDescription = "";
        break;
      case "/sntl":
        title = "";
        metaDescription = "";
        break;
      case "/coingrig":
        title = "";
        metaDescription = "";
        break;
      case "/smart-city":
        title = "";
        metaDescription = "";
        break;
      case "/real-estate":
        title = "";
        metaDescription = "";
        break;
      case "/games":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainHomePage />} />
      <Route path="/linkedin-learning" element={<LinkedInLearning />} />
      <Route path="/about-responsive" element={<ABOUTRESPONSIVE />} />
      <Route path="/services-responsive" element={<ServicesResponsive />} />
      <Route path="/sntl" element={<SNTL />} />
      <Route path="/coingrig" element={<Coingrig />} />
      <Route path="/smart-city" element={<SmartCity />} />
      <Route path="/real-estate" element={<RealEstate />} />
      <Route path="/games" element={<Games />} />
    </Routes>
  );
}
export default App;
