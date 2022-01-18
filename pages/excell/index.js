import Layout from "../../components/Layout";
import PageTable from "../../middleware/react-table";

export default function Excell() {
  return (
    <>
      <Layout title="Excell">
        <PageTable on="excell" />
      </Layout>
    </>
  );
}
