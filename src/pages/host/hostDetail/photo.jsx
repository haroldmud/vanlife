import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HostPhoto() {
  const [hostList, setHostList] = useState([]);
  const listId = useParams();
  const item = hostList[listId.id];
  useEffect(() => {
    const detailFetcher = async () => {
      try {
        const detail = await fetch("/api/vans");
        const result = await detail.json();
        setHostList(result.vans);
      } catch (e) {
        setHostList("Nothing found I ain't gon lie");
      }
    };
    detailFetcher();
    return () => {
      detailFetcher();
    };
  }, [listId]);
  return <img src={item?.imageUrl} alt="" />;
}
