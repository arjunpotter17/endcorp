type Props = {};

const Identity = (props: Props) => {
  return (
    <div className="flex max-w-[1100px] flex-col w-full justify-center items-start py-[75px] gap-y-[50px] font-end-regular px-4 end-md:px-10">
      <p className="text-white text-[30px] end-md:text-[40px] end-xl:text-[48px] text-left font-end-bold">
        Who we are
      </p>
      <div>
      <p className="text-end-light-blue text-[20px] end-md:text-[30px] end-xl:text-[38px] text-left font-end-bold">
        “The only difference between screwing around and science is writing it
        down.”
      </p>
      <p className="text-[12px] end-md:text-[18px] text-left font-end-bold text-white">
        We are a team of hackers, distributed systems engineers, and data
        scientists.
      </p>
      </div>
      
      <p className="text-[14px] end-md:text-[20px] text-white">
        END Corp. specialises in decentralised ground station technology
        designed to securely transmit and verify satellite data. Our primary
        focus is on climate data, which is crucial across multiple industries.
        With cutting-edge encryption and post-quantum cryptography, we ensure
        the integrity and reliability of data from space to its final
        application.
      </p>
    </div>
  );
};

export default Identity;
