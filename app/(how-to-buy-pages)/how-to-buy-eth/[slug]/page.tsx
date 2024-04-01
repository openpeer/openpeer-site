"use client"
import "../../../background.css"
import Link from "next/link"
import Image from "next/image"
import {useRouter} from "next/navigation"

import ButtonAnimated from "../../../../components/Button/ButtonAnimated"
import NavigationSite from "../../../../components/Navigation"
import decorationDown from '../../../../public/decoration-down.svg';
import decorationUp from '../../../../public/decoration-up.svg';
import Partners from "../../../../components/Partners"
import ETH from '../../../../public/stablecoins/ETH.svg';
import ThreeReasons from "../../../../components/ThreeReasons"

import ar from "../../../../public/flags/how-to-buy/ar.svg";
import au from "../../../../public/flags/how-to-buy/au.svg";
import bg from "../../../../public/flags/how-to-buy/bg.svg";
import br from "../../../../public/flags/how-to-buy/br.svg";
import cm from "../../../../public/flags/how-to-buy/cm.svg";
import cn from "../../../../public/flags/how-to-buy/cn.svg";
import co from "../../../../public/flags/how-to-buy/co.svg";
import de from "../../../../public/flags/how-to-buy/de.svg";
import ec from "../../../../public/flags/how-to-buy/ec.svg";
import eg from "../../../../public/flags/how-to-buy/eg.svg";
import es from "../../../../public/flags/how-to-buy/es.svg";
import fr from "../../../../public/flags/how-to-buy/fr.svg";
import gh from "../../../../public/flags/how-to-buy/gh.svg";
import gr from "../../../../public/flags/how-to-buy/gr.svg";
import hk from "../../../../public/flags/how-to-buy/hk.svg";
import id from "../../../../public/flags/how-to-buy/id.svg";
import ind from "../../../../public/flags/how-to-buy/in.svg";
import it from "../../../../public/flags/how-to-buy/it.svg";
import ke from "../../../../public/flags/how-to-buy/ke.svg";
import lb from "../../../../public/flags/how-to-buy/lb.svg";
import lv from "../../../../public/flags/how-to-buy/lv.svg";
import mx from "../../../../public/flags/how-to-buy/mx.svg";
import my from "../../../../public/flags/how-to-buy/my.svg";
import ng from "../../../../public/flags/how-to-buy/ng.svg";
import pe from "../../../../public/flags/how-to-buy/pe.svg";
import ph from "../../../../public/flags/how-to-buy/ph.svg";
import pk from "../../../../public/flags/how-to-buy/pk.svg";
import ro from "../../../../public/flags/how-to-buy/ro.svg";
import th from "../../../../public/flags/how-to-buy/th.svg";
import tr from "../../../../public/flags/how-to-buy/tr.svg";
import uy from "../../../../public/flags/how-to-buy/uy.svg";
import ve from "../../../../public/flags/how-to-buy/ve.svg";
import za from "../../../../public/flags/how-to-buy/za.svg";

export default function Country({ params }: {params: { slug: string }}) {

  const imagesMap: { [key: string]: any } = {
    Argentina: ar,
    Australia: au,
    Bulgaria: bg,
    Brazil: br,
    Cameroon: cm,
    China: cn,
    Colombia: co,
    Germany: de,
    Ecuador: ec,
    Egypt: eg,
    Spain: es,
    France: fr,
    Ghana: gh,
    Greece: gr,
    HongKong: hk,
    Indonesia: id,
    India: ind,
    Italy: it,
    Kenya: ke,
    Lebanon: lb,
    Latvia: lv,
    Mexico: mx,
    Malaysia: my,
    Nigeria: ng,
    Peru: pe,
    Philippines: ph,
    Pakistan: pk,
    Romania: ro,
    Thailand: th,
    Turkey: tr,
    Uruguay: uy,
    Venezuela: ve,
    SouthAfrica: za,
  };
  
  const currenciesMap: { [key: string]: string } = {
    Argentina: "Pesos",
    Australia: "Dollars",
    Bulgaria: "Leva",
    Brazil: "Reais",
    Cameroon: "Francs",
    China: "Yuan",
    Colombia: "Pesos",
    Germany: "Euros",
    Ecuador: "Dollars",
    Egypt: "Pounds",
    Spain: "Euros",
    France: "Euros",
    Ghana: "Cedis",
    Greece: "Euros",
    HongKong: "Dollars",
    Indonesia: "Rupiahs",
    India: "Rupees",
    Italy: "Euros",
    Kenya: "Shillings",
    Lebanon: "Pounds",
    Latvia: "Euros",
    Mexico: "Pesos",
    Malaysia: "Ringgits",
    Nigeria: "Naira",
    Peru: "Soles",
    Philippines: "Pesos",
    Pakistan: "Rupees",
    Romania: "Lei",
    Thailand: "Baht",
    Turkey: "Lira",
    Uruguay: "Pesos",
    Venezuela: "Bolívars",
    SouthAfrica: "Rands",
  };
  

const countryFromURL = params.slug;

let countryForImg;
let countryForText;
let countryForCurrency;

if (countryFromURL.includes('-')) {
  countryForText = countryFromURL.replace('-', ' ');
  countryForImg = countryFromURL.replace('-', '');
  countryForCurrency = countryFromURL.replace('-', '');
} else {
  countryForImg = countryFromURL;
  countryForCurrency = countryFromURL;
  countryForText = countryFromURL;
}

const router = useRouter();
if (!imagesMap.hasOwnProperty(countryForImg)) {
  router.push('/404');
  return;
}

const imageSrc = imagesMap[countryForImg];
const altTxt = countryForText;
const currency = currenciesMap[countryForCurrency];
  
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
                        src={imageSrc}
                        alt={altTxt}
                        className=" mb-2 ml-4 how-to-image"
                      />
                      <Image
                        src={ETH}
                        alt="ETH"
                        className=" mb-2 ml-4 how-to-image"
                      />

                    </div>
                    <p className="text-white text-5xl text-center font-extrabold m-2">
                      How to buy ETH in {countryForText}
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-2xl text-center font-normal m-8">
                      Trade between ETH and {currency} directly from your self-custodial wallet with zero-gas fees
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link href="https://app.openpeer.xyz" target="_blank" className="self-start text-center">
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
                  <p className="text-white text-8xl font-extrabold">
                    3
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-white text-4xl font-light">
                    Reasons why you should trade ETH with OpenPeer in {countryForText}
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

        <ThreeReasons />

        <Partners />

      </div>
    </>
  )
  }
