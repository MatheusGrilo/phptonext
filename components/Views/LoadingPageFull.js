import Layout from "./Layout/Layout";
import Link from "next/link";
import { CgSpinner } from "react-icons/cg";

export default function LoadingPage() {
  return (
    <>
      <Layout title="Loading">
        <div className="w-3/4 m-auto py-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-bold text-blue-500">
              <CgSpinner className="animate-spin mx-auto h-24 w-24 text-blue-400" />
            </h1>
            <h1 className="text-6xl font-medium py-8">Loading</h1>
            <p className="text-2xl pb-8 px-12 font-medium">
              If the page doesn&apos;t load, try again later.
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
