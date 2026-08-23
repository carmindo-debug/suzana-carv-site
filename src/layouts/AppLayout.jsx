import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer/Footer";
import Suzy from "@/components/Suzy/Suzy";
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      {/* WhatsApp CTA */}
      {/* Back To Top */}
      <Suzy />
    </>
  );
}

export default AppLayout;
