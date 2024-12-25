import Sidebar from "../profile/Sidebar";
import "../../css/components/profile/Personal.css";
import { useNavigate } from "react-router-dom";
import MultiInput from "./MultiInput";
import downArrow from "/downArrow.svg";
import { useSelector, useDispatch } from "react-redux";
import { updateContributor } from "../../redux/contributorSlice";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const Personal = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const filePick = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user_id } = useSelector((state) => state.user.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("fullName");
    const phone_number = formData.get("phone");
    const role = formData.get("role");
    const stack = formData.get("Stack");
    const bio = formData.get("bio");

    if (!name || !phone_number || !bio || !role || !stack) {
      return toast.warn("Fill the form first!");
    }

    dispatch(
      updateContributor({
        name,
        phone_number,
        role,
        stack: [stack],
        bio,
        user_id,
      })
    );

    navigate("/profile/work-experience");
  };
  // Store image URL in localStorage and update the state
  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // This is the Base64-encoded image
        setImageFile(file); // Update state with the file
        setImageFileUrl(base64Image); // Update state with the Base64 string

        let ProfileImages =
          JSON.parse(localStorage.getItem("profileImages")) || [];
        const newProfileImage = {
          id: user_id, // Replace with actual user ID
          image: base64Image,
        };
        ProfileImages = [...ProfileImages, newProfileImage];
        localStorage.setItem("profileImages", JSON.stringify(ProfileImages));
      };
      reader.readAsDataURL(file); // Convert the file to Base64
    }
  };

  const handleClick = () => {
    filePick.current.click(); // Trigger the file input when the div is clicked
  };

  return (
    <div className="ps-outer">
      <Sidebar />
      <div className=" ps-inn">
        <div className="ps-inn-1">
          <div className="ps-inn-2">
            <h2 className="ps-inn-2-h2">Personal Details</h2>
          </div>
          <div className="ps-inn-3">
            <div className="ps-inn-3-outer">
              {!imageFileUrl ? (
                <div className="ps-inn-3-in" onClick={handleClick}>
                  <input
                    type="file"
                    ref={filePick}
                    accept="image/\*"
                    onChange={handleImgChange}
                    className="hidden"
                  />
                </div>
              ) : (
                <img
                  src={imageFileUrl}
                  className="w-20 h-20 rounded-full"
                  alt="Profile"
                />
              )}

              <div className="ps-inn-3-in-2">
                <h2 className="ps-inn-3-h2">Profile Picture</h2>
                <h3 className="ps-inn-3-h3">PNG, JPG max size of 3MB</h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="ps-f">
              <div className="ps-f-out">
                <label className="ps-f-label" htmlFor="fullName">
                  Full Name
                </label>
                <div className="ps-f-in-div">
                  <input
                    name="fullName"
                    id="fullName"
                    placeholder="Amit Sutradhar"
                    className="ps-f-in"
                  />
                </div>
              </div>
              <div className="ps-f-div-2">
                <label className="ps-f-label" htmlFor="role">
                  Role
                </label>
                <div className="ps-f-in-div">
                  <input
                    name="role"
                    id="role"
                    placeholder="Web Developer"
                    className="ps-f-in"
                  />
                </div>
              </div>
              <MultiInput
                name={"Stack"}
                placeHolder={"UI Design, UX Design"}
                type={"text"}
                svg={downArrow}
              />
              <div className="ps-f-div-2">
                <label className="ps-f-label" htmlFor="phone">
                  Phone no.
                </label>
                <div className="ps-f-in-div">
                  <input
                    name="phone"
                    id="phone"
                    placeholder="9827XXXXXX"
                    className="ps-f-in"
                  />
                </div>
              </div>
              <div className="ps-f-div-2">
                <label className="ps-f-label" htmlFor="bio">
                  Bio
                </label>
                <div className="ps-f-in-div">
                  <textarea
                    name="bio"
                    id="bio"
                    placeholder="Amet sed a egestas consectetur egestas dignissim amet imperdiet at. Pulvinar ullamcorper lobortis aliquam tristique enim. Vel malesuada nisl feugiat pellentesque quam accumsan tortor ac."
                    className="ps-text"
                  />
                </div>
              </div>
              <div className="ps-c-btn">
                <button type="submit" className="ps-up">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
