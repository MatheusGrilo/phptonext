import Layout from "../../components/Views/Layout/Layout";
import PageTable from "../../components/Controllers/react-table";

export default function Excell() {
  return (
    <>
      <Layout title="Excell">
        <PageTable on="excell" />
      </Layout>
    </>
  );
}
