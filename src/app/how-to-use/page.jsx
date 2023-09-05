import Image from 'next/image'
import React from 'react'
import img1 from "../../../public/assets/images/chose-service.png"
import img2 from "../../../public/assets/images/location.png"
import img3 from "../../../public/assets/images/job-done.png"
import img4 from "../../../public/assets/images/payment.png"
import customer from '../../../public/assets/images/customer.png'
import worker from '../../../public/assets/images/worker-img-copy.png'
import Link from 'next/link'

const uses = [
    {
        img: img1,
        heading: "Choose a service",
        para: "Initiate a service request by choosing the appropriate service category and the right amount of work.",
    },
    {
        img: img2,
        heading: "Set your location",
        para: "Set your desired location, and let the mumtaz app do the rest in finding a nearby pro-worker",
    },
    {
        img: img3,
        heading: "Approve the work",
        para: "Completed work is ready for your approval. You can modify/cancel the job anytime before its completion",
    },
    {
        img: img4,
        heading: "Payment & feedback",
        para: "You can pay via multiple payment options at your ease. You may also rate the worker via feedback.",
    }
]

function HowToUse() {
    return (

        <>
            <div className='px-36 py-20  max-lg:px-0' id='how-works'>
                <div className=' bguses bg-left  bg-no-repeat bg-cover'>
                    <div className='ml-10 pt-8'>
                        <h1 className=' font-bold my-4 text-3xl  text-black'>How to use Mumtaz App?</h1>
                        <p className=' text-lg font-medium text-black w-1/2 max-lg:w-full'>It’s really that easy! This app is designed so you get the desired servicein just four easy steps.</p>
                    </div>
                    <div className=' flex justify-around py-20 max-lg:justify-center items-center flex-wrap'>

                        {
                            uses.map((data, index) => (
                                <div className=' w-64 h-[400px] rounded-full flex flex-col justify-center items-center px-5 py-20 m-5  bg-white' key={index}>
                                    <div className=' w-28'>
                                        <Image src={data.img} alt=''></Image>
                                    </div>
                                    <h1 className=' text-lg text-black font-semibold mt-2'>{data.heading}</h1>
                                    <p className=' text-base text-center text-[#707070] text-ellipsis font-medium my-4'>{data.para}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div>
                    <div className='  max-md:px-4 mt-28 flex justify-between max-md:flex-col max-md:justify-center items-center'>

                        <div className=' w-[45%] max-md:w-full relative my-2 h-auto'>
                            <Image src={worker} alt='' ></Image>
                            <div className=' absolute top-0  flex flex-col justify-center w-full mt-8'>
                                <h1 className=' text-4xl text-black font-bold text-center max-md:text-2xl max-sm:text-lg'>Become a pro worker</h1>
                                <p className=' text-xl my-2 text-center max-sm:text-base'>Join mumtaz and start earning today</p>
                                <Link href={"/worker-app"}>
                                    <div className=' bg-[#626AFF] hover:bg-[#F4F4F4] border-[3px] border-[#626AFF]  text-lg max-md:text-sm max-md:px-2 m-auto mt-5 px-5  cursor-pointer rounded-lg text-white hover:text-[#626AFF]  w-fit font-semibold py-2'>
                                        mumtaz app for workers
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='w-[45%] max-md:w-full relative my-2 h-auto'>
                            <Image src={customer} alt='' ></Image>
                            <div className=' absolute top-0  flex flex-col justify-center w-full mt-8'>
                                <h1 className=' text-4xl text-black font-bold text-center max-md:text-2xl max-sm:text-lg'> Get mumtaz for customers</h1>
                                <p className=' text-xl my-2 text-center max-sm:text-base'>Get your things done in just few taps</p>
                                <Link href={"/customer-app"}>
                                    <div className=' bg-[#626AFF] hover:bg-[#F4F4F4] border-[3px] border-[#626AFF] text-lg max-md:text-sm max-md:px-2 m-auto mt-5 px-5  cursor-pointer rounded-lg text-white hover:text-[#626AFF] w-fit font-semibold py-2'>
                                        mumtaz app for customers
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' w-full bg-[#f5f6fa] bg-img-grid bg-cover bg-no-repeat'>
                <div className=' p-20'>
                    <h1 className=' text-center text-2xl text-black font-semibold mb-3'>Subscribe for Mumtaz app news!</h1>
                    <p className=' text-center font-medium text-base'>* You’ll get only relevant news once a week</p>
                    <div className=' bg-white flex px-4 py-1 rounded-full my-5 max-w-[730px] m-auto justify-center items-center '>
                        <input
                            type='text'
                            placeholder='Subject'
                            className=' bg-transparent border-none target:border-none placeholder-[#A3A3A3] outline-none w-full rounded-full my-2 px-5 py-2'
                        />
                        <div className=' bg-[#626AFF] hover:text-[#626AFF] border-[#626AFF] border-[3px] cursor-pointer hover:bg-[#F4F4F4] w-fit py-3 font-semibold px-6 text-white rounded-full '>Subscribe</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToUse