"use client";
import "../../../background.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";



import ButtonAnimated from "../../../../components/Button/ButtonAnimated";
import NavigationSite from "../../../../components/Navigation";
import decorationDown from "../../../../public/decoration-down.svg";
import decorationUp from "../../../../public/decoration-up.svg";
import Partners from "../../../../components/Partners";
import ThreeReasonsWallet from "../../../../components/ThreeReasonsWallet";

import metamask from "../../../../public/wallets/metamask.svg";
import trustwallet from "../../../../public/wallets/trustwallet.svg";
import phantom from "../../../../public/wallets/phantom.svg";
import rainbow from "../../../../public/wallets/rainbow.svg";
import robinhood from "../../../../public/wallets/robinhood.svg";
import imtoken from "../../../../public/wallets/imtoken.svg";
import frontier from "../../../../public/wallets/frontier.svg";
import coinbase from "../../../../public/wallets/coinbase.svg";
import zerion from "../../../../public/wallets/zerion.svg";

export default function Wallet({ params }: { params: { slug: string } }) {

  const walletsMap: { [key: string]: any } = {
    MetaMask: metamask,
    TrustWallet: trustwallet,
    Phantom: phantom,
    Rainbow: rainbow,
    Robinhood: robinhood,
    imToken: imtoken,
    Frontier: frontier,
    Coinbase: coinbase,
    Zerion: zerion,
  };

  const countryFromURL = params.slug;

  let walletForImg;
  let walletForText;

  if (countryFromURL.includes("-")) {
    walletForText = countryFromURL.replace("-", " ");
    walletForImg = countryFromURL.replace("-", "");
  } else {
    walletForImg = countryFromURL;
    walletForText = countryFromURL;
  }

  const router = useRouter();
  if (!walletsMap.hasOwnProperty(walletForImg)) {
    router.push("/404");
    return;
  }

  const walletSrc = walletsMap[walletForImg];
  const altTxt = walletForText;

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
                        src={walletSrc}
                        alt={altTxt}
                        className=" mb-2 ml-4 how-to-image"
                      />
                    </div>
                    <p className="text-white text-5xl text-center font-extrabold m-2">
                      Trade P2P in {walletForText}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-2xl text-center font-normal m-8">
                      Trade crypto P2P directly from your {walletForText} wallet
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link
                      href="https://app.openpeer.xyz"
                      target="_blank"
                      className="self-start text-center"
                    >
                      <ButtonAnimated title="GO TO APP" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex mb-16 md:mb-32 m-auto rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
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
                  <p className="text-white text-8xl font-extrabold">3</p>
                </div>
                <div className="w-full">
                  <p className="text-white text-4xl font-light">
                    Reasons why you should trade crypto P2P with OpenPeer in {walletForText}
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

        <ThreeReasonsWallet walletName={walletForText}  />

        <Partners />
      </div>
    </>
  );
}
