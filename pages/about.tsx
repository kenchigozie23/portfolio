import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";
import { skills } from "@/Data/Data";
import Skills from "@/components/Skills";
export default function about() {
  return (
    <>
      <Head>
        <title>Kenneth | About</title>
      </Head>
      <Wrapper pageIndex={2}>
        <div className="flex flex-col gap-12 lg:flex-row items-center justify-center mb-12 min-h-screen lg:mb-0 pt-28 lg:pt-0">
          <Image
            src={"/Untitled design.png"}
            width={300}
            height={300}
            alt={"about image"}
          />
          <div className="lg:w-1/2 lg:ml-8 max-w-md md:max-w-xl">
            <div className="uppercase font-semibold text-sm text-WhiteGray">
              - Introduction
            </div>
            <div className="font-semibold text-3xl mt-8 text-White uppercase">
              Software Developer, <span className="text-[#0ef]">Freelancer</span> & UI/UX Designer. 
            </div>
            <p className="text-WhiteGray text-md mt-8 leading-7">
              {" "}
              I'm a software developer, IT-Specialist and ux/ui designer,I  specialize in creating intuitive frontend project and software with creative eye for
              design and a strong focus on delivering elegant and intuitive
              interfaces. Excited to collaborate on new projects!
            </p>
            <div className="flex gap-8 mt-8">
              <Link
                href="/contact"
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Contact Me
              </Link>
              <a
                href="/pdf/Resume_Ken.pdf"
                download
                className="text-Orange font-semibold text-sm uppercase hover:underline"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        <Skills skills={skills}/>
      </Wrapper>
    </>
  );
}
