import Logo from "@/assets/icon.svg";
import { SiLinkedin, SiDiscord, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-10">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className={`flex items-center gap-1 whitespace-nowrap`}>
            <img alt="logo" src={Logo} className="w-[30px] rounded-full " />
            <a
              href="/"
              className="right-0 font-montserrat transition duration-500 hover:text-primary-300"
            >
              Minsi Hu
            </a>
          </div>
          <p className="my-5">
            Hey! Thanks for visiting my website. If you have any questions,
            tips, suggestions, or anything else, don't hesitate to reach out!
          </p>
          <p className="my-5">
            Also, huge thanks to{" "}
            <a
              href="https://github.com/MaximilianHollis"
              className="text-primary-500"
              target="_blank"
            >
              Max
            </a>{" "}
            for inspiration behind the website!
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <a
            href="https://www.linkedin.com/in/minsi-hu/"
            target="_blank"
            className="my-5 flex gap-1 hover:text-primary-500 transition duration-500"
          >
            <SiLinkedin className="relative top-1 text-primary-500" /> minsi-hu{" "}
          </a>
          <a
            href="https://discordapp.com/users/731839286386884631"
            target="_blank"
            className="my-5 flex gap-1 hover:text-primary-500 transition duration-500"
          >
            <SiDiscord className="relative top-1 text-primary-500" /> mimsqueeze{" "}
          </a>
          <a
            href="https://github.com/Mimsqueeze"
            target="_blank"
            className="my-5 flex gap-1 hover:text-primary-500 transition duration-500"
          >
            <SiGithub className="relative top-1 text-primary-500" /> Mimsqueeze{" "}
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">More Information</h4>
          <p className="my-5">
            You can find the source code to this Project's source code
            <a
              href="https://github.com/Mimsqueeze/website"
              target="_blank"
              className="text-primary-500"
            >
              {" "}here!
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
