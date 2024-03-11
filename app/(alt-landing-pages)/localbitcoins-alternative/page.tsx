"use client"
import "../../background.css"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import HeroImage from "../../../public/illustrations/hero-image.png"
import KeysImage from "../../../public/illustrations/keys.png"
import GlobeImage from "../../../public/illustrations/globe.png"
import NoChainImage from "../../../public/illustrations/nochain.png"
import ButtonAnimated from "../../../components/Button/ButtonAnimated"
import NavigationSite from "../../../components/Navigation"
import outlierVentures from '../../../public/partners/outlierventures.png';
import polygonLogoWhite from '../../../public/partners/polygonlogowhite.png';
import w3iLogoWhite from '../../../public/partners/w3ilogowhite.png';
import bitfwdLogoWhite from '../../../public/partners/bitfwdlogowhite.png';
import ybbFoundationLtd from '../../../public/partners/ybbFoundation.png';
import decorationDown from '../../../public/decoration-down.svg';
import decorationUp from '../../../public/decoration-up.svg';
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
    <div className="flex flex-col mb-12 backdrop-blur-md  border border-[#30353B] rounded-2xl p-8">
      <h3 className="text-2xl mb-4">{title}</h3>
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
            className="absolute top-24 md:-top-10 -z-20"
          />
        </div>
        <NavigationSite />
        <div className="w-full flex flex-col items-center mt-24 mb-24">
          <div className="text-center mb-10">
            <h1 className="text-5xl lg:text-7xl font-bold antialiased">
              Looking for a LocalBitcoins Alternative? <br className="hidden lg:block" />
              Say hello to OpenPeer
            </h1>
            <p className="text-[#DBDBDB] text-xl">
              Trade between crypto and fiat directly from your self-custodial wallet with zero-gas fees
            </p>
          </div>
          <div className="text-center mt-0 md:mt-10">
            <Link href="https://app.openpeer.xyz" target="_blank">
              <ButtonAnimated title="START HERE" />
            </Link>
          </div>
          <div className="text-center mt-0 md:mt-10">
            <Link href="https://app.openpeer.xyz" target="_blank">
              <ButtonAnimated title="BOOK A DEMO" />
            </Link>
          </div>
        </div>


        <div className="w-full flex lg:w-4/5 mb-16 md:mb-32 m-auto">
          <div className=" relative flex p-6 md:py-16 md:px-16 ">

            <div className=" flex rounded-2xl">
              <div className=" flex p-6 md:py-16 md:px-16 space-x-8">
                <p className="text-white text-4xl font-light">
                  Over <span className="text-[#15B7DC] font-bold">10k traders</span> trade crypto P2P in <span className="text-[#15B7DC] font-bold">over 100 fiat currencies</span> with OpenPeer.
                </p>
              </div>
            </div>

            <div className="border border-[#26282D]  rounded-2xl backdrop-blur-lg z-10 z-10 border p-1 md:py-4 md:px-4 flex space-x-8 items-center justify-center">
              <div className="flex flex-col space-y-4">
                <Image
                  src={NG}
                  alt="Nigeria"
                  className="rounded-full"
                />
                <Image
                  src={PH}
                  alt="Philippines"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4 ">
                <Image
                  src={GH}
                  alt="Ghana"
                  className="rounded-full"
                />
                <Image
                  src={EU}
                  alt="European Union"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4 ">
                <Image
                  src={CN}
                  alt="China"
                  className="rounded-full"
                />
                <Image
                  src={AR}
                  alt="Argentina"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col space-y-4 ">
                <Image
                  src={IN}
                  alt="India"
                  className="rounded-full"
                />
                <Image
                  src={CO}
                  alt="Colombia"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-6xl">+</div>
              </div>
            </div>


          </div>
        </div>




        <div className="w-full flex lg:w-4/5 mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
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

        <div className="w-full flex justify-center items-center flex-col text-center mb-16 md:mb-40">
          <h3 className="text-4xl mb-12">Backers and Partners</h3>
          <div className="w-full flex flex-col justify-center items-center md:flex-row gap-8">
            <div className="grid grid-cols-3 gap-1 px-3 sm:grid-cols-4 md:px-0 lg:grid-cols-4 lg:gap-4">
              <div className="flex items-center justify-center rounded-md border border-white/20 p-2 hover:bg-gradient-to-r from-[#010AD4]/50 to-transparent h-16">
                <Image src={outlierVentures} alt="Outlier Ventures" />
              </div>
              <div className="flex items-center justify-center rounded-md border border-white/20 p-2 hover:bg-gradient-to-r from-[#010AD4]/50 to-transparent h-16">
                <Image src={polygonLogoWhite} alt="Polygon" />
              </div>
              <div className="flex items-center justify-center rounded-md border border-white/20 p-2 hover:bg-gradient-to-r from-[#010AD4]/50 to-transparent h-16">
                <Image className="w-20" src={w3iLogoWhite} alt="W3i" />
              </div>
              <div className="flex items-center justify-center rounded-md border border-white/20 p-2 hover:bg-gradient-to-r from-[#010AD4]/50 to-transparent] h-16">
                <Image src={bitfwdLogoWhite} alt="Bitfwd" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
