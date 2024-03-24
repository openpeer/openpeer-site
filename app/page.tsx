"use client";
import "./background.css";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import HeroImage from "../public/illustrations/hero-image.png";
import KeysImage from "../public/illustrations/keys.png";
import GlobeImage from "../public/illustrations/globe.png";
import NoChainImage from "../public/illustrations/nochain.png";
import ButtonAnimated from "../components/Button/ButtonAnimated";
import NavigationSite from "../components/Navigation";
import Partners from "../components/Partners";

interface FeatureParams {
  title: string;
  description: string;
  // image?: StaticImageData;
  cta: string;
  url: string;
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
  );
};

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full flex items-center justify-center">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="absolute top-24 md:-top-10 -z-20"
          />
        </div>
        <NavigationSite />
        <div className="w-full flex flex-col items-center mt-24 mb-24">
          <div className="text-center mb-10">
            <h1 className="text-5xl lg:text-7xl font-bold antialiased">
              Decentralised P2P <br className="hidden lg:block" /> Exchange
            </h1>
          </div>
          <div className="font-normal">
            <div className="flex flex-row text-center space-x-4 text-2xl mb-8">
              Buy crypto directly to your wallet from your{" "}
              <br className="hidden md:block" /> bank account with zero-fees.
            </div>
          </div>
          <div className="text-left mt-0 md:mt-10">
            <Link href="https://app.openpeer.xyz" target="_blank">
              <ButtonAnimated title="LAUNCH APP" />
            </Link>
          </div>
        </div>

        {/* <div className="w-full lg:w-4/5 mb-40 m-auto backdrop-blur-md border border-[#30353B] rounded-2xl transform bg-gradient-to-r from-[#3C9AAA]/50 to-transparent transition-all duration-1000 hover:scale-105"> */}
        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#30353B] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
          <div className="w-full flex flex-col-reverse lg:flex-row p-6 md:py-16 md:px-16 relative space-x-4 items-center">
            <div className="w-full lg:w-1/2">
              <div className="text-[#DBDBDB] text-xl mb-4">Decentralised</div>
              <h3 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00D4E5] via-[#15B8DE]">
                Your Keys, Your Coins
              </h3>
              <p className="text-[#DBDBDB] text-xl">
                Only you control your crypto. Buy and sell crypto with fiat
                directly from your self-custody wallet like Metamask and Trust
                Wallet. No need to hold your funds on an exchange.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:self-end">
              <Image className="md:ml-14" src={KeysImage} alt={""} />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto backdrop-blur-md border border-[#30353B] rounded-2xl transform bg-gradient-to-l from-transparent to-transparent transition-all duration-1000 hover:scale-105 hover:bg-gradient-to-l">
          <div className="w-full flex flex-col lg:flex-row p-6 md:py-16 md:px-16 relative items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative flex justify-center lg:absolute lg:top-20 lg:left-10">
                <Image src={GlobeImage} alt={""} />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-[#DBDBDB] text-xl mb-4">Any Place</div>
              <h3 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00D4E5] via-[#15B8DE]">
                Global Availability
              </h3>
              <p className="text-[#DBDBDB] text-xl">
                Trade with anyone anywhere with any currency and payment method.
                OpenPeer is an open protocol on Ethereum & other EVM-compatible
                networks.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto backdrop-blur-md border border-[#30353B] rounded-2xl transform bg-gradient-to-l from-transparent to-transparent transition-all duration-1000 hover:scale-105 hover:bg-gradient-to-l">
          <div className="w-full flex flex-col-reverse lg:flex-row p-6 md:py-16 md:px-16 relative">
            <div className="w-full lg:w-1/2">
              <div className="text-[#DBDBDB] text-xl mb-4">Any Chain</div>
              <h3 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00D4E5] via-[#15B8DE]">
                Multichain Settlement
              </h3>
              <p className="text-[#DBDBDB] text-xl">
                Trade between fiat and crypto on multiple EVM chains including
                Ethereum, Polygon, Binance Smart Chain and Optimism. Get funds
                directly in your wallet on the chain of your choice.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative flex justify-center lg:absolute lg:top-10 lg:right-20">
                <Image src={NoChainImage} alt={""} />
              </div>
            </div>
          </div>
        </div>

        <Partners />

        <div className="flex flex-col justify-around mx-2 lg:mx-8 lg:space-x-8 lg:flex-row mb-24">
          {[
            {
              title: "P2P Merchants",
              description:
                "Trade peer-to-peer with verified and high quality traders in your country. Get priority support from the OpenPeer team as you grow your trading business.",
              cta: "Get in touch",
              url: "mailto:merchants@openpeer.xyz",
            },
            {
              title: "Wallets",
              description:
                "Add OpenPeer to your self-custody wallet as a P2P fiat on/off ramp solution for your users. Quickly integrate our SDK and open up global markets for your business.",
              cta: "Get in touch",
              url: "mailto:partners@openpeer.xyz",
            },
            {
              title: "Dapps & Games",
              description:
                "Onboard users into any on-chain asset both fungible or non-fungible. Users choose the asset and their fiat currency and OpenPeer will do the rest.",
              cta: "Get in touch",
              url: "mailto:partners@openpeer.xyz",
            },
          ].map((item) => (
            <Feature key={item.title} {...item} />
          ))}
        </div>

        <div className="w-full lg:w-2/3 m-auto flex flex-col lg:flex-row items-center justify-center mb-24 md:space-x-10 bg-gradient-to-r from-[#020AD4]/50 to-transparent p-8 rounded-xl">
          <div className="text-center space-x-4 text-2xl mb-10 pt-6">
            Buy crypto directly to your wallet from your{" "}
            <br className="hidden md:block" /> bank account with zero-fees.
          </div>
          <Link href="https://app.openpeer.xyz" target="_blank">
            <ButtonAnimated title="LAUNCH APP" />
          </Link>
        </div>
      </div>
    </>
  );
}
