import { useState } from "react";
import ButtonComponent from "../../components/ButtonComponent";
import CardComponent from "../../components/CardComponent";
import CardLocationComponent from "../../components/CardLocationComponent";
import CardPopularComponent from "../../components/CardPopularComponent";
import MiniCardPopularComponent from "../../components/MiniCardPopularComponent";
import SectionMenuComponent from "../../components/SectionMenuComponent";
import { Filterprice, sectionMenu } from "../../data/constant/SectionMenu";

export default function HomePage() {
  const [selectedsectionMenus, setSectionMenu] = useState(sectionMenu[0]);
  const [selectedFilterPrice, setFilterPrice] = useState(Filterprice[0]);
  const [selectedFilterPrice1, setFilterPrice1] = useState(Filterprice[0]);
  const [selectedFilterPrice2, setFilterPrice2] = useState(Filterprice[0]);

  return (
    <>
      <section className="flex ">
        <section
          className="flex flex-col gap-[50px] w-[68%] h-[820px] overflow-y-scroll px-5 "
          id="scroll"
        >
          <section id="section-recomandation" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-[24px] font-semibold">
                Explore Your Dream Home
              </div>
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
            <div className="flex justify-between">
              <CardComponent
                Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
                Title="Rumah Murah di jawa barat"
                Location="Bandung"
              />
              <CardComponent
                Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
                Title="Rumah Murah di jawa barat"
                Location="Bandung"
              />
              <CardComponent
                Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
                Title="Rumah Murah di jawa barat"
                Location="Bandung"
              />
            </div>
          </section>
          <section id="section-location1" className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="text-[24px] font-semibold">Bandung</div>
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
            <div className="flex gap-6">
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
            <div className="flex gap-6">
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
              <ButtonComponent Text="Show More.."></ButtonComponent>
            </div>
          </section>
          <section id="Banners">
            <div className="w-full h-[200px] flex justify-center items-center bg-green-300">
              INI BANNER{" "}
            </div>
          </section>
          <section id="our-services">
            <div className="w-full h-[200px] flex flex-col gap-6 justify-center items-center bg-green-300">
              <div className="text-[24px] font-semibold">Our Services</div>
              <div className="text-[30px] font-bold ">
                Bagaimana Tproperty membantu anda dalam mencari rumah impian
              </div>
              <div className="flex gap-6">
                <div>bla bla</div>
                <div>bla bla</div>
                <div>bla bla</div>
                <div>bla bla</div>
              </div>
            </div>
          </section>
          {/* <div className="flex flex-col gap-3">
            <div className="text-[24px] font-semibold">Jakarta</div>
            <div className="flex gap-6 opacity-[0.6]">
              {Filterprice.map((item) =>
                selectedFilterPrice2 == item ? (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={true}
                    setHoverText={(val) => setFilterPrice2(val)}
                    defaultText={selectedFilterPrice2}
                  />
                ) : (
                  <SectionMenuComponent
                    Text={item}
                    boolHovered={false}
                    setHoverText={(val) => setFilterPrice2(val)}
                    defaultText={selectedFilterPrice2}
                  />
                )
              )}
            </div>
          </div> */}
        </section>
        <section className="w-[32%] p-10 border-l-2 border-[#13353d04] flex  flex-col gap-6  h-fit">
          <CardPopularComponent
            Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
            Title="Rumah Murah di jawa barat"
            Location="Bandung"
            Harga={500000000}
            Description="lorem ipsum dolor si ematawda adawdsd sd wd asd  adwd as  dawdaw"
          />
          <div className="flex flex-col gap-3">
            <MiniCardPopularComponent
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
              Title="Rumah Murah di jawa barat"
              Location="Bandung"
            />
            <MiniCardPopularComponent
              Images="https://arsitagx-master.s3.ap-southeast-1.amazonaws.com/img-medium/25110/26365/studio-lembar-putih-proyek-desain-rumah-kos-bapak-hd1666854479-m.jpeg"
              Title="Rumah Murah di jawa barat"
              Location="Bandung"
            />
          </div>
        </section>
      </section>
    </>
  );
}
