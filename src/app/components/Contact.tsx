"use client";

// import mail from "/images/Icon-mail.svg";
import Image from "next/image";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div id="contact" className="flex max-w-[1100px] flex-col justify-center items-start font-end-normal w-full gap-y-2 end-md:gap-y-4 text-white py-[50px] end-md:py-[100px] px-4 end-md:px-10">
      <p className="text-[30px] end-md:text-[40px] end-xl:text-[48px] font-end-bold">
        Get in touch
      </p>
      <div className="text-[12px] end-md:text-[14px] end-xl:text-[18px]">
        <p>We’re always looking to collaborate with partners who share our vision for secure and reliable satellite communication. Whether you’re interested in our technology, looking to collaborate, or simply want to learn more about what we do, we’d love to hear from you.</p>
      </div>

      <div className="flex gap-x-5 justify-center items-center">
        <div
          onClick={() => window.open("https://discord.gg/HMG4Wt9U", "_bank")}
        >
          <Image
            width={24}
            height={24}
            src={"/images/Icon.discord.svg"}
            alt="discord"
            className="cursor-pointer"
          />
        </div>
        <div
          onClick={() =>
            window.open("https://twitter.com/pulseonclimate", "_bank")
          }
        >
          <Image
            width={18}
            height={18}
            src={"/images/Icon.X.svg"}
            alt="twitter"
            className="cursor-pointer"
          />
        </div>
        <a
          href="mailto:andrew@endcorp.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={24}
            height={24}
            src={"/images/Icon-mail.svg"}
            alt="email"
            className="cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
