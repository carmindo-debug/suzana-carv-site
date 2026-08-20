import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer/Footer";
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      {/* WhatsApp CTA */}
      {/* Back To Top */}
      {/* Suzy (Assistente Virtual) */}
    </>
  );
}

export default AppLayout;
