import ProgressBar from "../components/clan/ProgressBar";
import { useApi } from "../context/ApiContext.jsx";
import { useEffect, useState } from "react";
import Loading from "../components/Loading.jsx";
import { Link, useParams } from "react-router-dom";
const Clan = () => {
  const {id} = useParams()
  const [clanData, setClanData] = useState(null);
  const api = useApi();
  useEffect(() => {
    async function fetchData() {
      const clanResponse = await api.get(
        `/clan/by-id/${id}`,
        {
          headers: {
            "Content-Type": import.meta.env.VITE_EXPRESS_HEADER,
          },
          withCredentials: true, // Required to send and receive cookies
        }
      );
      // console.log(clanResponse);

      setClanData(clanResponse.data.clan);
    }
    fetchData();
  }, []);
  if (!clanData) return <Loading />;
  console.log(clanData);
  return (
    <div className="w-full flex flex-col gap-3 h-screen">
      {/* Top Side */}
      <div className="px-10 md:px-20 flex flex-col gap-3 w-full justify-center items-center">
        <div className="w-full py-4 lg:w-9/12 flex flex-col md:flex-row justify-around border-[1px] border-gray-600 rounded-lg mt-10 ">
          {/* first */}
          <div className="p-2 flex flex-wrap justify-start items-start">
            <img
              src={clanData?.profileImage}
              className="w-20 h-20 object-fill rounded-md"
            />
          </div>
          {/* second */}
          <div className="md:min-w-72 lg:w-[30rem] 2xl:min-w-[40rem] flex-wrap px-5">
            {/*First div */}
            <div className="flex justify-between items-center ">
              <div>
                <p className="font-semibold">{clanData?.name}</p>
                <p>{clanData?.location}</p>
              </div>
              <div className="flex gap-4 justify-center items-center">
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 28 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.37516 4.06264C4.37516 2.98516 4.80318 1.95181 5.56508 1.18992C6.32697 0.428027 7.36032 0 8.4378 0H23.4383C24.5158 0 25.5492 0.428027 26.3111 1.18992C27.073 1.95181 27.501 2.98516 27.501 4.06264V26.5634C27.501 27.097 27.3959 27.6253 27.1917 28.1182C26.9876 28.6111 26.6883 29.0589 26.3111 29.4362C25.9338 29.8134 25.4859 30.1127 24.993 30.3168C24.5001 30.521 23.9719 30.6261 23.4383 30.6261H8.4378C7.90429 30.6261 7.376 30.521 6.88309 30.3168C6.39019 30.1127 5.94233 29.8134 5.56508 29.4362C5.18783 29.0589 4.88857 28.6111 4.68441 28.1182C4.48024 27.6253 4.37516 27.097 4.37516 26.5634V4.06264ZM0 8.4378C0 6.74774 1.03254 5.29894 2.50009 4.68642V26.8747C2.50009 28.3666 3.09274 29.7974 4.14767 30.8523C5.2026 31.9073 6.63339 32.4999 8.12529 32.4999H22.8146C22.506 33.2405 21.9851 33.8731 21.3175 34.318C20.6499 34.7629 19.8655 35.0002 19.0632 35H8.12529C5.97055 35 3.90404 34.1441 2.38028 32.6206C0.856533 31.0971 0.000331499 29.0307 0 26.876V8.4378Z"
                    fill="#D9D9D9"
                  />
                </svg>
                <svg
                  width="23"
                  height="26"
                  viewBox="0 0 23 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="19.2688"
                    cy="4.4456"
                    rx="3.72973"
                    ry="4.4456"
                    fill="black"
                  />
                  <ellipse
                    cx="18.7297"
                    cy="21.3986"
                    rx="3.72973"
                    ry="4.4456"
                    fill="black"
                  />
                  <ellipse
                    cx="3.72973"
                    cy="12.5959"
                    rx="3.72973"
                    ry="4.4456"
                    fill="black"
                  />
                  <line
                    y1="-0.5"
                    x2="10.3299"
                    y2="-0.5"
                    transform="matrix(0.902656 -0.430364 0.318151 0.94804 6.83594 11.1139)"
                    stroke="black"
                  />
                  <line
                    y1="-0.5"
                    x2="11.5784"
                    y2="-0.5"
                    transform="matrix(0.858989 0.511995 -0.38687 0.922134 6.21484 14.8185)"
                    stroke="black"
                  />
                </svg>
              </div>
            </div>
            {/* Second Div */}
            <div className="mt-5">
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>Clan Level</p>
                <p>{clanData?.clanLevel}</p>
              </div>
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>Total Members</p>
                <p>{clanData?.members.length}</p>
              </div>
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>War Wins</p>
                <p>{clanData?.warWins}</p>
              </div>
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>War Ties</p>
                <p>{clanData?.warTies}</p>
              </div>
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>War Losses</p>
                <p>{clanData?.warLosses}</p>
              </div>
            </div>
          </div>
          {/* thied */}
          <div className=" flex-wrap px-5 items-end ">
            <div className="md:min-w-64 h-fit md:border-l-[1px] pb-10 md:p-4 border-gray-700 mt-10  ">
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>Clan Type</p>
                <p>{clanData?.clanType}</p>
              </div>
              <div className="flex justify-between items-center pb-2 pt-1 border-b-[1px] border-black">
                <p>Required Solved Issues </p>
                <p>{clanData?.requiredSolvedIssues}</p>
              </div>
              <div className=" flex justify-center items-center">
                <button className="w-32 bg-gradient-to-l from-blue-500 to-purple-600 text-white font-semibold mt-5 px-3 py-2 rounded-md drop-shadow-lg">
                  Clan Perks
                </button>
              </div>
              <div className="mt-3">
                <ProgressBar current={clanData?.solvedIssues} total={73864} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle side*/}
      <div className="px-10 md:px-20 flex flex-col gap-3 w-full justify-center items-center">
        <div className="w-fit flex flex-wrap gap-2 justify-between items-center px-5 py-2 lg:w-9/12 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1),_4px_0px_4px_-2px_rgba(0,0,0,0.05),_-4px_0px_4px_-2px_rgba(0,0,0,0.05)]">
          <div className="flex gap-5 justify-between items-center">
            <button className="min-w-56 bg-gradient-to-l from-blue-500 to-purple-600 text-white font-semibold mt-5 px-3 py-2 rounded-md drop-shadow-lg flex justify-center items-center gap-2">
              <svg
                width="20"
                height="20"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.14014 5C4.14014 3.67392 4.66692 2.40215 5.6046 1.46447C6.54228 0.526784 7.81405 0 9.14014 0C10.4662 0 11.738 0.526784 12.6757 1.46447C13.6134 2.40215 14.1401 3.67392 14.1401 5C14.1401 6.32608 13.6134 7.59785 12.6757 8.53553C11.738 9.47322 10.4662 10 9.14014 10C7.81405 10 6.54228 9.47322 5.6046 8.53553C4.66692 7.59785 4.14014 6.32608 4.14014 5ZM2.96214 12.672C4.56514 11.694 6.74514 11 9.14014 11C9.58714 11 10.0271 11.024 10.4561 11.07C10.6279 11.0884 10.792 11.151 10.9324 11.2517C11.0727 11.3524 11.1846 11.4878 11.2571 11.6446C11.3296 11.8014 11.3603 11.9743 11.3461 12.1465C11.3319 12.3186 11.2733 12.4842 11.1761 12.627C10.4987 13.6212 10.1376 14.7969 10.1401 16C10.1401 16.92 10.3471 17.79 10.7151 18.567C10.7868 18.7184 10.8194 18.8853 10.8098 19.0525C10.8001 19.2198 10.7487 19.3819 10.6601 19.524C10.5715 19.6662 10.4486 19.7838 10.3027 19.8661C10.1568 19.9484 9.99261 19.9927 9.82514 19.995C9.59914 19.998 9.37014 20 9.14014 20C6.91114 20 4.80514 19.86 3.22714 19.442C2.44214 19.234 1.70314 18.936 1.14314 18.486C0.550137 18.01 0.140137 17.345 0.140137 16.5C0.140137 15.713 0.498137 14.977 0.984137 14.361C1.47814 13.736 2.16114 13.161 2.96214 12.671V12.672ZM15.6401 14C15.2423 14 14.8608 14.158 14.5795 14.4393C14.2982 14.7206 14.1401 15.1022 14.1401 15.5C14.1401 15.8978 14.2982 16.2794 14.5795 16.5607C14.8608 16.842 15.2423 17 15.6401 17C16.038 17 16.4195 16.842 16.7008 16.5607C16.9821 16.2794 17.1401 15.8978 17.1401 15.5C17.1401 15.1022 16.9821 14.7206 16.7008 14.4393C16.4195 14.158 16.038 14 15.6401 14ZM12.1401 15.5C12.1405 14.9675 12.2624 14.4421 12.4966 13.9638C12.7307 13.4855 13.0708 13.067 13.4912 12.74C13.9115 12.413 14.4009 12.1863 14.922 12.0771C15.4432 11.9678 15.9825 11.9789 16.4987 12.1095C17.015 12.2402 17.4946 12.4869 17.9011 12.8309C18.3076 13.1749 18.6302 13.6071 18.8444 14.0946C19.0587 14.5821 19.1588 15.1121 19.1373 15.6442C19.1157 16.1762 18.9731 16.6964 18.7201 17.165L19.5541 18C19.6496 18.0922 19.7258 18.2026 19.7782 18.3246C19.8306 18.4466 19.8582 18.5778 19.8594 18.7106C19.8605 18.8434 19.8352 18.9751 19.785 19.098C19.7347 19.2208 19.6604 19.3325 19.5665 19.4264C19.4726 19.5203 19.361 19.5945 19.2381 19.6448C19.1152 19.6951 18.9835 19.7204 18.8507 19.7192C18.718 19.7181 18.5867 19.6905 18.4647 19.6381C18.3427 19.5857 18.2324 19.5095 18.1401 19.414L17.3051 18.579C16.772 18.8674 16.173 19.0123 15.567 18.9996C14.961 18.987 14.3686 18.8171 13.848 18.5068C13.3273 18.1964 12.8962 17.7561 12.5968 17.229C12.2974 16.7019 12.1401 16.1062 12.1401 15.5Z"
                  fill="currentColor"
                />
              </svg>
              <span>Find New Members</span>
            </button>
            <Link to={`/warlog/${id}`} className="min-w-24 bg-gradient-to-l from-blue-500 to-purple-600 text-white font-semibold mt-5 px-3 py-2 rounded-md drop-shadow-lg">
              War Log
            </Link>
          </div>
          <div className="flex gap-5 w-full md:w-fit justify-between items-center">
            <Link to={`/fund-screen/${id}`} className="min-w-24 bg-gradient-to-l from-blue-500 to-purple-600 text-white font-semibold mt-5 px-3 py-2 rounded-md drop-shadow-lg">
              My Fund
            </Link>
            <button className="min-w-24 bg-gradient-to-l from-blue-500 to-purple-600 text-white font-semibold mt-5 px-3 py-2 rounded-md drop-shadow-lg">
              Join
            </button>
          </div>
        </div>
      </div>
      {/* Last */}
      <div className="px-10 md:px-20 flex flex-col gap-3 w-full justify-center items-center">
        <div className="w-full mb-10 px-5 py-4 lg:w-9/12 flex flex-col justify-around border-[1px] border-gray-600 rounded-lg bg-[#F9F9F9] mt-5">
          {/* first */}
          <div className="w-full flex flex-wrap gap-3 justify-between items-center">
            <p className="text-lg font-semibold">Recommended Members</p>
            <button className="flex text-gray-600 justify-center items-center">
              <span>See All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                viewBox="0 0 24 24"
                id="right-arrow"
              >
                <path
                  fill="currentColor"
                  d="M14.83,11.29,10.59,7.05a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L12.71,12,9.17,15.54a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29l4.24-4.24A1,1,0,0,0,14.83,11.29Z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full ">
            {clanData &&
              clanData.members.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="w-full px-4 flex-wrap py-1 flex justify-between border-[1px] border-gray-600 rounded-sm bg-[#F9F9F9] mt-5"
                    >
                      <label className="flex gap-3 text-sm font-semibold items-center">
                        <input type="checkbox" className="w-4 h-4 peer" />
                        <span className="">{item}</span>
                      </label>
                      <div className="flex justify-center items-center gap-8">
                        <div className="flex flex-col justify-center items-center">
                          <div className="flex text-sm justify-between items-center gap-3">
                            <p>Fund Donated</p>
                            {/* <p>{item.fund_donated}</p> */}
                          </div>
                          <div className="flex text-sm justify-between items-center gap-3">
                            <p>Issue Contribution</p>
                            {/* <p>{item.issue_contribution}</p> */}
                          </div>
                        </div>
                        <div className="bg-pink-100 rounded-sm  px-5 py-1 text-center">
                          {/* {item.total_problem_solved} */}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      {/* final */}
      <div className="px-10  md:px-20 flex flex-col gap-3 w-full justify-center items-center">
        <div className="w-full mb-10 flex flex-wrap justify-between items-center px-5 py-2 lg:w-9/12 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1),_4px_0px_6px_-2px_rgba(0,0,0,0.1),_-4px_0px_6px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col justify-center items-start w-1/2 border-r-[1px] border-gray-700">
            <p className="text-lg font-semibold">{clanData?.clanLeader}</p>
            <p>Leader</p>
          </div>
          <div className="flex justify-around flex-wrap items-center w-1/2 gap-2">
            <div className="text-center  text-sm">
              <p className="font-semibold">Fund Donated</p>
              {/* <p>{clanData.leader.fund_donated}</p> */}
            </div>
            <div className="text-center  text-sm ">
              <p className="font-semibold">Issue Contribution</p>
              {/* <p>{clanData.leader.issue_contribution}</p> */}
            </div>
            <div className="text-center">
              {/* {clanData.leader.total_problem_solved} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clan;
