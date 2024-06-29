import { Link } from "react-router-dom";
import { SectionMenu, TitleMenu } from "../data/constant/NavbarMenu";
import { SectionNavbarMobileComponent } from "./SectionNavbarMobileComponent";
import TimeCounter from "./TimeCounter";

export default function NavbarComponent({ Path }: { Path: string }) {
  return (
    <div className=" w-full h-[70px] z-[1000] bg-primary">
      <div className="w-full h-full flex items-center justify-between">
        <div className="cursor-pointer ml-[20px] w-[12%] text-white">
          {TitleMenu}
        </div>
        <section className="hidden lg:flex 2xl:hidden gap-9 text-sm items-center tracking-wider">
          {SectionMenu.map((item) => {
            if (item.Title === Path) {
              return (
                <Link to={item.Url}>
                  <div className="text-primary bg-secondary py-2 px-5 rounded-full cursor-pointer">
                    {item.Title}
                  </div>
                </Link>
              );
            } else {
              return (
                <Link to={item.Url}>
                  <div className="text-ternery cursor-pointer">
                    {item.Title}
                  </div>
                </Link>
              );
            }
          })}
        </section>
        <div className="flex gap-5 items-center">
          <TimeCounter />
          <SectionNavbarMobileComponent />
        </div>
      </div>
    </div>
  );
}
``;
