import { motion } from "framer-motion";
import { useAtom } from "jotai";
import ButtonComponent from "../../components/ButtonComponent";
import { modalImageStore } from "../../store/modalImagesStore";
import { toRupiah } from "../../utils/toRupiah";

export default function DetailPage({
  ClickedProperty,
}: {
  ClickedProperty?: boolean;
}) {
  const [, setOpenModalImage] = useAtom(modalImageStore);

  const OpenModalImage = (stringImages: string) => {
    setOpenModalImage(stringImages);
  };

  const ENDPOINTWA = import.meta.env.VITE_WHATSAPP_ENDPOINT;

  return (
    <section
      className={`flex flex-col w-full  gap-10 p-5 ${
        ClickedProperty ? "h-[820px] overflow-y-scroll" : null
      }`}
    >
      <motion.section
        id="header"
        className="flex justify-between items-center"
        animate={{ y: "0px", opacity: 1 }}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <div className="text-[32px] font-semibold">
            Rumah dijual di jawa barat
          </div>
          <div className="text-[14px] opacity-[0.6] font-light">
            Sindanglaya no 109 rt 02 rw 11 kota Bandung, Jawa Barat
          </div>
        </div>
        <div className="text-[24px] font-semibold">
          {toRupiah("5000000000")}
        </div>
      </motion.section>
      <motion.section
        id="Gambar"
        className="flex w-full gap-4 h-[450px]"
        animate={{ y: "0px", opacity: 1 }}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="w-[90%] ">
          <div
            className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer"
            onClick={() =>
              OpenModalImage(
                "https://cdn.pixabay.com/photo/2016/12/14/19/15/beach-house-1907220_1280.jpg"
              )
            }
          >
            <img
              src="https://cdn.pixabay.com/photo/2016/12/14/19/15/beach-house-1907220_1280.jpg"
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
        </div>
        <div className="w-[10%] flex flex-col gap-3 ">
          <div className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaz9X7OtihpyjxXArxoS0biQNWW4kKkq7dJskwiMBVA&s"
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
          <div className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaz9X7OtihpyjxXArxoS0biQNWW4kKkq7dJskwiMBVA&s"
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
          <div className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaz9X7OtihpyjxXArxoS0biQNWW4kKkq7dJskwiMBVA&s"
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
          <div className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeaz9X7OtihpyjxXArxoS0biQNWW4kKkq7dJskwiMBVA&s"
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="Description"
        className={`w-full ${
          ClickedProperty ? "flex flex-col gap-6" : "flex"
        } gap-4`}
        animate={{ x: "0px", opacity: 1 }}
        initial={{ x: "100px", opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div
          className={`${
            ClickedProperty ? "w-full" : "w-[75%]"
          }  flex flex-col gap-10 `}
        >
          <div id="Overview" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Overview</div>
            <div className="text-[16px] font-regular opacity-[0.6] text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              doloribus exercitationem sed commodi architecto earum, temporibus
              laborum delectus porro labore at inventore qui deserunt quod nobis
              magni ad itaque placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eaque, doloribus exercitationem sed commodi
              architecto earum, temporibus laborum delectus porro labore at
              inventore qui deserunt quod nobis magni ad itaque placeat. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              doloribus exercitationem sed commodi architecto earum, temporibus
              laborum delectus porro labore at inventore qui deserunt quod nobis
              magni ad itaque placeat. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Eaque, doloribus exercitationem sed commodi
              architecto earum, temporibus laborum delectus porro labore at
              inventore qui deserunt quod nobis magni ad itaque placeat.
            </div>
          </div>
          <div id="Highlights" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Highlights</div>
            <div className="w-full flex">
              <div className="w-[30%] flex flex-col gap-6">
                <div className="flex gap-3">
                  <div className="relative w-[50px] h-[50px] bg-white rounded-[25px]">
                    <img
                      src="/bathroom.png"
                      width="20"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <div>Bathroom</div>
                    <div>3</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-[50px] h-[50px] bg-white rounded-[25px]">
                    <img
                      src="/bedroom.png"
                      width="20"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <div>Bedroom</div>
                    <div>3</div>
                  </div>
                </div>
              </div>

              <div className={`w-[70%] flex flex-col gap-6`}>
                <div className="flex gap-3">
                  <div className="relative w-[50px] h-[50px] bg-white rounded-[25px]">
                    <img
                      src="/area-graph.png"
                      width="20"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <div>Area Surface</div>
                    <div>3</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="relative w-[50px] h-[50px] bg-white rounded-[25px]">
                    <img
                      src="/house.png"
                      width="20"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div>
                    <div>Area Building</div>
                    <div>3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Details" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Details</div>
            <div className="text-[16px] font-light opacity-[0.6] flex flex-col gap-3">
              <div className="flex w-full">
                <div className="w-[15%]">Alamat</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Lokasi</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Tipe</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Transaksi</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Luas Bangunan</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Luas Tanah</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
              <div className="flex w-full">
                <div className="w-[15%]">Listrik</div>
                <div className="w-[85%] font-semibold">awdawdw</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${ClickedProperty ? "w-full" : "w-[25%] p-3"} `}>
          <div className="border-2 p-6 flex flex-col gap-3 rounded-[25px]">
            <div className=" w-full flex gap-3 items-center">
              <div className="relative w-[50px] h-[50px] bg-white rounded-[25px]">
                <img
                  src="/bedroom.png"
                  width="20"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div>
                <div className="text-[18px] font-semibold">
                  Muhammad Fauzi Septiana Putra
                </div>
                <div className="text-[14px] opacity-[0.6] text-[#ddb335] font-bold">
                  Agent
                </div>
              </div>
            </div>
            <div className="opacity-[0.6] text-[14px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laudantium voluptatem deserunt consequatur possimus voluptas quis
              fugit sequi accusamus architecto iste excepturi expedita, ducimus
              reiciendis ad aperiam perspiciatis et consequuntur?
            </div>
            <div className="flex gap-3 mt-3">
              <div className="w-full">
                <ButtonComponent
                  Text="Message"
                  Icon="/email.png"
                  Color="white"
                  Border="border"
                  LinkURL={ENDPOINTWA + "6281214300806"}
                />
              </div>
              <div className="w-full">
                <ButtonComponent
                  Text="Call"
                  Icon="/call.png"
                  LinkURL={ENDPOINTWA + "6281214300806"}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
