"use client";
import { useEffect, useState } from "react";
import HeaderLinks from "../Header/HeaderLinks";
import img1 from "../../../public/assets/images/Background-2.png";
import img2 from "../../../public/assets/images/Mask-Group-25.png";
import img3 from "../../../public/assets/images/Mask-Group-26.png";
import img4 from "../../../public/assets/images/Mask-Group-27.png";
import img5 from "../../../public/assets/images/Mask-Group-28.png";
import img6 from "../../../public/assets/images/Mask-Group-29.png";
import groupimg from "../../../public/assets/images/Group-1890.png";
const Data = [
  {
    image: img2,
    heading: "Reduce your workload",
    para: "Assign domestic chore to workers and ease down your life",
  },
  {
    image: img3,
    heading: "Know your cost",
    para: "the app shows a fixed cost before hiring a pro worker",
  },
  {
    image: img4,
    heading: "Save your time",
    para: "No need to rush outside, simply get a fast service via your phone",
  },
  {
    image: img5,
    heading: "Schedule the job",
    para: "Acquire services either right away or at your convenience in the future.",
  },
  {
    image: img6,
    heading: "Flexibility",
    para: "you can modify/cancel the job anytime before its completion.",
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
  //   }, 2000);
  // }, []);
  return (
    <>
      {/* {
        isLoading ? (
          <Loading />
        ) : ( */}
      <div className="w-full">
        <div className=" w-full flex-wrap flex px-36 mb-10 max-lg:px-10">
          <div className=" w-1/2 p-20 max-lg:w-full pt-0 h-full overflow-hidden ">
            <Image src={groupimg} alt=""></Image>
          </div>
          <div className=" w-1/2 p-16 pl-2 max-lg:p-5  max-lg:w-full">
            <div className=" max-lg:p-2">
              <h2 className=" text-4xl text-black font-bold  my-2">
                The Mumtaz app for customers
              </h2>
              <p className=" text-lg font-bold my-4 leading-relaxed">
                Are you tired of searching for an expert when you need an urgent
                service?
              </p>
              <p className=" text-base my-3 leading-relaxed">
                The Mumtaz for customer mobile app brings you an easy solution
                by connecting you with the right worker to get your
                domestic/office chores done instantly.
              </p>
              <p className=" text-base my-3 leading-relaxed">
                Don’t rush to find the worker outside! Simply download and
                register yourself on the Mumtaz for customer mobile app, and
                we’ll find the right expert for you.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full bg-img-3 bg-cover bg-no-repeat  px-36 max-lg:px-10 mb-10">
          <h1 className="  text-5xl w-[60%] text-black font-bold px-0 max-lg:w-full max-lg:text-3xl">
            Mumtaz app brings convenience
          </h1>
          <div className="grid lg:grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-2 pt-8">
            {Data.map((data, index) => (
              <div
                key={index}
                className="my4 flex items-center flex-col justify-start"
              >
                <div className=" mb-5 w-full flex justify-center items-center">
                  <Image src={data.image} width={60} alt="Icon" />
                </div>
                <h1 className="text-lg text-black font-bold text-center mb-3">
                  {data.heading}
                </h1>
                <p className=" text-base text-[#707070] text-ellipsis font-medium text-center">
                  {data.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Uses />
        <Download />
      </div>
      {/* )
      } */}
    </>
  );
}

export default CustomerApp;
