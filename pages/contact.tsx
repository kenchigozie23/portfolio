import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { contacts } from "@/Data/Data";
import { toast } from "react-toastify";
import { useEffect } from "react";

// import { FormEvent } from "react";
export default function contact() {
  // function submitHandler(e: FormEvent<HTMLFormElement>) {
  //   e.preventDefault()
  // }

  return (
    <>
      <Head>
        <title>Kenneth | Contact</title>
      </Head>
      <Wrapper
        pageIndex={4}
        className="text-White gap-12 flex flex-col justify-center items-center lg:flex-row pt-28 lg:pt-0"
      >
        <div className="md:px-6 py-6 text-center">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold">
            <span className="text-[#0ef]">Contact</span>
          </div>
          <p className="leading-8 mb-8 text-sm max-w-xl mt-10 text-WhiteGray">
            If you're looking for a skilled frontend developer to help bring
            your web application ideas to life, feel free to contact me. Let's
            discuss how I can contribute to your team and deliver top-notch
            results.
          </p>
          <div>
            {contacts.map((contact) => (
              <div className="mt-6" key={contact.id}>
                <div className="text-xl font-medium mb-2">{contact.title}</div>
                <div className="text-sm text-WhiteGray">{contact.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-[30rem] px-6 text-center py-6 shadow-ShadowBlur">
          <div className="uppercase md:text-4xl text-3xl md:tracking-widest tracking-wide font-semibold mb-10">
            Contact <span className="text-[#0ef]">Form</span>{" "}
          </div>
          <form
            action="https://getform.io/f/bf559128-abe6-4906-890d-29c673357287"
            method="POST"
          >
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Name"
                name="Name"
                required
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Phone"
                name="Phone Number"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="email"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Email"
                name="Email"
              />
            </div>
            <div className="flex items-center border-b border-White py-2 mb-8">
              <input
                type="text"
                className=" appearance-none bg-transparent border-none w-full text-White mr-3 py-1 px-2 leading-tight focus:outline-none"
                placeholder="Message"
                name="Message"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-10 px-8 py-4 shadow-ShadowBlur uppercase text-sm cursor-pointer"
              onClick={() => {
                toast.success("Message Successfully Sent", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </Wrapper>
    </>
  );
}
