'use client'
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

export default function Contact({}: Inputs) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:billyngchinchia@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className="h-screen flex flex-col text-center max-w-7xl px-10 justify-evenly py-20 mx-auto items-center">
      <h3 className="uppercase tracking-[20px] text-gray-500 md:text-4xl sm:text-2xl">
        contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="md:text-4xl font-semibold text-center sm:text-lg">
          I have got just what you need.{" "}
          <span className="underline decoration-[#64CCC5]/50">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#64CCC5] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-sm">+65 98390614</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#64CCC5] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-sm">120513 West Coast Drive</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#64CCC5] h-7 w-7 animate-pulse" />
            <p className="md:text-2xl sm:text-sm">billyngchinchia@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto gap-1  sm:text-sm md:text-lg"
        >
          <div className="flex flex-col md:flex-row gap-1">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#64CCC5] uppercase hover:bg-[#78f9f0] py-3 px-6 rounded-md  font-bold sm:py-2 sm:px-4 text-gray-500 tracking-[4px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
