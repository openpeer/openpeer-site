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

        {/* <div className="w-full lg:w-4/5 mb-40 m-auto backdrop-blur-md border border-[#30353B] rounded-2xl transform bg-gradient-to-r from-[#3C9AAA]/50 to-transparent transition-all duration-1000 hover:scale-105"> */}


    <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#30353B] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
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

    <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#30353B] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
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

    <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#30353B] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
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
