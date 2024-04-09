import FooterComponent from "../FooterComponent";
import NavbarComponent from "../NavbarComponent";
import SideBarComponent from "../SideBarComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarComponent />
      <div className="flex ">
        <div className="w-[12%]">
          <SideBarComponent />
        </div>
        <div className="w-[88%] p-3 ">
          <div className="">{children}</div>
        </div>
      </div>
      <div className="mt-6">
        <FooterComponent />
      </div>
    </>
  );
}
