import Layout from "../components/Views/Layout/Layout";
import LastUpdates from "../components/Controllers/lastupdates";

export default function Updates() {
  return (
    <>
      <Layout title="Updates">
        <div className="w-3/4 m-auto py-16 flex">
          <div className="text-left">
            <h1 className="text-6xl font-medium py-8">Last updates</h1>
            <div className="flex text-2xl pb-8 font-medium">
              <LastUpdates on="currency" at="default" />
              <div className="mx-1">- Currencies</div>
            </div>
            <div className="flex text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="AlboradaRAW" />
              <div className="mx-1">- Alborada RAW Table</div>
            </div>
            <div className="flex text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="Alborada" />
              <div className="mx-1">- Alborada Fixed Table</div>
            </div>
            <div className="flex text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="ExcellRAW" />
              <div className="mx-1">- Excell RAW Table</div>
            </div>
            <div className="flex text-2xl pb-8 font-medium">
              <LastUpdates on="table" at="Excell" />
              <div className="mx-1">- Excell Fixed Table</div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
