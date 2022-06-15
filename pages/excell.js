import Layout from "../components/Views/Layout/Layout";
import PageTable from "../components/Controllers/react-table";
import PageTableNoUser from "../components/Controllers/react-table-nouser";
import { useUser } from "@auth0/nextjs-auth0";

export default function Excell() {
  const { user, isLoading } = useUser();
  return (
    <>
      <Layout title="Excell">
        {user && <PageTable on="excell" />}
        {!user && <PageTableNoUser on="excell" />}
      </Layout>
    </>
  );
}
