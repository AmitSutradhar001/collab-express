import { useEffect, useState } from "react";
// import Loading from "../components/Loading.jsx";
import { useApi } from '../../context/ApiContext.jsx'
import { useSelector,useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/userSlice.js"
const CreateClan = () => {
  const api = useApi();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const clanLeader = user.fullname
  const handleSubmit = async (e) => {
    e.preventDefault()
      // Create a FormData object from the form
  const formData = new FormData(e.target);

  // Extract data one by one
  const name = formData.get("name");
  const location = formData.get("location");

  const clanType = formData.get("clanType");
//   const solvedIssues = parseInt(formData.get("solvedIssues") || 52678, 10);
  const requiredSolvedIssues = parseInt(
    formData.get("requiredSolvedIssues") || 0,
    10
  );
    if (!name || !clanLeader || !location || !clanType) {
        return toast.warn("Fill the form!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    try {
        const response = await api.post(
          "/clan/create",
          {name,clanLeader,location,clanType,requiredSolvedIssues,members:user._id},
          {
            headers: {
              "Content-Type": import.meta.env.VITE_EXPRESS_HEADER,
            },
            withCredentials: true, // Required to send and receive cookies
          }
        );
        if(response.status === 201){
            dispatch(login(response.data.user));
                navigate(`/clan/${response.data.clan._id}`);
          
       }
      } catch (error) {
        console.log(error);
           toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
      }
  };

  return (
    <>
     <ToastContainer style={{ top: "100px" }} />
    <div className="flex mt-8 gap-4 mb-10 flex-col justify-center items-center w-full">
      <div className="flex bg-[#F6F6F6] flex-col justify-center items-center w-full md:w-10/12 lg:w-8/12 border-[1px] border-purple-500 px-8 py-4 bg-gradient-to-r from-blue-200 to-purple-300 rounded-md  font-semibold">
      <form
  onSubmit={handleSubmit}
  className=" mx-auto w-full p-6 "
>
  <h2 className="text-2xl font-bold mb-4 text-center">Create Clan</h2>

  <label htmlFor="name" className="block text-sm font-medium mb-1">
    Clan Name *
  </label>
  <input
    type="text"
    id="name"
    name="name"
    className="w-full p-2 border rounded-md mb-4"
    required
  />

  <label htmlFor="location" className="block text-sm font-medium mb-1">
    Location *
  </label>
  <input
    type="text"
    id="location"
    name="location"
    className="w-full p-2 border rounded-md mb-4"
    required
  />

  <label htmlFor="clanType" className="block text-sm font-medium mb-1">
    Clan Type
  </label>
  <input
    type="text"
    id="clanType"
    name="clanType"
    className="w-full p-2 border rounded-md mb-4"
    required
  />
  <label htmlFor="requiredSolvedIssues" className="block text-sm font-medium mb-1">
    Required Solved Issues
  </label>
  <input
    type="number"
    id="requiredSolvedIssues"
    name="requiredSolvedIssues"

    className="w-full p-2 border rounded-md mb-4"
  />

  <button
    type="submit"
    className="w-full p-2 bg-blue-500 text-white font-medium rounded-md"
  >
    Create Clan
  </button>
</form>

      </div>
    </div>
  </>
  )
}
export default CreateClan;
