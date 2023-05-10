import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HostPhoto() {
  const { hostList } = useOutletContext();
  const listId = useParams();
  const item = hostList.vans[listId.id];
  return <img src={item.imageUrl} className="mt-4" alt="" />;
}
