export const dynamic = "force-dynamic";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Juste Bag Sourcing",
  description: "Premium global bag sourcing partner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ marginTop: "80px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
