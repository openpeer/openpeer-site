import React from "react";
import Image from "next/image";
import Link from "next/link";

import ar from "../public/flags/how-to-buy/ar.svg";
import au from "../public/flags/how-to-buy/au.svg";
import bg from "../public/flags/how-to-buy/bg.svg";
import br from "../public/flags/how-to-buy/br.svg";
import cm from "../public/flags/how-to-buy/cm.svg";
import cn from "../public/flags/how-to-buy/cn.svg";
import co from "../public/flags/how-to-buy/co.svg";
import de from "../public/flags/how-to-buy/de.svg";
import ec from "../public/flags/how-to-buy/ec.svg";
import eg from "../public/flags/how-to-buy/eg.svg";
import es from "../public/flags/how-to-buy/es.svg";
import fr from "../public/flags/how-to-buy/fr.svg";
import gh from "../public/flags/how-to-buy/gh.svg";
import gr from "../public/flags/how-to-buy/gr.svg";
import hk from "../public/flags/how-to-buy/hk.svg";
import id from "../public/flags/how-to-buy/id.svg";
import ind from "../public/flags/how-to-buy/in.svg";
import it from "../public/flags/how-to-buy/it.svg";
import ke from "../public/flags/how-to-buy/ke.svg";
import lb from "../public/flags/how-to-buy/lb.svg";
import lv from "../public/flags/how-to-buy/lv.svg";
import mx from "../public/flags/how-to-buy/mx.svg";
import my from "../public/flags/how-to-buy/my.svg";
import ng from "../public/flags/how-to-buy/ng.svg";
import pe from "../public/flags/how-to-buy/pe.svg";
import ph from "../public/flags/how-to-buy/ph.svg";
import pk from "../public/flags/how-to-buy/pk.svg";
import ro from "../public/flags/how-to-buy/ro.svg";
import th from "../public/flags/how-to-buy/th.svg";
import tr from "../public/flags/how-to-buy/tr.svg";
import uy from "../public/flags/how-to-buy/uy.svg";
import ve from "../public/flags/how-to-buy/ve.svg";
import za from "../public/flags/how-to-buy/za.svg";


interface CountrySelectorProps {
  selectorType?: string;
}

const CountrySelector = ({ selectorType }: CountrySelectorProps) => {
  return (
    <div>
      <div className="w-full">
        <p className="text-white text-center text-4xl mb-16 font-light">
          Choose your country below
        </p>
      </div>

      <div className="w-full lg:w-4/5 mb-16 md:mb-32 m-auto border border-[#4A4C50] rounded-2xl lg:transition-all lg:duration-1000 lg:hover:scale-105 backdrop-blur-lg">
        <div className="w-full flex flex-col p-6 space-y-8 justify-center items-start md:flex-row md:space-y-0 md:space-x-5 md:py-10 md:pl-10 md:px-10 relative">
          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image
                  src={ar}
                  alt="Argentina"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                <Link href={`/${selectorType}/Argentina`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Argentina
                  </p>
                  </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={bg}
                  alt="Bulgaria"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
		

                  <Link href={`/${selectorType}/Bulgaria`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Bulgaria
                  </p>
                </Link>            
		
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={co}
                  alt="Colombia"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

                <Link href={`/${selectorType}/Colombia`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Colombia
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div >
                <Image
                  src={fr}
                  alt="France"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

			 <Link href={`/${selectorType}/France`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    France
                  </p>
</Link>
		
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={gr}
                  alt="Greece"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

			 <Link href={`/${selectorType}/Greece`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Greece
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={id}
                  alt="Indonesia"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
			 <Link href={`/${selectorType}/Indonesia`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Indonesia
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={lv}
                  alt="Latvia"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

                 			 <Link href={`/${selectorType}/Latvia`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Latvia
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={mx}
                  alt="Mexico"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Mexico`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Mexico
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={pe}
                  alt="Peru"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

                  			 <Link href={`/${selectorType}/Peru`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Peru
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={za}
                  alt="South Africa"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">

                 			 <Link href={`/${selectorType}/South-Africa`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    South Africa
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={tr}
                  alt="Turkey"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Turkey`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Turkey
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image
                  src={au}
                  alt="Australia"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Australia`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Australia
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={cm}
                  alt="Cameroon"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Cameroon`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Cameroon
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ec}
                  alt="Ecuador"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Ecuador`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Ecuador
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={de}
                  alt="Germany"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Germany`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Germany
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={hk}
                  alt="Hong Kong"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Hong-Kong`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Hong Kong
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={it}
                  alt="Italy"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Italy`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Italy
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={lb}
                  alt="Lebanon"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Lebanon`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Lebanon
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ng}
                  alt="Nigeria"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Nigeria`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Nigeria
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ph}
                  alt="Philippines"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                		
                  <Link href={`/${selectorType}/Philippines`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Philippines
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={es}
                  alt="Spain"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Spain`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Spain
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={uy}
                  alt="Uruguay"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Uruguay`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Uruguay
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 flex flex-col space-y-8 items-left justify-center">
            <div className="flex items-center">
              <div>
                <Image
                  src={br}
                  alt="Brazil"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Brazil`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Brazil
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={cn}
                  alt="China"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/China`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    China
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={eg}
                  alt="Egypt"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Egypt`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Egypt
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={gh}
                  alt="Ghana"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Ghana`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Ghana
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ind}
                  alt="India"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/India`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    India
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ke}
                  alt="Kenya"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
               	
                  <Link href={`/${selectorType}/Kenya`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Kenya
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={my}
                  alt="Malaysia"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
               	
                  <Link href={`/${selectorType}/Malaysia`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Malaysia
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={pk}
                  alt="Pakistan"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Pakistan`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Pakistan
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ro}
                  alt="Romania"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Romania`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Romania
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={th}
                  alt="Thailand"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Thailand`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Thailand
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex items-center">
              <div>
                <Image
                  src={ve}
                  alt="Venezuela"
                  className="rounded-full svg-max-flags"
                />
              </div>
              <div className="custom-min-w">
                	
                  <Link href={`/${selectorType}/Venezuela`}>
                  <p className="text-white text-3xl text-normal text-left mt-2 mr-2">
                    Venezuela
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

export default CountrySelector;
