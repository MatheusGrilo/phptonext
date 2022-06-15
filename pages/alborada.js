import Layout from "../components/Views/Layout/Layout";
import PageTable from "../components/Controllers/react-table";
import PageTableNoUser from "../components/Controllers/react-table-nouser";
import { useUser } from "@auth0/nextjs-auth0";

export default function Alborada() {
  const { user, isLoading } = useUser();
  return (
    <>
      <Layout title="Alborada">
        {user && <PageTable on="alborada" />}
        {!user && <PageTableNoUser on="alborada" />}
      </Layout>
    </>
  );
}
