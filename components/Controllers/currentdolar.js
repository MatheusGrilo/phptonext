import useSwr from "swr";
import Loading from "../Views/Loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CurrentDolar({ extra = 0 }) {
  const { data, error } = useSwr("/api/currency/brl", fetcher);

  if (error) return "Error";
  if (!data) return <Loading />;

  //console.log(data);

  return (
    <>{parseFloat(parseFloat(data.data) + parseFloat(extra)).toFixed(2)}</>
  );
}