import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";

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
