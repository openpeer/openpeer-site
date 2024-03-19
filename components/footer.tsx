import React from 'react';
import Image from 'next/image';

import logo from '../public/logo.svg';
import twitterLogo from '../public/twitter.svg';
import discord from '../public/discord.svg';

const FooterSite = () => {
  return (
    <div className="text-white">
      <div className="container mx-auto p-8 md:p-16 flex flex-col justify-center md:flex-row md:justify-between">
        <div className="flex flex-col items-start md:items-start">
          <a className="text-3xl font-bold leading-none" href="#">
            <Image src={logo} alt="openpeer logo" width={160} height={51} />
          </a>
          <p className="w-80 mt-8 text-left">
            OpenPeer is a decentralised P2P exchange protocol.
          </p>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row mt-8 items-start md:items-center md:mt-0 justify-center md:justify-start">
          <a
            href="https://docs.openpeer.xyz"
            target="_blank"
            rel="noreferrer"
            className="md:px-2 text-base relative group"
          >
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
          </a>
          <a href="/disclaimer" className="md:px-2 text-base relative group">
            Disclaimer
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
          </a>
          <a href="/terms" className="md:px-2 text-base relative group">
            Terms
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
          </a>
          <a href="/privacy-policy" className="md:px-2 text-base relative group">
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#020AD4] transition-all group-hover:w-full"></span>
          </a>
          <a
            href="https://twitter.com/openpeer_xyz"
            target="_blank"
            rel="noreferrer"
            className="md:px-2 text-base relative group"
          >
            <Image src={twitterLogo} alt="openpeer logo" width={18} height={18} />
          </a>
          <a
            href="https://discord.gg/Wrf9BT8sZN"
            target="_blank"
            rel="noreferrer"
            className="md:px-2 md:m-auto"
          >
            <Image src={discord} alt="openpeer logo" width={18} height={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSite;
