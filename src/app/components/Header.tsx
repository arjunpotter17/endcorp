import Image from 'next/image';
import coin from '../../../images/coin.svg';
import Logo from '/images/endcorp.png';
// import { scrollToDiv } from '../../../constants/scrollFunction';
// import Layout from '../../../app/Layout/layout';
// import { transition } from '../../../constants/transition';

type Props = {};

const Header = (props: Props) => {
  return (
  
      <div

        className="flex max-w-[1100px] w-full font-end-normal flex-col gap-y-10 end-md:flex-row-reverse justify-center items-center end-md:justify-between min-h-screen gap-x-10 px-4 end-md:px-10"
      >
        <div className="w-full flex justify-center max-h-[450px] max-w-[450px]">
          <Image src={"/images/endcorp.png"} alt="Logo" height={450} width={450} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-between gap-y-8 w-full">
          <p className="text-white text-[40px] font-endcoin-bold endcoin-lg:text-[48px] endcoin-xl:text-[64px] leading-none">
            Endcorp
          </p>
          <p className="text-end-light-blue text-[40px] font-end-bold end-lg:text-[48px] end-xl:text-[64px] leading-none">
          Secure Satellite Communication for a Sustainable Future.
          </p>

          
          
        </div>
      </div>

  );
};

export default Header;
