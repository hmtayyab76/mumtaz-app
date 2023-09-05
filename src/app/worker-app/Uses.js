import React from "react";
import Image from "next/image";

import img8 from "../../../public/assets/images/get-registered.png";
import img9 from "../../../public/assets/images/chose-service-1.png";
import img10 from "../../../public/assets/images/location-1.png";
import img11 from "../../../public/assets/images/approved-work-done.png";

const uses = [
  {
    img: img8,
    heading: "Create an Account",
    para: "Create your account in a few easy steps",
  },
  {
    img: img9,
    heading: "Select your expertise",
    para: "Among various categories of services available on the Mumtaz app, choose your specific area of expertise.",
  },
  {
    img: img10,
    heading: "Verification Process",
    para: "Upload your national identity card and police certificate images for verification.",
  },
  {
    img: img11,
    heading: "Profile Approved",
    para: "After your application is submitted, our team will approve your profile within 2 working days.",
  },
];

function Uses() {
  return (
    <div>
      <div className="bg-img-4 bg-cover bg-no-repeat w-full px-36 max-lg:p-5 py-10">
        <div className="ml-10 pt-8">
          <h1 className="my-4 text-5xl w-[38%] text-black font-bold max-lg:w-full max-lg:text-2xl">
            Get on board, start earning
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center">
          {uses.map((data, index) => (
            <div className="flex justify-center" key={index}>
              <div className="max-w-[250px] max-h-[450px] rounded-[165px] flex flex-col justify-start items-center px-5 py-20 m-5 overflow-hidden text-ellipsis  bg-white">
                <div className=" w-[111px]">
                  <Image src={data.img} alt="" />
                </div>
                <h1 className=" text-lg text-center text-black font-semibold mt-4  ">
                  {data.heading}
                </h1>
                <p className="text-base text-center text-[#707070] font-medium my-4 line-clamp-6">
                  {data.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Uses;
