import Image from "next/image";
import { useWindowSize } from "../hooks/use-window-size";

type Props = {};

const Partners = (props: Props) => {
  const windowSize = useWindowSize()[0];
  return (
    <div id="partners" className="flex max-w-[1100px] flex-col w-full justify-center items-start py-[75px] gap-y-[50px] font-end-regular px-4 end-md:px-10">
      <p className="text-white text-[30px] end-md:text-[40px] end-xl:text-[48px] text-left font-end-bold">
        Partners
      </p>
      <div className="flex gap-x-8 items-center">
        <div className={`${windowSize > 400 ? 'min-w-[200px] max-w-[200px]' : 'min-w-[100px] max-w-[100px]'}`}>
          <Image
            src={
              "https://images.squarespace-cdn.com/content/v1/63924a31c9ec443385c51c86/33df3686-0ffa-41d9-80f7-c5aa4498f62b/Logo+White.png"
            }
            alt="UK Space Agency Logo"
            width={windowSize > 400 ? 200 : 100}
            height={windowSize > 400 ? 200 : 100}
            // layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div>
          <p
            onClick={() =>
              window.open("https://www.ukspaceaccelerator.co.uk/leo", "_blank")
            }
            className="text-end-light-blue  hover:underline cursor-pointer text-[20px] end-md:text-[30px] text-left font-end-bold"
          >
            UK Space Agency Accelerator
          </p>
          <p className="text-[14px] end-md:text-[20px] text-white">
            END Corp. has been selected to join the UK Space Agency Accelerator
            LEO program, to refine our focus, and scale rapidly.
          </p>
        </div>
      </div>

      <div className="flex gap-x-8 items-center">
        <div className={`${windowSize > 400 ? 'min-w-[200px] max-w-[200px]' : 'min-w-[100px] max-w-[100px]'}`}>
          <Image
            src={
              "https://static.wixstatic.com/media/57817d_43d5715f7cce450d980d322d049d9ca8~mv2.png/v1/crop/x_0,y_198,w_1650,h_1100/fill/w_1568,h_1046,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/White%20transparent%20(3).png"
            }
            alt="UK Space Agency Logo"
            width={windowSize > 400 ? 200 : 100}
            height={windowSize > 400 ? 200 : 100}
            // layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div>
          <p
            onClick={() => window.open("https://x-ender.space", "_blank")}
            className="text-end-light-blue hover:underline cursor-pointer text-[20px] end-md:text-[30px] text-left font-end-bold"
          >
            X-Ender Space
          </p>
          <p className="text-[14px] end-md:text-[20px] text-white">
            Experts in enabling Autonomy of fleets of machines, E-Ender Space
            and END Corp. have a close working relationship and MOU in place to
            solidify our partnership in bringing secure data protocols to space
            to satisfy all our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
