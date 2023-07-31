import Wrapper from "@/components/Wrapper";
import Head from "next/head";
import { toast } from "react-toastify";
import {useEffect} from 'react'
export default function Home() {
    useEffect(() => {
      toast.success('👋 Welcome to my portfolio website!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }, [])

  return (
    
    <>
      <Head>
        <title>Kenneth</title>
      </Head>
      <Wrapper pageIndex={1} className="max-w-2xl text-center flex flex-col justify-center">
        <div className="flex sm:justify-between items-center gap-4 sm:gap-0">
          <div className="text-xl sm:text-3xl uppercase text-WhiteGray font-bold">Hi I'm</div>
          <div className="sm:h-2 sm:w-[30rem] xs:w-[19rem] rounded-sm bg-Orange"></div>
        </div>
        <div className="sm:text-[7.2rem] xs:text-7xl text-5xl text-White font-medium">Kenneth</div>
        <div className="uppercase font-bold xs:text-2xl text-xl text-Orange text-end mt-8">A Frontend <br />developer</div>
      </Wrapper>
    </>
  );
}
