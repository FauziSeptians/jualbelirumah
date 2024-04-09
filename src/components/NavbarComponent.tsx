import { TitleMenu } from "../data/constant/NavbarMenu";

export default function NavbarComponent() {
  return (
    <div className=" w-full h-[90px] z-[1000]">
      <div className="w-full h-full    flex items-center ">
        <div className="cursor-pointer ml-[20px] w-[12%]">{TitleMenu}</div>
        <div className="w-[88%] flex">
          <div className="bg-[#ffd34e]  border border-l border-x border-[#00000016] flex items-center px-3">
            <img src="/search.png" width={22}></img>
          </div>
          <input
            type="text"
            className="py-1 px-4 w-[700px] rounded-r-[100px] border border-x border-r border-[#00000016] bg-[#f1f3f9]"
            placeholder="Search your dream house"
          />
        </div>
      </div>
    </div>
  );
}
