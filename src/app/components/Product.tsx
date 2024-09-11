type Props = {};

const Product = (props: Props) => {
  return (
    <div className="flex max-w-[1100px] flex-col w-full justify-center items-start py-[75px] gap-y-[50px] font-end-regular px-4 end-md:px-10">
      <p className="text-white text-[30px] end-md:text-[40px] end-xl:text-[48px] text-left font-end-bold">
      What We’re Building
      </p>
      <div>
      <p className="text-end-light-blue text-[20px] end-md:text-[30px] text-left font-end-bold">
      DePin (Decentralised Physical Infrastructure Networks) for ground station communication with satellites:
      </p>
      <p className="text-[14px] end-md:text-[20px] text-white">
      We are advancing a decentralised ground station system that incorporates blockchain technologies, such as zero-knowledge proofs and post-quantum encryption, to secure and verify satellite data at the point of reception on the ground. 
Our scalable solution brings failsafe reliability to data collection on the ground, while offering more opportunities for data download from orbiting satellites on each rotation of the Earth, resulting in faster data acquisition for humanity&apos;s most important datasets. 

      </p>
      </div>

      <div>
      <p className="text-end-light-blue text-[20px] end-md:text-[30px] text-left font-end-bold">
      Novel hardware design:
      </p>
      <p className="text-[14px] end-md:text-[20px] text-white">
      END Corp. are heavily involved in R&D of new hardware technologies to ensure higher signal quality and fast context switching to allow for communication to all satellites on any frequency from a single ground station. 
Our goal is to create a trusted ecosystem where data integrity is ensured from the point of collection to its end-use.

      </p>
      </div>
      
      
    </div>
  );
};

export default Product;
