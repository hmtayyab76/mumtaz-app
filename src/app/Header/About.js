import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/images/Background-2.png";

function About() {
  return (
    <div className=" w-full px-36 max-lg:px-5" id="we-connect">
      <div className=" w-full flex justify-between max-lg:flex-col max-lg:justify-center ">
        <div className=" w-1/2  max-lg:w-full bg2">
          <Image src={img1} alt="Image 1" className=" w-full m-auto"></Image>
        </div>
        <div className=" w-1/2 max-lg:w-full mt-5 max-lg:mt-1">
          <div className=" pl-16 pt-16 max-lg:p-2">
            <h4 className=" text-3xl text-black font-bold">
              A powerful mobile app
            </h4>
            <h2 className=" text-4xl font-semibold my-2">
              Smart solution for your home/office work
            </h2>
            <p className=" text-lg font-bold my-4 leading-relaxed">
              Hiring workers for urgent services or getting a domestic job is
              now a few taps away!
            </p>
            <p className=" text-base text-[#707070] my-3 leading-relaxed">
              The{" "}
              <span className=" text-[#626AFF]"> Mumtaz App for customer </span>
              app is among the most powerful mobile applications that help
              people do their domestic/office work by connecting them with the
              pro workers suitable for jobs such as car washing, mobile
              repairing, electric & electronics repairing, plumbing and a lot
              more tasks
            </p>
            <p className=" text-base text-[#707070] my-3 leading-relaxed">
              Get it done by professional experts, local craftsmen, and
              technicians at any time.
            </p>
            <p className=" text-base text-[#707070] my-3 leading-relaxed">
              Moreover, workers can use the{" "}
              <span className=" text-[#626AFF]"> Mumtaz App for worker </span>{" "}
              app to get the nearby work based on their specialty to earn a
              part-time income.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
