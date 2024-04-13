"use client";
import "../background.css";

import Image from "next/image";
import Link from "next/link";

import ButtonAnimated from "../../components/Button/ButtonAnimated";
import NavigationSite from "../../components/Navigation";
import Partners from "../../components/Partners";
import CountrySelector from "../../components/CountrySelector";
import SadCat from "../../public/sad-cat.gif";

export default function Home() {
  const pageURL = "p2p-crypto-trading";
  return (
    <>
      <div>
        <NavigationSite />

        <div className="w-full flex mt-4 mb-4 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full relative flex pt-4 md:pt-12 md:px-16 space-x-8 items-center justify-center">
            {/* Content Box */}
            <div className=" rounded-2xl transition-all duration-1000 hover:scale-105 z-10">
              <div className="flex pt-6 md:px-16 space-x-8 items-center justify-center">
                <div className="w-full flex-col">
                  <div className="flex justify-center items-center">
                    <h1 className="text-white text-5xl text-center font-extrabold m-2">
                      Are you using a VPN?
                    </h1>
                  </div>
                  <div>
                    <p className="text-white text-3xl text-center font-normal m-8">
                     Unfortunately, connections to OpenPeer from your country are blocked due to local regulations.
                    </p>
                  </div>
                  <div>
                    <Image src={SadCat} alt="Sad cat" className="mx-auto" />
                  </div>
                  <div>
                    <p className="text-white text-3xl text-center font-normal m-8">
                      Explore countries where OpenPeer is available{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CountrySelector selectorType={pageURL} />

        <Partners />
      </div>
    </>
  );
}
