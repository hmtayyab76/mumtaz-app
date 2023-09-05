"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import location from "../../../public/assets/images/location (1).png";
import Footer from "../footer/page";
import Loading from "../../component/loading/page";
import { useForm } from "react-hook-form";
import axios from "axios";
function Contact_Us() {
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandle = handleSubmit((data) => {
    setLoading(true);
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      axios.post("https://devapi.mumtazservices.com/contact-us", formData);
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  });
  return (
    <>
      {isLoading && <Loading />}
      <div className="bg-[#f5f6fa] w-full pb-20">
        <div className="bg-img-6 px-28 max-lg:px-5  py-5 bg-cover bg-no-repeat bg-center">
          <div className="py-10">
            <p className="text-xl text-[#5119af] text-center">
              Let’s get connected
            </p>
            <h1 className="text-5xl font-semibold text-center w-1/2 max-lg:w-full max-md:text-3xl m-auto">
              Contact us for more information
            </h1>
          </div>
          <div className="w-full flex  flex-wrap justify-around  max-lg:flex-row mb-20 max-lg:mb-5">
            <div className="w-[35%] max-lg:w-full max-lg:my-5 px-5 py-10 bg-white rounded-2xl ">
              <p className="text-lg font-semibold text-[#5119af]">
                Let’s get connected
              </p>
              <p className="text-sm font-medium">
                For any question or suggestion, feel free to contact us by
                submitting your message. You will receive the response from our
                customer support team very soon.
              </p>
              <div className="flex items-center mt-5">
                <div>
                  <Image src={location} alt="" />
                </div>
                <p className="ml-3 text-sm">
                  16 Street, Al Shifa, Dammam 32236, Saudi Arabia
                </p>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <Image src={location} alt="" />
                </div>
                <p className="ml-3 text-sm">alibahadur667@gmail.com</p>
              </div>
              <div className="flex items-center mt-2">
                <div>
                  <Image src={location} alt="" />
                </div>
                <p className="ml-3 text-sm">0599036658</p>
              </div>
            </div>
            <div className=" w-[55%] max-lg:w-full bg-white mt-0 mx-2 max-lg:mx-0 px-5 rounded-xl ">
              <form onSubmit={submitHandle}>
                <p className=" px-5 pt-10 text-base text-[#5119af]">
                  Leave a message
                </p>
                <div className=" flex w-full mt-5 max-md:flex-col">
                  <div className="flex flex-col max-md:w-full justify-between w-[50%] mx-5 max-lg:mx-0 md:pr-5">
                    <input
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Field is Required ",
                        },
                      })}
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] outline-[#707070] rounded-full my-2 px-5 py-4"
                    />
                    {errors.name && (
                      <div className="pl-4 Invalid mx-auto w-full max-w-[276px]">{`${errors.name?.message}`}</div>
                    )}

                    <input
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Field is Required ",
                        },
                      })}
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] outline-[#707070] rounded-full my-2 px-5 py-4"
                    />
                    {errors.email && (
                      <div className="pl-4 Invalid mx-auto w-full max-w-[276px]">{`${errors.email?.message}`}</div>
                    )}
                    <input
                      name="phone"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Field is Required ",
                        },
                      })}
                      type="tel"
                      placeholder="Phone"
                      className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] outline-[#707070] rounded-full my-2 px-5 py-4"
                    />
                    {errors.phone && (
                      <div className="pl-4 Invalid mx-auto w-full max-w-[276px]">{`${errors.phone?.message}`}</div>
                    )}
                    <input
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Field is Required ",
                        },
                      })}
                      type="text"
                      placeholder="Subject"
                      className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] outline-[#707070] rounded-full my-2 px-5 py-4"
                    />
                    {errors.subject && (
                      <div className="pl-4 Invalid mx-auto w-full max-w-[276px]">{`${errors.subject?.message}`}</div>
                    )}
                  </div>
                  <div className="relative w-1/2 max-md:w-full   max-lg:mr-0  ">
                    <textarea
                      {...register("message", {
                        required: {
                          value: true,
                          message: "Field is Required ",
                        },
                      })}
                      name="message"
                      placeholder="Message"
                      className="bg-[#F4F4F4] border-none placeholder-[#A3A3A3] outline-[#707070] rounded-2xl p-5 h-64 w-full"
                    />
                    {errors.message && (
                      <div className="pl-4 Invalid mx-auto w-full max-w-[276px]">{`${errors.message?.message}`}</div>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-lg mt-5 p-3 px-4 font-semibold float-right m-5 bg-[#626AFF] text-white hover:text-[#626AFF] hover:bg-white border-[#626AFF]  border-[3px] "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact_Us;
