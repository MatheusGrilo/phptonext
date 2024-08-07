import Layout from "../components/Views/Layout/Layout";
import Login from "../components/Controllers/User/login";

export default function Downloads() {
  return (
    <Login>
      <Layout title="Downloads">
        <div className="w-3/4 m-auto py-16 flex">
          <div className="text-left">
            <h1 className="text-6xl font-medium py-8">Downloads</h1>
            <p className="text-2xl pb-8 font-medium">
              Made with{" "}
              <a
                href="https://nodejs.org/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                Node.JS
              </a>
              ,{" "}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                MongoDB
              </a>
              ,{" "}
              <a
                href="https://datatables.net/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                DataTables
              </a>
              ,{" "}
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                Next.JS
              </a>{" "}
              with{" "}
              <a
                href="https://reactjs.org/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                React
              </a>{" "}
              and{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-blue-500 hover:text-blue-400"
                rel="noreferrer"
              >
                TailWindCSS
              </a>
              .
            </p>
          </div>
        </div>
      </Layout>
    </Login>
  );
}
