import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title = "Page without title" }) {
  return (
    <>
      <Header title={title} />
      <Navbar />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
}
