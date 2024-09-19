import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../context/authSlice";

const ProfileModal = ({ setOpen }) => {
  const [userInfo, setUserInfo] = useState({
    bio: "",
    userName: "",
    name: "",
  });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user); // Adjust according to your state shape

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Merge current user data with the new data
    const updatedUser = {
      ...currentUser,
      userDesc: userInfo.bio || currentUser.userDesc,
      userName: userInfo.userName || currentUser.userName,
      name: userInfo.name || currentUser.name,
    };

    dispatch(setUser(updatedUser));

    // Optional: Reset form or handle close
    setOpen(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] flex justify-center items-center bg-[#0000009d] shadow-black shadow-xl z-[10]">
      <div className="p-4 gap-2 flex-col min-h-[250px] bg-white text-black flex w-[450px] relative rounded-md">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">YOUR MOJO</h1>
          
          <MdCancel
            onClick={() => setOpen(false)}
            className="text-black text-3xl"
          />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-6">
          <input
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="border-[1px] border-black p-2"
            placeholder="Name"
          />
          <input
            name="bio"
            value={userInfo.bio}
            onChange={handleChange}
            className="border-[1px] border-black p-2"
            placeholder="Bio"
          />
          <input
            name="userName"
            value={userInfo.userName}
            onChange={handleChange}
            className="border-[1px] border-black p-2"
            placeholder="UserName"
          />
          <button className="mt-4 text-[1rem] hover:opacity-90 p-4 rounded-none">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
