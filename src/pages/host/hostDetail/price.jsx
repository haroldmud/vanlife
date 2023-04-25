import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HostPrice() {
  const { hostList } = useOutletContext();
  const listId = useParams();
  const item = hostList[listId.id];

  return <h1 className="font-bold mt-4">${item.price}/day</h1>;
}
