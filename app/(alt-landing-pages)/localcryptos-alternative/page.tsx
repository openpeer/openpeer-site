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
import AR from '../../../public/flags/AR.svg';
import CN from '../../../public/flags/CN.svg';
import CO from '../../../public/flags/CO.svg';
import EU from '../../../public/flags/EU.svg';
import PH from '../../../public/flags/PH.svg';
import GH from '../../../public/flags/GH.svg';
import IN from '../../../public/flags/IN.svg';
import NG from '../../../public/flags/NG.svg';

interface FeatureParams {
  title: string
  description: string
  // image?: StaticImageData;
  cta: string
  url: string
}

const Feature = ({ title, description, cta, url }: FeatureParams) => {
  return (
    <div className="flex flex-col backdrop-blur-md border border-[#30353B] rounded-2xl p-4">
      <h3 className="text-2xl">{title}</h3>
      <p className="font-normal text-base md:text-sm mb-4">{description}</p>
      <Link href={url}>
        <ButtonAnimated smallButton title={cta} />
      </Link>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full flex items-right">
          <Image
            src={GlobeImage}
            alt="Globe Image"
            className="absolute -top-20 -z-20 right-0"
          />
        </div>
        <NavigationSite />
        <div className="w-full flex flex-col mt-24 mb-24">
          <div className="text-center w-2/3">
            <h1 className="text-6xl font-extrabold antialiased text-left">
              Looking for a LocalCryptos <br className="hidden lg:block" />
              Alternative? <br className="hidden lg:block" />
              Say hello to OpenPeer
            </h1>
            <p className="text-[#DBDBDB] text-left text-2xl font-normal mt-8 mb-8">
              Trade between crypto and fiat directly from your <br className="hidden lg:block" />self-custodial wallet with zero-gas fees
            </p>

          </div>

          <div className="flex gap-4">
            <div className="text-center mt-0">
              <Link href="https://app.openpeer.xyz" target="_blank" className="self-start">
                <ButtonAnimated title="GO TO APP" />
              </Link>
            </div>

          </div>
        </div>


        <div className="w-full flex justify-between mb-16 md:py-16 md:px-16">
          <div className=" relative flex">
            <div className=" flex rounded-2xl mr-8">
              <div className=" flex space-x-8 items-center">
                <p className="text-white text-4xl font-light">
                  Over <span className="text-[#15B7DC] font-bold">10k traders</span> trade crypto P2P in <span className="text-[#15B7DC] font-bold">over 100 fiat currencies</span> with OpenPeer.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex border border-[#26282D] rounded-2xl backdrop-blur-lg z-10 p-8 flex items-center justify-center">
              <div className="flex flex-col space-y-8 items-center justify-center">
                <Image
                  src={NG}
                  alt="Nigeria"
                  className="rounded-full svg-max-size"
                />
                <Image
                  src={PH}
                  alt="Philippines"
                  className="rounded-full svg-max-size"
                />
              </div>
              <div className="flex flex-col space-y-8 items-center justify-center">
                <Image
                  src={GH}
                  alt="Ghana"
                  className="rounded-full svg-max-size"
                />
                <Image
                  src={EU}
                  alt="European Union"
                  className="rounded-full svg-max-size"
                />
              </div>
              <div className="flex flex-col space-y-8 items-center justify-center w-90 h-180">
                <Image
                  src={CN}
                  alt="China"
                  className="rounded-full svg-max-size"
                />
                <Image
                  src={AR}
                  alt="Argentina"
                  className="rounded-full svg-max-size"
                />
              </div>
              <div className="flex flex-col space-y-8 items-center justify-center">
                <Image
                  src={IN}
                  alt="India"
                  className="rounded-full svg-max-size"
                />
                <Image
                  src={CO}
                  alt="Colombia"
                  className="rounded-full svg-max-size"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl">+</div>
              </div>
            </div>


          </div>
        </div>




        <div className="w-full flex mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full relative flex p-6 md:py-16 md:px-16 relative space-x-8 items-center justify-center">

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
                    Reasons why you should use OpenPeer for P2P crypto trading
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

        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
            <div>
              <p className="text-[#7BB1B6] text-6xl font-extrabold">
                1
              </p>
            </div>
            <div className="w-full">
              <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
                Decentralised & Self-Custodial
              </p>
              <p className="text-white text-4xl font-light">
                Only you have access to your funds. Connect to OpenPeer with your self-custody wallet like Metamask. Interact with other traders through secure smart contracts.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
            <div>
              <p className="text-[#7BB1B6] text-6xl font-extrabold">
                2
              </p>
            </div>
            <div className="w-full">
              <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
                Low Trading Fees & Zero Gas Fees
              </p>
              <p className="text-white text-4xl font-light">
                OpenPeer sponsors all gas fees on the protocol so you don’t need to pay for onchain transactions. You only need to pay a 0.3% fee when selling crypto on the protocol.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
            <div>
              <p className="text-[#7BB1B6] text-6xl font-extrabold">
                3
              </p>
            </div>
            <div className="w-full">
              <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
                Private & Secure
              </p>
              <p className="text-white text-4xl font-light">
                KYC requirements are up to each individual trader and based on the rules within their country. Your private data is never held or can be accessed by OpenPeer.
              </p>
            </div>
          </div>
        </div>

        <Partners />

      </div>
    </>
  )
}
