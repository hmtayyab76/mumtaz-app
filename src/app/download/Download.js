import Image from "next/image";
import React from "react";
import appstore from "../../../public/assets/images/app-store.png";
import playstore from "../../../public/assets/images/playtore.png";

function Download() {
  return (
    <div className=" bg-img-5 w-full p-20 max-lg:p-5 bg-cover bg-no-repeat">
      <h1 className=" text-4xl text-center font-bold mt-10 mb-2">
        Download now
      </h1>
      <div className="download-main p-6 max-lg:p-1 max-lg:w-full max-md:flex-col max-lg:justify-around max-md:p-10 max-sm:p-3    flex flex-wrap justify-center  w-fit rounded-full max-md:rounded-2xl m-auto">
        <div className=" flex items-center  p-10 max-lg:px-5 max-lg:py-3 max-lg:my-2 bg-white rounded-l-full max-lg:rounded-full hover:bg-[#ebbc00] cursor-pointer ">
          <div>
            <Image
              src={appstore}
              alt=""
              className=" w-[70px] max-lg:w-full"
            ></Image>
          </div>
          <div className=" ml-3">
            <h1 className=" text-2xl max-lg:text-base text-[#B8BCC2] uppercase">
              Download on the
            </h1>
            <h1 className=" text-3xl font-semibold max-lg:text-lg ">
              App Store
            </h1>
          </div>
        </div>
        <div className=" flex items-center  p-10 max-lg:px-5 max-lg:py-3 max-lg:my-2 bg-white rounded-r-full max-lg:rounded-full hover:bg-[#ebbc00] cursor-pointer ">
          <div>
            <Image
              src={playstore}
              alt=""
              className=" w-[70px] max-lg:w-full"
            ></Image>
          </div>
          <div className=" ml-3">
            <h1 className=" text-3xl max-lg:text-lg text-[#B8BCC2] uppercase">
              GET IT ON
            </h1>
            <h1 className=" text-4xl font-semibold max-lg:text-xl ">
              Google Play
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
