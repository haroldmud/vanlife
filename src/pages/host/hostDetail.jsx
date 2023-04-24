import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostVanDetail() {
  const [hostList, setHostList] = useState([]);
  const listId = useParams();
  const listDetails = hostList[listId.id];

  useEffect(() => {
    const detailFetcher = async () => {
      try {
        const detail = await fetch("/api/vans");
        const result = await detail.json();
        setHostList(result.vans);
      } catch (e) {
        setHostList("Nothingfound I ain't gon lie");
      }
    };
    detailFetcher();
    return () => {
      detailFetcher();
    };
  }, []);

  return <h1>{listDetails?.name}</h1>;
}
