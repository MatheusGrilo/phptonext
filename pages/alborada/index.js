import Layout from "../../components/Views/Layout/Layout";
//import MakeData from "../../middleware/makeData";
import PageTable from "../../components/Controllers/react-table";

export default function Alborada() {
  return (
    <>
      <Layout title="Alborada">
        <PageTable on="alborada" />
      </Layout>
    </>
  );
}
