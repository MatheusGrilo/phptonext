import Layout from "../components/Layout";
import LastUpdates from "../middleware/lastupdates";

export default function Updates() {
  return (
    <>
      <Layout title="Updates">
        <div className="w-3/4 m-auto py-16 flex">
          <div className="text-left">
            <h1 className="text-6xl font-medium py-8">Last updates</h1>
            <p className="text-2xl pb-8 font-medium">
              <LastUpdates on="currency" at="default" /> - Currencies
            </p>
            <p className="text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="AlboradaRAW" /> - Alborada RAW Table
            </p>
            <p className="text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="Alborada" /> - Alborada Fixed Table
            </p>
            <p className="text-2xl pb-8 font-medium">
              {" "}
              <LastUpdates on="table" at="ExcellRAW" /> - Excell RAW Table
            </p>
            <p className="text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="Excell" /> - Excell Fixed Table
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
