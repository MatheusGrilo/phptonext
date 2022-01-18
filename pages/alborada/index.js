import Layout from "../../components/Layout";
//import MakeData from "../../middleware/makeData";
import PageTable from "../../middleware/react-table";

export default function Alborada() {
  return (
    <>
      <Layout title="Alborada">
        <PageTable on="alborada" />
      </Layout>
    </>
  );
}
