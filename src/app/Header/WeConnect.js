import React from "react";
import phone from "../../../public/assets/images/Phone-Mockup-Medium.jpg";
import Image from "next/image";
import Link from "next/link";
function WeConnect() {
  return (
    <div className="px-36 max-lg:p-8 py-16 flex justify-between items-center  " >
      <div className=" w-3/5 max-lg:w-full m-5 max-lg:m-0 max-lg:p-0">
        <h2 className=" text-4xl max-lg:text-3xl max-sm:text-xl text-white font-bold mb-3">
          We connect
        </h2>
        <h1 className=" text-5xl max-lg:text-4xl max-sm:text-2xl text-white font-bold my-3 leading-normal">
          Customers with Best workers to get the job done!
        </h1>
        <p className=" text-white text-base max-lg:text-sm my-5">
          NO BARGAIN, NO LOSS: Hire the reliable worker at the most reasonable
          fixed rate and save your valuable time!
        </p>
        <Link href={"/#we-connect"} >

        <div className=" rounded-full bg-[#626AFF] text-white hover:bg-[#fff] hover:border-[#626AFF]  border-[3px]    hover:text-[#626AFF] border-white font-medium  text-base cursor-pointer py-[6px] px-[20px] w-fit">
          Learn More <span className=" ml-2">{">"}</span>
        </div>
        </Link>
      </div>
      <div className=" w-auto p-5">
        <Image
          src={phone}
          alt="Phone"
          className=" max-w-full h-[450px] rounded-2xl w-[230px] max-lg:hidden"
        ></Image>
      </div>
    </div>
  );
}

export default WeConnect;
