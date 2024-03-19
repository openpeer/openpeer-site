"use client"
import "../../../background.css"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import ButtonAnimated from "../../../../components/Button/ButtonAnimated"
import NavigationSite from "../../../../components/Navigation"
import decorationDown from '../../../../public/decoration-down.svg';
import decorationUp from '../../../../public/decoration-up.svg';
import Partners from "../../../../components/Partners"
import CountrySelector from "../../../../components/CountrySelector"
import Tokens from '../../../../public/stablecoins/USDT.svg';
import ThreeReasons from "../../../../components/ThreeReasons"
import ar from '../../../../public/flags/how-to-buy/ar.svg';

export default function Home() {
  return (
    <>
      <div>

        <NavigationSite />

        <div className="w-full flex mt-24 mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full relative flex p-6 md:py-16 md:px-16 space-x-8 items-center justify-center">

            {/* Content Box */}
            <div className=" rounded-2xl transition-all duration-1000 hover:scale-105 z-10">
              <div className="flex p-6 md:py-16 md:px-16 space-x-8 items-center justify-center">
                <div className="w-full flex-col">
                  <div className="flex-col justify-center items-center">
                    <div className="flex justify-center mb-8">
                    <Image
                        src={ar}
                        alt="USDT"
                        className=" mb-2 ml-4 how-to-image"
                      />
                      <Image
                        src={Tokens}
                        alt="USDT"
                        className=" mb-2 ml-4 how-to-image"
                      />
                      
                    </div>
                    <p className="text-white text-5xl text-center font-extrabold m-2">
                      How to buy USDT in Argentina
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-2xl text-center font-normal m-8">
                    Trade between USDT and Pesos directly from your self-custodial wallet with zero-gas fees
                      </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link href="https://app.openpeer.xyz" target="_blank" className="self-start text-center">
                      <ButtonAnimated title="GO TO APP" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="w-full flex mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-center justify-center">

            <div>
              <Image
                src={decorationUp}
                alt="Decoration Up"
                className="absolute -left-20 -top-20"
              />
            </div>

            {/* Content Box */}
            <div className="border border-[#26282D] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg z-10">
              <div className="flex p-6 md:py-16 md:px-16 space-x-8 items-center justify-center">
                <div className="ml-4">
                  <p className="text-white text-8xl font-extrabold">
                    3
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-white text-4xl font-light">
                    Reasons why you should trade USDT with OpenPeer in Argentina
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                src={decorationDown}
                alt="Decoration Down"
                className="absolute -right-20 -bottom-20"
              />
            </div>
          </div>
        </div>

        <ThreeReasons />

        <Partners />

      </div>
    </>
  )
}
