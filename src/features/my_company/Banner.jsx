import React from "react";
import { useUser } from "../auth/useUser";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Banner = () => {
  const {
    user: {
      bannerUrl,
      userInfo: { pic, name },
    },
  } = useUser();

  return (
    <>
      <div className="relative mb-24 ">
        <div className="z-0 h-48 w-full overflow-hidden rounded-xl bg-background md:h-72">
          <img
            src={`${API_BASE_URL}/${bannerUrl}`}
            alt="Company banner"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          <img
            src={pic ? `${API_BASE_URL}/${pic}` : "src/assets/default_user.jpg"}
            alt="Company logo"
            className="h-32 w-32 rounded-full border-4 border-white bg-white object-cover shadow-md md:h-40 md:w-40"
          />
        </div>
      </div>
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-bold text-primary">{name}</h1>
      </div>
    </>
  );
};

export default Banner;
