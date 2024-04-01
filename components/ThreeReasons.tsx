import React from "react";

const ThreeReasons = () => {
    return (
        <div>
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
                        <p className="text-white text-3xl font-light">
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
                        <p className="text-white text-3xl font-light">
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
                        <p className="text-white text-3xl font-light">
                            KYC requirements are up to each individual trader and based on the rules within their country. Your private data is never held or can be accessed by OpenPeer.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThreeReasons;
