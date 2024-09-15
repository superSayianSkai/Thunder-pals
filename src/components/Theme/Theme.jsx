import { faCloudBolt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";

import { IoThunderstormOutline } from "react-icons/io5";

const Theme = () => {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem("selectedTheme");
    return savedTheme === "dark" ? false : true; // `true` for light, `false` for dark
  });

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return; // Early exit if body is not found

    const theme = mode ? "light" : "dark";
    body.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => !prevMode);
  };

  return (
    <div className="font-icon2 flex items-center text-[--secondary-color]">
      {mode ? (
        <IoThunderstormOutline
          className="text-[25px] hover:text-blue-700 text-[--primary-color]"
          icon={faCloudBolt}
          onClick={toggleTheme}
        />
      ) : (
        <CiLight
          className="text-[25px] text-[--primary-color] hover:text-blue-700"
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};

export default Theme;
