export const dynamic = "force-dynamic";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Oko-mode",
  description: "Reliable sourcing partner for sustainable fashion production.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ marginTop: "80px" }}>{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
