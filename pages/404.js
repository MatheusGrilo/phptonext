import Layout from "../components/Views/Layout/Layout";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Layout title="Error 404: Page not found">
        <div className="w-3/4 m-auto py-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-blue-500">404</h1>
            <h1 className="text-6xl font-medium py-8">Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <Link href="/">
              <a>
                <button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-900 text-white font-semibold px-6 py-3 rounded-md mr-6">
                  HOME
                </button>
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
