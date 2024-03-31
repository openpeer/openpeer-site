import React from "react";
import Image from "next/image";
import Link from "next/link";

import metamask from "../public/wallets/metamask.svg";
import trustwallet from "../public/wallets/trustwallet.svg";
import phantom from "../public/wallets/phantom.svg";
import rainbow from "../public/wallets/rainbow.svg";
import robinhood from "../public/wallets/robinhood.svg";
import imtoken from "../public/wallets/imtoken.svg";
import frontier from "../public/wallets/frontier.svg";
import coinbase from "../public/wallets/coinbase.svg";
import zerion from "../public/wallets/zerion.svg";

const WalletSelector = () => {
  return (
    <div>
      <div className="w-full">
        <p className="text-white text-center text-4xl mb-16 font-light">
          Choose your wallet below
        </p>
      </div>

      <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl lg:transition-all lg:duration-1000 lg:hover:scale-105 backdrop-blur-lg">
        <div className="w-full flex flex-col p-6 space-y-8 justify-center items-start md:flex-row md:space-y-0 md:space-x-5 md:py-10 md:pl-10 md:px-10 relative">
          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image
                  src={metamask}
                  alt="MetaMask"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/MetaMask" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    MetaMask
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={coinbase}
                  alt="Coinbase"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Coinbase" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Coinbase
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={zerion}
                  alt="Zerion"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Zerion" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Zerion
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image src={trustwallet} alt="Trust Wallet" className="rounded-full svg-max-flags" />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Trust-Wallet" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Trust Wallet
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={rainbow}
                  alt="Rainbow"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Rainbow" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Rainbow
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={frontier}
                  alt="Frontier"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Frontier" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Frontier
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image
                  src={phantom}
                  alt="Phantom"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Phantom" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Phantom
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={imtoken}
                  alt="imToken"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/imToken" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    imToken
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={robinhood}
                  alt="Robinhood"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href="/p2p-trading-wallet/Robinhood" target="_blank">
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Robinhood
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSelector;
