"use client";
import { useEffect, useState } from "react";
import HeaderLinks from "../Header/HeaderLinks";
import img1 from "../../../public/assets/images/Background-2.png";
import img2 from "../../../public/assets/images/Mask-Group-25.png";
import img3 from "../../../public/assets/images/Mask-Group-26.png";
import img4 from "../../../public/assets/images/Mask-Group-27.png";
import img5 from "../../../public/assets/images/Mask-Group-28.png";
import img6 from "../../../public/assets/images/Mask-Group-29.png";
import mask from "../../../public/assets/images/Mask-Group-269.png";
import Footer from "../footer/page";
const Data = [
  {
    image: img2,
    heading: "Specialized jobs find you",
    para: "automatically receive jobs based on your expertise",
  },
  {
    image: img3,
    heading: "Never go too far",
    para: "get jobs near your current location.",
  },
  {
    image: img4,
    heading: "Get a steady income flow",
    para: "support your expenses",
  },
  {
    image: img5,
    heading: "Part-time work opportunity",
    para: "a convenient source of your part-time income",
  },
  {
    image: img6,
    heading: "Flexibility",
    para: "you can modify/cancel the job anytime before its completion",
  },
];

import Image from "next/image";
import Uses from "./Uses";
import Download from "../download/Download";
import Loading from "../../component/loading/page";

function CustomerApp() {
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  return (
    <>
      {/* {
        isLoading ? <Loading /> : (
          <> */}
      <div className="w-full">
        <div className=" w-full flex-wrap flex px-36 max-lg:px-10">
          <div className=" w-1/2 p-20 max-lg:w-full pt-0 h-full overflow-hidden bg-img-0 ">
            <Image src={mask} alt=""></Image>
          </div>
          <div className=" w-1/2 p-16 pl-5 max-lg:p-5  max-lg:w-full">
            <div className="  pl-0  max-lg:p-2">
              <h2 className=" text-5xl text-black  font-semibold  my-2">
                The Mumtaz app for workers
              </h2>
              <p className=" text-base my-4 leading-relaxed">
                The Mumtaz for worker mobile app brings the solution for workers
                looking for domestic/office jobs. If you are an expert in your
                domain, we always have the right jobs for you.
              </p>
              <p className=" text-base  my-3 leading-relaxed">
                Download the Mumtaz for worker app, and create your profile in a
                few easy steps.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full bg-img-3 bg-cover bg-no-repeat  px-36 max-lg:px-10 mb-10">
          <h1 className=" text-5xl text-black w-[60%] font-bold px-0 max-lg:w-full max-lg:text-3xl">
            Mumtaz helps you in getting the right jobs
          </h1>
          <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2 pt-8">
            {Data.map((data, index) => (
              <div
                key={index}
                className="flex items-center flex-col justify-start"
              >
                <div className=" mb-5 w-full flex justify-center items-center">
                  <Image src={data.image} width={60} alt="Icon" />
                </div>
                <h1 className="text-[18px] text-black font-semibold text-center mb-3">
                  {data.heading}
                </h1>
                <p className=" text-base font-medium text-[#707070] text-center text-ellipsis">
                  {data.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Uses />
        <Download />
      </div>
      <Footer />
      {/* </>
        )
      } */}
    </>
  );
}

export default CustomerApp;
