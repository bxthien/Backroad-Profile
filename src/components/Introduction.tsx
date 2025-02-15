import banner from "../assets/main.jpeg";

const Introduction = () => {
  return (
    <div
      className="h-screen flex flex-col items-center justify-center text-white"
      style={{
        background: `linear-gradient(rgba(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)), url(${banner}) center/cover no-repeat`,
      }}
    >
      <h1 className="text-7xl font-bold uppercase flex">
        Welcome to <p className="text-[#2caeba] mx-4">XT</p> Profile
      </h1>
      <p className="mt-4 text-base">
        This website briefly introduces personal information. Thank you for
        following.
      </p>
      <a
        href="#tours"
        className="py-3 px-6 text-2xl bg-white text-teal-400 uppercase border-[2px] mt-6 hover:bg-transparent hover:text-white hover:border-white hover:border-[2px]"
      >
        explore tours
      </a>
    </div>
  );
};

export default Introduction;
