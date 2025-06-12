import Logo from "/icon.png";
import { SiGithub } from "react-icons/si"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 h-14`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full`}>
            {/* LEFT SIDE */}
            <div className={`flex items-center gap-1 whitespace-nowrap`}>
              <img alt="logo" src={Logo} className="w-[30px] rounded-full "/>
              <a href="/" className="right-0 transition duration-500 hover:text-primary-300 font-montserrat">Minsi Hu</a>
            </div>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`flex justify-center w-full`}>
                <div className={`${flexBetween} gap-8 text-md`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Skills"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="p-2">
            <a href="https://github.com/Mimsqueeze" target="_blank" className={`${flexBetween} whitespace-nowrap w-full gap-1 transition duration-500 hover:text-primary-300`}>
            <SiGithub className="h-8 w-8"/> Github | Visit →
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;