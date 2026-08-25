import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route
  path="/serviços"
  element={<Navigate to="/servicos" replace />}
/>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/depoimentos" element={<Testimonials />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
