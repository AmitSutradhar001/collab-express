// responsivness done
import { useEffect, useState } from "react";
import Contributions from "../components/Explore/Contributions";
import Companies from "../components/project/Companies";
import "../css/pages/Explore.css";
import { useApi } from "../context/ApiContext";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
const Explore = () => {
  const [users, setUsers] = useState([]); // State to store the fetched user data
  const [loading, setLoading] = useState(true);
  const api = useApi();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(import.meta.env.VITE_SIGNUP_ENDPOINT, {
          headers: {
            "Content-Type": import.meta.env.VITE_LOGIN_HEADERS,
          },
        });
        let fetchedUsers = response.data;

        // Filter out users who are is_contributor and is_admin
        let contributors = fetchedUsers
          .filter((user) => user.is_contributor)
          .reverse();
        let admins = fetchedUsers.filter((user) => user.is_admin).reverse();

        // Further filter the last 2 contributors and admins
        const lastTwoContributors = contributors.slice(0, 2); // Taking first two after reversing
        const lastTwoAdmins = admins.slice(0, 2); // Taking first two after reversing

        // Combine the filtered users if you want to use both
        setUsers({ contributors: lastTwoContributors, admins: lastTwoAdmins });

        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
      }
    };

    fetchUsers(); // Call the fetch function inside useEffect
  }, []); // Empty dependency array to run the effect only once on mount

  if (loading) {
    return <Loading />;
  }
  console.log(users.contributors);

  return (
    <div className="exp-outer ">
      <ToastContainer style={{ top: "100px" }} />
      <div className=" exp-inner ">
        <h2 className="exp-h2">Our Partners</h2>
        <div className="exp-pro-div">
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
          <div className="exp-pro"></div>
        </div>
      </div>
      <div className="exp-out">
        <div>
          <h2 className="exp-con-h2">Recent Contributions</h2>
          <div className="exp-con-div">
            {users && users ? (
              users.contributors.map((item, index) => (
                <Contributions key={index} item={item} />
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <div className="exp-com-div">
          <Companies text={"Trending Topics"} />
        </div>
      </div>
      <div className="exp-admin-div">
        <h2 className="exp-admin-h2">Recent Admin posts</h2>
        <div className="exp-con-div">
          {users ? (
            users.admins.map((item, index) => (
              <Contributions key={index} item={item} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
