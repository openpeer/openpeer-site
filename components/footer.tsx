import React from "react";
import Image from "next/image";

import logo from "../public/logo.svg";

const FooterSite = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto p-8 md:p-16 flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col items-start md:items-start">
          <a className="text-3xl font-bold leading-none" href="#">
            <Image src={logo} alt="openpeer logo" width={160} height={51} />
          </a>
          <p className="w-80 mt-8 text-left mb-8">
            OpenPeer is a decentralised P2P exchange protocol.
          </p>
        </div>

        <div className="flex flex-col xl:space-x-6 xl:flex-row lg:space-x-4 lg:flex-row md:flex-row md:flex-wrap md:space-x-4 md:space-y-4 md:items-start md:justify-left lg:justify-center sm:space-y-4">
          <div className="flex flex-col space-y-2 md:min-w-[140px] md:ml-4 md:mt-4 sm:ml-0 sm:mt-4 mb-4 md:mb-0">
            <p className="font-bold">QUICK START</p>

            <a
              href="https://openpeer.xyz/p2p-crypto-trading/"
              rel="noreferrer"
              className="text-base relative group"
            >
              P2P Crypto Trading
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/how-to-buy-usdt/"
              rel="noreferrer"
              className="text-base relative group"
            >
              How to buy USDT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/how-to-buy-usdc/"
              rel="noreferrer"
              className="text-base relative group"
            >
              How to buy USDC
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/how-to-buy-eth/"
              rel="noreferrer"
              className="text-base relative group"
            >
              How to buy ETH
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/how-to-buy-dai/"
              rel="noreferrer"
              className="text-base relative group"
            >
              How to buy DAI
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex flex-col space-y-2 sm:mt-4 mb-4 md:mb-0">
            <p className="font-bold">P2P ALTERNATIVE</p>

            <a
              href="https://openpeer.xyz/localbitcoins-alternative/"
              rel="noreferrer"
              className="text-base relative group"
            >
              To LocalBitcoins
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/localcryptos-alternative/"
              rel="noreferrer"
              className="text-base relative group"
            >
              To LocalCryptos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex flex-col space-y-2 md:min-w-[140px] lg:min-w-[90px] sm:mt-4 mb-4 md:mb-0">
            <p className="font-bold">COMMUNITY</p>

            <a
              href="https://twitter.com/openpeer_xyz"
	      target="_blank"
              rel="noreferrer"
              className="text-base relative group"
            >
              Twitter
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://discord.gg/Wrf9BT8sZN"
	      target="_blank"
              rel="noreferrer"
              className="text-base relative group"
            >
              Discord
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://blog.openpeer.xyz/introducing-openpeer-points/"
              rel="noreferrer"
              className="text-base relative group"
            >
              OP Points
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex flex-col space-y-2 sm:mt-4 mb-4 md:mb-0">
            <p className="font-bold">RESOURCES</p>

            <a
              href="https://blog.openpeer.xyz/"
              rel="noreferrer"
              className="text-base relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://docs.openpeer.xyz"
              rel="noreferrer"
              className="text-base relative group"
            >
              Docs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/terms"
              rel="noreferrer"
              className="text-base relative group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/disclaimer"
              rel="noreferrer"
              className="text-base relative group"
            >
              Disclaimer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>

            <a
              href="https://openpeer.xyz/privacy-policy"
              rel="noreferrer"
              className="text-base relative group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSite;
