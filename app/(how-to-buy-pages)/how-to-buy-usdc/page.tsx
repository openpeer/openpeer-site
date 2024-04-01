"use client"
import "../../background.css"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import GlobeImage from "../../../public/globe.svg"
import ButtonAnimated from "../../../components/Button/ButtonAnimated"
import NavigationSite from "../../../components/Navigation"
import decorationDown from '../../../public/decoration-down.svg';
import decorationUp from '../../../public/decoration-up.svg';
import Partners from "../../../components/Partners"
import CountrySelectorUSDC from "../../../components/CountrySelectorUSDC"
import USDC from '../../../public/stablecoins/USDC.svg';

export default function Home() {
  return (
    <>
      <div>

        <NavigationSite />

        <div className="w-full flex mt-24 mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full relative flex p-6 md:py-16 md:px-16 space-x-8 items-center justify-center">

            <div>
              <Image
                src={decorationUp}
                alt="Decoration Up"
                className="absolute -left-20 -top-20"
              />
            </div>

            {/* Content Box */}
            <div className=" rounded-2xl transition-all duration-1000 hover:scale-105 z-10">
              <div className="flex p-6 md:py-16 md:px-16 space-x-8 items-center justify-center">
                <div className="w-full flex-col">
                  <div className="flex justify-center items-center">
                    <p className="text-white text-5xl text-center font-extrabold m-2">
                      How to buy USDC
                      <Image
                        src={USDC}
                        alt="USDC"
                        className="mb-2 ml-4 inline-block"
                      />
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-2xl text-center font-normal m-8">
                      Learn how to buy USDC by trading P2P on OpenPeer</p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link href="https://app.openpeer.xyz" target="_blank" className="self-start text-center">
                      <ButtonAnimated title="GO TO APP" />
                    </Link>
                  </div>
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

        <CountrySelectorUSDC />

        <Partners />

      </div>
    </>
  )
}
