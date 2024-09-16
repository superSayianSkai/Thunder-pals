import { Link } from "react-router-dom";
const Rough = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center  bg-[--bg-color]">
      <Link to="/">
        <div className="h-[100vh] flex flex-col justify-center items-center  bg-[--bg-color] gap-6">
          <p className="text-[--primary-color] text-xl">
            Ooops Theres is nothing here
          </p>
          <span className="px-8 runded-mdx-8 py-4 font-b text-xl rounded-sm  bg-red-600  bg-[--bg-color] text-[--primary-color]">
            Go back{" "}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Rough;
