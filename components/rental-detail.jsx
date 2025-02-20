"use client";

import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useState } from "react";

const RentalDetail = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  // Options for different features
  const laundryOptions = ["In-Unit", "On-site", "None"];
  const petOptions = ["Yes", "No"];
  const leaseOptions = ["Short-term", "Long-term", "Month-to-month"];
  const genderOptions = ["male", "female", "non-binary"];
  const smokingOptions = ["smoking", "non-smoking"];
  const securityOptions = ["gate", "concierge", "camera"];
  const utilityOptions = ["electricity", "water", "gas"];
  const outdoorOptions = ["balcony", "patio", "yard"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white/60 from-5% via-emerald-400/45 via-35% to-white to-70%">
      <div className="grid h-full grid-flow-row space-y-7 p-4 sm:p-6 lg:p-8">
        <div className="my-12 flex flex-col px-28 lg:flex-row">
          <div className="p-4 lg:w-1/4">
            <h3 className="text-base font-semibold text-black">
              Listing Price
            </h3>
            <p className="mt-3 font-['Urbanist'] text-4xl font-bold text-gray-900">
              $2,500
            </p>
          </div>

          <div className="flex flex-col space-y-10 lg:w-3/4">
            {/* Rental Details Section */}
            <div className="space-y-10 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Rental Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 transition duration-300 hover:bg-primary hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Bedrooms</p>
                  <p className="font-medium text-gray-900">04</p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Bathrooms</p>
                    <p className="font-medium text-gray-900">03</p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col space-y-2">
                  <p className="text-sm text-black">Square Feet</p>
                  <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                    2500
                  </p>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Laundry</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {laundryOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 1 ? "bg-altGreen tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 transition duration-300`}
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div>
                <p className="text-sm text-black">Pet friendly</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {petOptions.map((option, index) => (
                    <p
                      key={index}
                      className={`${index === 0 ? "bg-altGreen font-semibold tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 transition duration-300`}
                    >
                      {option}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Lease Details Section */}
            <div className="space-y-14 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Lease Details</h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 font-semibold tracking-wide transition duration-300 hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="py-2 text-sm text-black">Move in Date</p>
                  <div className="flex items-center gap-2 space-x-4">
                    <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                      MM/DD/YYYY
                    </p>
                    <p className="ml-3 text-nowrap rounded-2xl border border-gray-800 bg-white px-4 py-2 pt-2">
                      Available January 30 2025
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-black">Leasing Type</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {leaseOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 1 ? "bg-altGreen font-semibold tracking-wide text-white" : "bg-white text-black"} rounded-full border border-gray-700 px-4 py-2 font-semibold tracking-wide text-black transition duration-300 hover:bg-altGreen`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Room Matching Section */}
            <div className="space-y-12 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Preferences & Room Matching
                </h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 font-semibold tracking-wide transition duration-300 hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">
                    Roommate Gender Preference
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {genderOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 2 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Smoking preference</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {smokingOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Deposit Payment</p>
                  <div className="flex items-baseline gap-2 space-x-2 pt-2">
                    <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                      $500
                    </p>
                    <p className="rounded-2xl border border-gray-800 bg-white px-4 py-2">
                      20%
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">
                      Credit Check/Background Check
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 font-semibold tracking-wide text-black transition duration-300 hover:bg-altGreen hover:text-white">
                        Approved
                      </p>
                      <p className="rounded-full border border-gray-700 bg-white px-4 py-2 font-semibold tracking-wide text-black transition duration-300 hover:bg-altGreen hover:text-white">
                        Denied
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Building Features Section */}
            <div className="space-y-16 rounded-xl border border-gray-700 bg-white/40 p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  Building Features & Property Insurance
                </h3>
                <button className="cursor-pointer rounded-lg border border-gray-700 bg-white px-4 py-2 font-semibold tracking-wide transition duration-300 hover:bg-altGreen hover:text-white">
                  Learn More
                </button>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Security Feature</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {securityOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index === 1 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">Utilities included</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {utilityOptions.map((option, index) => (
                        <p
                          key={index}
                          className={`${index === 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                        >
                          {option}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mb-4 border border-gray-700" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col">
                  <p className="text-sm text-black">Outdoor space</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {outdoorOptions.map((option, index) => (
                      <p
                        key={index}
                        className={`${index != 0 ? "bg-white text-black" : "bg-altGreen font-semibold tracking-wide text-white"} rounded-full border border-gray-700 bg-altGreen px-4 py-2 font-semibold tracking-wide`}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex">
                  <div className="self-stretch border-r-2 border-gray-800"></div>
                  <div className="flex flex-col pl-2">
                    <p className="text-sm text-black">
                      Minimum Property Insurance
                    </p>
                    <div className="flex items-baseline gap-2 space-x-2 pt-2">
                      <p className="font-['Urbanist'] text-lg font-semibold leading-relaxed text-gray-900">
                        $375
                      </p>
                      <p className="rounded-2xl border border-gray-800 bg-white px-4 py-2">
                        Approximate monthly cost
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* down form */}
        <div className="flex w-[1168px] max-w-[1200px] justify-between place-self-center font-['Urbanist'] backdrop-blur-xl">
          {/* Left Section */}
          <div className="grow basis-1/3">
            <h3 className="mb-4 text-4xl font-medium leading-normal tracking-wider text-gray-900">
              Inquire About
              <div className="font-bold tracking-normal text-black">
                Metropolitan Haven
              </div>
            </h3>
            <p className="mb-6 text-balance tracking-wide text-gray-600">
              Interested in this property? Fill out the form below, and our real
              estate experts will get back to you with more details, including
              scheduling a viewing and answering any questions you may have.
            </p>
            <button
              className="-ml-28 hidden opacity-85 hover:opacity-100 md:mt-32 md:block"
              onClick={scrollToTop}
            >
              <Image
                src="https://pqrdckeuqfydcgbgrxcg.supabase.co/storage/v1/object/public/assets/icons/scrolltopicon.svg"
                width={150}
                height={150}
                alt="Scroll to top of page"
                className="size-12 drop-shadow-xl"
              />
            </button>
          </div>

          {/* Right Section - Form */}
          <div className="min-h-[542px] grow basis-2/3">
            {!submitted && (
              <form action="" className="space-y-6 p-9">
                {/* Name Fields */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="fname"
                      className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="fname"
                      placeholder="Enter first name"
                      className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="Lname"
                      className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="Lname"
                      placeholder="Enter last name"
                      className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                {/* Email and Phone Fields */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter phone number"
                      className="w-full rounded-md border border-gray-800 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    />
                  </div>
                </div>

                {/* Property Selection */}
                <div>
                  <p className="mb-2 text-sm font-bold tracking-wide text-black">
                    Selected property:
                  </p>
                  <select
                    name="property"
                    id="property"
                    disabled
                    className="w-full rounded-md bg-white px-4 py-2 caret-white focus:outline-none focus:ring-1 focus:ring-emerald-800/25"
                  >
                    <option value="Downtown Condo, Toronto Canada">
                      Metropolitan Haven
                    </option>
                    <option value="Mansion in Regina. Canada">
                      Mansion in Regina. Canada
                    </option>
                    <option value="Apartment in Toronto">
                      Apartment in Toronto
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-semibold tracking-wide text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your message here"
                    className="w-full rounded-md border border-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-800"
                    rows="4"
                  ></textarea>
                </div>

                {/* Terms and Submit Button */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 rounded border border-gray-300 accent-primaryGreen focus:ring-emerald-800/50"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm tracking-wide text-gray-700"
                    >
                      I agree with <u>Terms of Use</u> and <u>Privacy Policy</u>
                    </label>
                  </div>
                  <button
                    type="submit"
                    onClick={() => {
                      setSubmitted(true);
                      toast({
                        title: "Property Inquiry Successful",
                        description:
                          "Thank you for your interest into Metropolitan Haven. You will receive a message from the landlord, Colin, soon!",
                      });
                    }}
                    className="rounded-md bg-primary px-6 py-2 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-emerald-300 hover:text-emerald-950"
                  >
                    Send Your Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <div>
        <iframe
          width="100%"
          height="500"
          src="https://maps.google.com/maps?width=1660&amp;height=500&amp;hl=en&amp;q=Toronto%20canada+(homi%20apartment%20rental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default RentalDetail;
