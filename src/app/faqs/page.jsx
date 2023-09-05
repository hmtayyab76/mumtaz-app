"use client";
import React, { useState, useEffect } from "react";
import Loading from "../../component/loading/page";
import Footer from "../footer/page";

const customQuestions = [
  {
    id: 1,
    question: "Are the workers verified?",
    answer:
      "The worker profiles are thoroughly verified by our administration staff following standard procedures which ensures that the worker arriving at your desired location has known identity & no felony background so that you don’t have any issues related to your personal security. Our administration ensures complete safety of both our customers and workers.",
  },
  {
    id: 2,
    question: "If I have issues with a service, what can I do about it?",
    answer:
      "You can cancel your active service anytime and launch a complaint at your will. Our complaint method encompasses almost all possible situations that a customer/worker may face during the course of the service and in case a situation needs more explanation, we give the option to explain it. Our representative team will promptly respond to your complaints and resolve the issues.",
  },
  {
    id: 3,
    question: "What are the different modes of payment for a service?",
    answer:
      "You can pay via multiple modes of payment that we offer in the Mumtaz app. You can pay via cash, credit/debit or easy paisa. We also offer the Mumtaz credit that you can top up using your credit/debit card or receive the return amount as Mumtaz credit.",
  },
  {
    id: 4,
    question:
      "Does the cost of service vary with respect to the material goods used in the service?",
    answer:
      "The cost of material goods are not associated with the service cost set in the Mumtaz app. The customer is liable to provide material goods required by the worker in order to complete the task. Mumtaz app simply provides the standard price of the service based on the quantity of work.",
  },
  {
    id: 5,
    question: "What if I cancel a scheduled service?",
    answer:
      "The customer can cancel a scheduled service any time before the scheduled time is reached. In case of a schedule cancellation, the concerned worker will also be notified.  If a concerned worker cancels a scheduled service for some reason, we always make sure that our customers get any available worker right at their defined schedule.",
  },
  {
    id: 6,
    question: "Can I bargain with the worker about the cost of the services?",
    answer:
      "The service costs are fixed and are at par with the cost of the same services in the market. We provide affordable services to our customers without any hassle of bargaining and agreement with the worker. A professional worker is always readily available for services and we make sure that our customers are always aware of the total costs of the services before the service even commences.",
  },
  {
    id: 7,
    question:
      "Can I set a desired location for services while being at any other location?",
    answer:
      "You can always get a service in any location you desire. Whether you are working in your office but you need a service in your home. You can set your home address and get updates on the progress of the service on your phone.",
  },
  {
    id: 8,
    question: "Can I only get one service done at a time?",
    answer:
      "You can hire multiple workers for multiple services at the same time. Whether you have problems with your electrical appliances or power supplies, your car needs care or your home/office needs cleaning, you are just a few taps away on your mobile phone to get everything done at the very same time.",
  },
  {
    id: 9,
    question:
      "  What if I had any bad experiences of using services on Mumtaz app?",
    answer:
      "Our efficient customer support team is always available to help our users resolve their issues regarding our services. Our customer support team ensures complete user satisfaction.",
  },
];

function FAQs() {
  const [questions, setQuestions] = useState(customQuestions);
  // const [isLoading, setLoading] = useState(true);

  // Function to toggle the answer visibility
  function toggleAnswer(id) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, isOpen: !q.isOpen } : q))
    );
  }

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
      <div>
        <div className="w-full bg-img-7 bg-center bg-cover bg-no-repeat px-36 max-lg:px-10  pb-20 pt-10 max-lg:pt-5 ">
          <h1 className="text-5xl max-lg:text-3xl text-center font-semibold text-white max-sm:text-xl   ">
            Some quick answers
          </h1>
          <div className="m-10 max-lg:m-2">
            {questions.map((q) => (
              <div key={q.id} className={` py-2 `}>
                <div
                  className={`cursor-pointer border-[2px] transition-all  items-center p-5 rounded-2xl justify-between ${
                    q.isOpen ? "border-yellow-400" : "border-gray-300"
                  } `}
                  onClick={() => toggleAnswer(q.id)}
                >
                  <div className=" flex items-center justify-between">
                    <h3
                      className={`text-lg max-md:text-base max-sm:text-sm font-semibold text-white ${
                        q.isOpen ? "text-yellow-400" : ""
                      }`}
                    >
                      {q.question}
                    </h3>
                    <span
                      className={` text-white text-4xl max-md:text-xl ${
                        q.isOpen ? "text-yellow-400" : ""
                      } `}
                    >
                      {q.isOpen ? "-" : "+"}
                    </span>
                  </div>
                  {q.isOpen && (
                    <p className="mt-2 text-base text-white p-2 max-md:text-sm">
                      {q.answer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQs;
