//https://tailwindui.com/#product-application-ui
import Layout from "../components/Layout";
import Link from "next/link";
import CurrentDolar from "../middleware/currentdolar";

export default function Home() {
  return (
    <Layout title="Home page">
      <div>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="text-3xl font-extrabold tracking-tight sm:text-4xl w-48">
              <span className="px-6">Alborada</span>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link href="/alborada">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  R$
                  <CurrentDolar extra="0.3" />
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md">
              <div>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm sm:text-sm">
                      R$
                      <CurrentDolar /> +{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-2 focus:ring-green-500 focus:border-0 block min-w-28 w-28 pl-7 pr-3 text-sm sm:text-sm border-gray-300 text-gray-800 rounded-md text-right h-8 dark:text-white"
                    placeholder="0.10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="text-3xl font-extrabold tracking-tight sm:text-4xl w-48">
              <span className="px-6">Excell</span>
            </div>
            <div className="inline-flex rounded-md shadow">
              <Link href="/excell">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  R$
                  <CurrentDolar extra="0.3" />
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md">
              <div>
                <div className="mt-1 relative rounded-md">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm sm:text-sm">
                      R$
                      <CurrentDolar /> +{" "}
                    </span>
                  </div>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="focus:ring-2 focus:ring-green-500 focus:border-0 block w-28 pl-7 pr-3 text-sm sm:text-sm border-gray-300 text-gray-800 rounded-md text-right h-8 dark:text-white"
                    placeholder="0.10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
