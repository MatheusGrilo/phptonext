import useSwr from "swr";

export default function LastUpdated({ at, on }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr("/api/lastupdated/" + on + "/" + at, fetcher);

  if (error) return "Error";
  if (!data) return "Loading...";

  return <>{data.data}</>;
}
