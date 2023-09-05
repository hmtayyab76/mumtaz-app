import React from "react";
import img8 from "../../../public/assets/images/get-registered.png";
import img9 from "../../../public/assets/images/chose-service-1.png";
import img10 from "../../../public/assets/images/location-1.png";
import img11 from "../../../public/assets/images/approved-work-done.png";
import Image from "next/image";

const uses = [
  {
    img: img8,
    heading: "Get Registered",
    para: "Get yourself registered in a few easy steps. You can also sign up using social media.",
  },
  {
    img: img9,
    heading: "Choose A Service",
    para: "Initiate a service request by selecting a service and the amount of work you desire.",
  },
  {
    img: img10,
    heading: "Set Your Location",
    para: "Set a new location on the map or select from your previously saved locations",
  },
  {
    img: img11,
    heading: "Approve Work Done",
    para: "After the worker completes all the tasks, your final approval will mark the service complete.",
  },
];

function Uses() {
  return (
    <div>
      <div className=" bg-img-4 bg-cover bg-no-repeat w-full px-36 py-10 max-lg:p-10">
        <div className="ml-10 pt-8">
          <h1 className="my-4 text-black text-5xl w-[38%] font-bold max-lg:w-full max-lg:text-2xl">
            Get things done in 4 easy steps
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
