import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/select-service.png";
import img2 from "../../../public/assets/images/save-time.png";
import img3 from "../../../public/assets/images/job-status.png";
import img4 from "../../../public/assets/images/know-your-cost.png";
import img5 from "../../../public/assets/images/hire-multiple.png";

import midimg from "../../../public/assets/images/why-oar-1.png";
function WhyMumtaz() {
  return (
    <>
      <div id="whyMumtaz" className="my-[50px] py-[10px] w-full"></div>
      <div className=" bg-[#2d0c4d] max-lg:px-10  xl:px-36 px-0 py-10 mt-10 ">
        <div>
          <h1 className=" text-5xl max-lg:text-3xl text-center font-bold text-[#fff] my-5">
            Why Mumtaz services?
          </h1>
          <p className=" text-[#EBBC00] font-semibold text-base text-center">
            This is how Mumtaz brings convenience to your whole lifestyle!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 justify-center mt-10 max-lg:mt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-1 m-5">
            <div className=" flex max-w-[400px] items-center">
              <div className=" w-48">
                <Image src={img1} alt="" className=" w-full"></Image>
              </div>
              <div className=" p-5">
                <h1 className=" text-[#EBBC00] font-bold text-[17px]  ">
                  Select pro services
                </h1>
                <p className=" text-[#fff] font-medium  text-sm mt-2">
                  Get services from an electrician, plumber, car washer,
                  cleaner, etc.
                </p>
              </div>
            </div>
            <div className=" flex max-w-[400px] items-center self-end mt-8 md:mt-0">
              <div className=" w-48">
                <Image src={img3} alt="" className=" w-full"></Image>
              </div>
              <div className=" p-5">
                <h1 className=" text-[#EBBC00] font-bold text-[17px]  ">
                  Schedule a work
                </h1>
                <p className=" text-[#fff] font-medium  text-sm mt-2">
                  Hire a pro either right away or schedule at your convenience.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center">
            <Image
              src={midimg}
              alt=""
              className=" w-[356px] h-[356px] rounded-full bg-transparent"
            ></Image>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-1 m-5">
            <div className=" flex lg:flex-row-reverse max-w-[400px] items-center">
              <div className=" w-48 ">
                <Image src={img4} alt="" className=" w-full"></Image>
              </div>
              <div className=" p-4">
                <h1 className=" text-[#EBBC00] font-bold text-[17px]  ">
                  Know your costs
                </h1>
                <p className=" text-[#fff] font-medium  text-sm mt-2">
                  A reasonable fixed cost meets your budget and saves you from
                  bargaining.
                </p>
              </div>
            </div>
            <div className=" flex max-w-[400px] items-center lg:flex-row-reverse mt-8 md:mt-0">
              <div className=" w-48">
                <Image src={img2} alt="" className=" w-full"></Image>
              </div>
              <div className=" p-4">
                <h1 className=" text-[#EBBC00] font-bold text-[17px]  ">
                  Save your time
                </h1>
                <p className=" text-[#fff] font-medium  text-sm mt-2">
                  No need to go out to find a worker and save your valuable
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <div className="flex lg:flex-col max-w-[400px] items-center  mt-8">
            <div className="w-48 lg:w-24">
              <Image src={img5} alt="" className=" w-full"></Image>
            </div>
            <div className="p-4">
              <h1 className=" text-[#EBBC00] font-bold text-[17px]  lg:text-center ">
                Hire multiple pros
              </h1>
              <p className=" text-[#fff] font-medium  text-sm mt-2 lg:text-center">
                Hire a plumber, an electrician, a phone technician, or other
                pros at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyMumtaz;
