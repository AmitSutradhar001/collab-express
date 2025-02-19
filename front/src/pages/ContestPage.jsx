import ContestHead from "../components/clan/ContestHead";
import { NavLink, Outlet } from "react-router-dom";

const ContestPage = () => {
  return (
    <>
      <div className="min-w-full h-screen flex flex-col gap-4">
        <ContestHead />

        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col justify-center items-center px-3">
            <div className="w-full lg:w-2/3 bg-[#F9F9F9] p-6 rounded-lg shadow-lg">
              {/* Tab Navigation */}
              <div className="flex flex-col flex-wrap mb-6">
                <div className="flex flex-wrap justify-between items-center md:w-3/5">
                  <NavLink
                    to="/contest_page"
                    end
                    className={({ isActive }) =>
                      `py-2 px-4 font-semibold rounded-full ${
                        isActive ? "bg-gray-200 text-black" : "text-gray-400"
                      }`
                    }
                  >
                    Past Contests
                  </NavLink>

                  <NavLink
                    to="/contest_page/my_contests"
                    className={({ isActive }) =>
                      `py-2 px-4 font-semibold rounded-full ${
                        isActive ? "bg-gray-200 text-black" : "text-gray-400"
                      }`
                    }
                  >
                    My Contests
                  </NavLink>
                  <NavLink
                    to="/contest_page/leader_board"
                    className={({ isActive }) =>
                      `py-2 px-4 font-semibold rounded-full ${
                        isActive ? "bg-gray-200 text-black" : "text-gray-400"
                      }`
                    }
                  >
                    LeaderBoard
                  </NavLink>
                </div>

              </div>
              <div className="w-full ">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestPage;
