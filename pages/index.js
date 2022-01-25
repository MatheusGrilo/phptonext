import Layout from "../components/Views/Layout/Layout";
import Link from "next/link";
import LastUpdates from "../components/Controllers/lastupdates";

export default function Home() {
  return (
    <Layout title="Home page">
      <div className="container w-full md:px-40 mx-auto py-20">
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 mlg:grid-cols-3 md:gap-10 space-y-6 md:space-y-0 px-10 md:px-0 mx-auto">
          <div className="bg-gray-200 dark:bg-gray-800 p-6 shadow-md rounded-md">
            <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-3">
              Alborada
            </h3>
            <p className="mb-2">Última atualização:</p>
            <p className="my-4">
              <LastUpdates on="table" at="AlboradaRAW" page="index" />
            </p>
            <Link href="/alborada" passHref>
              <button className="text-lg font-semibold text-white bg-orange-600/75 hover:bg-orange-700 px-4 py-1 block mx-auto rounded-md">
                Entrar
              </button>
            </Link>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-6 shadow-md rounded-md">
            <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-3">
              Excell
            </h3>
            <p className="mb-2">Última atualização:</p>
            <p className="my-4">
              <LastUpdates on="table" at="ExcellRAW" page="index" />
            </p>
            <Link href="/excell" passHref>
              <button className="text-lg font-semibold text-white bg-orange-600/75 hover:bg-orange-700 px-4 py-1 block mx-auto rounded-md">
                Entrar
              </button>
            </Link>
          </div>

          <div className="bg-gray-200 dark:bg-gray-800 p-6 shadow-md rounded-md">
            <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-3">
              Cartuchos e Toners
            </h3>
            <p className="mb-2">Última atualização:</p>
            <p className="my-4">
              <LastUpdates on="table" at="AlboradaRAW" page="index" />
            </p>
            <Link href="/toners" passHref>
              <button className="text-lg font-semibold text-white bg-orange-600/75 hover:bg-orange-700 px-4 py-1 block mx-auto rounded-md">
                Entrar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
