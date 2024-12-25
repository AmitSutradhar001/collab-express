import ListItem from "../components/clan/ListItem";
import WarStats from "../components/clan/WarStarts";
import { useEffect, useRef, useState } from "react";
import { useApi } from "../context/ApiContext.jsx";
import Loading from "../components/Loading.jsx";
const WarLog = () => {
  const [clanWarLogData, setClanWarLogData] = useState(null);
  const [clanData, setClanData] = useState(null);
  const api = useApi();
  useEffect(() => {
    async function fetchClanData() {
      const clanResponse = await api.get(
        "/clan/by-id/675fe6e8556a98b2654d0151",
        {
          headers: {
            "Content-Type": import.meta.env.VITE_EXPRESS_HEADER,
          },
          withCredentials: true, // Required to send and receive cookies
        }
      );
      // console.log(clanResponse);

      setClanData(clanResponse.data.clan);
      console.log(clanResponse.data.clan);
    }
    async function fetchWLData() {
      const clanResponse = await api.get(
        "/warlog/all-by-clan/675fe6e8556a98b2654d0151",
        {
          headers: {
            "Content-Type": import.meta.env.VITE_EXPRESS_HEADER,
          },
          withCredentials: true, // Required to send and receive cookies
        }
      );
      // console.log(clanResponse);

      setClanWarLogData(clanResponse.data.warLogs);
      console.log(clanResponse.data.warLogs);
    }
    fetchClanData();
    fetchWLData();
  }, []);
  if (!clanWarLogData | !clanData) return <Loading />;

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mt-10 w-8/12 md:w-full md:mx-10 lg:mx-0 lg:w-10/12">
        <WarStats clanData={clanData} />
      </div>
      <div className="w-8/12 mt-10 flex flex-col gap-4 md:w-10/12 mb-10">
        {clanWarLogData?.map((item) => (
          <ListItem key={item._id} clanWarData={item} clanData={clanData} />
        ))}
      </div>
    </div>
  );
};
export default WarLog;
