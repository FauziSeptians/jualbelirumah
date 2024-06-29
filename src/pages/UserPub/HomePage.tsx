import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import CardComponent from "../../components/CardComponent";
import CardLocationComponent from "../../components/CardLocationComponent";
import CardPopularComponent from "../../components/CardPopularComponent";
import MiniCardPopularComponent from "../../components/MiniCardPopularComponent";
import SectionMenuComponent from "../../components/SectionMenuComponent";
import { Filterprice, sectionMenu } from "../../data/constant/SectionMenu";
import { useDataExplore } from "../../hooks/useDataExplore";
import { useDataPerumahanRecomendation } from "../../hooks/useDataPerumahanRecomendation";
import { ourServices } from "../../data/dummy/ourServices";
import { motion } from "framer-motion";

export default function HomePage() {
  const [selectedsectionMenus, setSectionMenu] = useState(sectionMenu[0]);
  const [selectedFilterPrice, setFilterPrice] = useState(Filterprice[0]);
  const [selectedFilterPrice1, setFilterPrice1] = useState(Filterprice[0]);
  const { dataRecomendation } = useDataPerumahanRecomendation();
  const { dataExplore } = useDataExplore();
  const [inputSearch, setInputSearch] = useState("");

  console.log(dataRecomendation);

  return (
    <section className="flex w-full h-full">
      <section
        className="flex flex-col gap-[50px] w-full h-[820px] overflow-y-auto md:px-5 px-4 custom-scrollbar"
        id="scroll"
      >
        <section className="h-[400px] relative">
          <img
            src="https://www.wallpaperuse.com/wallp/59-593288_m.jpg"
            className={`${
              inputSearch ? "blur-[1px]" : ""
            } "object-cover h-full w-full rounded-md`}
          ></img>
          <div>
            {inputSearch ? (
              <motion.div
                className="absolute w-full h-full top-0 bg-black rounded-md opacity-25"
                initial={{ opacity: 0, y: "10px" }}
                animate={{ opacity: 0.25, y: "0px" }}
              ></motion.div>
            ) : null}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center px-5">
            <div className="bg-white flex gap-3 py-2 px-4 rounded-md max-w-md w-full flex-col">
              <div className="flex gap-3 items-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Cari property"
                  className="text-xs w-full border-none appearance-none outline-none focus:outline-none"
                  onChange={(e: any) => setInputSearch(e.target.value)}
                />
              </div>
              {inputSearch ? (
                <div className="text-xs">{inputSearch}</div>
              ) : null}
            </div>
          </div>
        </section>
        <section id="section-recomandation" className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-md font-semibold">Explore Your Dream Home</div>
            <div className="flex gap-6 opacity-[0.6]">
              {sectionMenu.map((item: string) =>
                selectedsectionMenus == item ? (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={true}
                    setHoverText={(val) => setSectionMenu(val)}
                    defaultText={selectedsectionMenus}
                  />
                ) : (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={false}
                    setHoverText={(val) => setSectionMenu(val)}
                    defaultText={selectedsectionMenus}
                  />
                )
              )}
            </div>
          </div>
          <div className="flex w-full overflow-x-scroll gap-3 custom-scrollbar pb-8">
            {dataExplore.additionalData.map((item, idx) => {
              if (idx < 4) {
                return <CardComponent data={item} />;
              }
            })}
          </div>
        </section>

        <section id="section-location1" className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-md font-semibold">Bandung</div>
            <div className="flex gap-6 opacity-[0.6]">
              {Filterprice.map((item) =>
                selectedFilterPrice == item ? (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={true}
                    setHoverText={(val) => setFilterPrice(val)}
                    defaultText={selectedFilterPrice}
                  />
                ) : (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={false}
                    setHoverText={(val) => setFilterPrice(val)}
                    defaultText={selectedFilterPrice}
                  />
                )
              )}
            </div>
          </div>
          <div className="flex flex-row  md:gap-6 overflow-x-auto w-full md:w-full custom-scrollbar pb-8">
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
          </div>
        </section>
        <section id="section-location1" className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-semibold">Jakarta</div>
            <div className="flex gap-6 opacity-[0.6]">
              {Filterprice.map((item) =>
                selectedFilterPrice1 == item ? (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={true}
                    setHoverText={(val) => setFilterPrice1(val)}
                    defaultText={selectedFilterPrice1}
                  />
                ) : (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={false}
                    setHoverText={(val) => setFilterPrice1(val)}
                    defaultText={selectedFilterPrice1}
                  />
                )
              )}
            </div>
          </div>
          <div className="flex flex-row md:gap-6 overflow-x-auto  w-full md:w-full custom-scrollbar pb-8">
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
            <CardLocationComponent
              Title={"Rumah dijual di Bandung"}
              Description="lorem ipsiuna wdao ok oawdkawodkw oakdosldw aokod ka"
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            />
          </div>
        </section>
        <section>
          <div className="w-full flex justify-center items-center">
            <ButtonComponent Text="Show More.." LinkURL="/property" />
          </div>
        </section>
        <section id="Banners">
          <div className="w-full h-[200px] flex justify-center items-center bg-green-300">
            INI BANNER{" "}
          </div>
        </section>
        <section id="our-services" className="relative">
          <div className="w-full sm:h-[300px] h-full flex flex-col gap-6 bg-secondary p-5 rounded-md">
            <div>
              <div className="text-md font-semibold">Our Services</div>
              <div className="text-sm">
                Provide you a nice property for your beloved family
              </div>
            </div>
            <div className="sm:absolute sm:left-0 sm:bottom-0 gap-6 mx-5 sm:flex hidden">
              {ourServices.map((value: any) => {
                return (
                  <div className="bg-neutral rounded-t-md text-sm h-[200px] p-4 flex justify-center items-center text-center hover:bg-primary hover:scale-105 transition-all cursor-pointer hover:text-secondary focus:bg-primary">
                    <div className="flex-col gap-5">
                      <div className="flex justify-center mb-5">
                        <div className="bg-secondary rounded-full p-3">
                          {value.icon}
                        </div>
                      </div>
                      <div className="text-xs">{value.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-6 sm:hidden">
              {ourServices.map((value: any) => {
                return (
                  <div className="bg-neutral rounded-t-md text-sm h-[200px] p-4 flex justify-center items-center text-center">
                    <div className="flex-col gap-5">
                      <div className="flex justify-start mb-5">
                        <div className="bg-secondary rounded-full p-3">
                          {value.icon}
                        </div>
                      </div>
                      <div className="text-justify sm:text-xs text-sm">
                        {value.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col gap-6">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <div className="text-md font-semibold">Gallery</div>
              <div className="text-sm">
                Search the best residence for your family
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-6">
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
              <img
                src="https://www.casafari.com/wp-content/uploads/2023/04/How-to-manage-your-property-portfolio-scaled.jpg"
                className="w-[220px] h-[220px] object-cover rounded-md"
              ></img>
            </div>
          </div>
        </section>
      </section>

      <motion.section
        className="p-5 border-l-2 border-[#13353d04] flex-col gap-6 w-full 2xl:flex hidden 2xl:max-w-md h-full"
        initial={{ opacity: 0, x: "100px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ delay: 0.8 }}
      >
        <CardPopularComponent data={dataRecomendation.additionalData[0]} />
        <div className="flex flex-col gap-3">
          <MiniCardPopularComponent
            data={dataRecomendation.additionalData[1]}
          />
          <MiniCardPopularComponent
            data={dataRecomendation.additionalData[2]}
          />
        </div>
      </motion.section>
    </section>
  );
}
