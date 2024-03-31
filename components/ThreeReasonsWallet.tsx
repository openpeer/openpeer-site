import React from "react";

interface ThreeReasonsWalletProps {
  walletName?: string; //
}

const ThreeReasonsWallet = ({ walletName }: ThreeReasonsWalletProps) => {
  return (
    <div>
      <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
        <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
          <div>
            <p className="text-[#7BB1B6] text-6xl font-extrabold">1</p>
          </div>
          <div className="w-full">
            <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
              Connect your wallet to OpenPeer
            </p>
            {walletName && (
              <p className="text-white text-3xl font-light">
                Connect {walletName} to OpenPeer and sign in to
                create an account. If you’re on mobile we recommend connecting
                through the browser in {walletName}.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
        <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
          <div>
            <p className="text-[#7BB1B6] text-6xl font-extrabold">2</p>
          </div>
          <div className="w-full">
            <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
              Find someone to trade with
            </p>
            <p className="text-white text-3xl font-light">
              Whether you’re buying or selling crypto, find another person on
              OpenPeer to trade with you. Our quick search tools make this fast
              and easy.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl transition-all duration-1000 hover:scale-105 backdrop-blur-lg">
        <div className="w-full flex p-6 md:py-16 md:px-16 relative space-x-8 items-start">
          <div>
            <p className="text-[#7BB1B6] text-6xl font-extrabold">3</p>
          </div>
          <div className="w-full">
            <p className="text-[#7BB1B6] text-4xl font-light mb-8 mt-4">
              Complete the trade
            </p>
            <p className="text-white text-3xl font-light">
              Complete the necessary steps to trade between fiat and crypto with
              the other trader on OpenPeer. Crypto is escrowed in secure and
              audited smart contracts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeReasonsWallet;
