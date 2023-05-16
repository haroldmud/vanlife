import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function HostDescription() {
  const { hostList } = useOutletContext();
  const listId = useParams();
  const item = hostList.vans[listId.id];

  return (
    <div className="mt-4">
      <span className="font-bold">Name:</span> {item.name} <br />
      <span className="font-bold">Category:</span> {item.type} <br />
      <span className="font-bold">Description:</span> {item.description} <br />
      <span className="font-bold">Visibility:</span> Public <br />
    </div>
  );
}
