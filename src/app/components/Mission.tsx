
type Props = {};

const Mission = (props: Props) => {
  return (

      <div
        id="mission"
        className={`flex w-full max-w-[1100px] font-end-regular flex-col justify-center items-center h-full gap-y-[25px] py-[50px] end-md:py-[200px] px-4 end-md:px-10`}
      >
        <p className="text-white w-full text-left text-[30px] font-end-bold end-md:text-[40px] end-xl:text-[48px]">
          Our Mission
        </p>
        <p className="text-white w-full text-left text-[14px] end-md:text-[16px] end-lg:text-[20px] end-xl:text-[24px]">
        At END Corp., our mission is to safeguard the world&apos;s most vital data, collected in space. 
We are committed to developing innovative technologies that not only protect data from cyber threats but also enhance its reliability for critical decision-making processes. By pioneering secure, decentralised communication solutions, we aim to contribute to a more 

          <span className="text-end-light-blue  ">
            {' '}
            informed and resilient global society.
          </span>
        </p>
      </div>

  );
};

export default Mission;
