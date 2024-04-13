import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent";
import { useDataDetail } from "../../hooks/useDataDetail";
import {
  modalAllImageStore,
  modalImageStore,
} from "../../store/modalImagesStore";
import { toRupiah } from "../../utils/toRupiah";

export default function DetailPage({
  ClickedProperty,
  Id,
}: {
  ClickedProperty?: boolean;
  Id?: string;
}) {
  const [, setOpenModalImage] = useAtom(modalImageStore);
  const [, setOpenModalAllImages] = useAtom(modalAllImageStore);

  const OpenModalImage = (stringImages: string) => {
    setOpenModalImage(stringImages);
  };
  const ENDPOINTWA = import.meta.env.VITE_WHATSAPP_ENDPOINT;
  const ENDPOINTWEB = import.meta.env.VITE_WEBURL;
  const { id } = useParams();

  const { DataDetail } = useDataDetail(parseInt(id! ? id! : Id!));

  const newDescription = DataDetail.Description.replace(/\n/g, "<br>");
  const Message = `Hallo ${
    DataDetail.Agent.Name
  }!, saya mau bertanya perihal perumahan yang ini ${ENDPOINTWEB}/detail/${
    id! ? id! : Id!
  }`;

  return (
    <section
      className={`flex flex-col w-full  gap-10 p-5 ${
        ClickedProperty ? "h-[820px] overflow-y-scroll" : null
      }`}
    >
      <motion.section
        id="header"
        className="md:flex justify-between items-center"
        animate={{ y: "0px", opacity: 1 }}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div>
          <div className="text-[32px] font-semibold">{DataDetail.Title}</div>
          <div className="text-[14px] opacity-[0.6] font-light">
            {DataDetail.Location}
          </div>
        </div>
        <div className="text-[24px] font-semibold md:mt-0 mt-5">
          {toRupiah(DataDetail.Price)}
        </div>
      </motion.section>
      <motion.section
        id="Gambar"
        className="flex md:flex-row flex-col w-full gap-4 md:h-[450px] h-fit"
        animate={{ y: "0px", opacity: 1 }}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="md:w-[90%] w-full">
          <div
            className="w-full h-full rounded-[5px] bg-slate-400 cursor-pointer"
            onClick={() => OpenModalImage(DataDetail.Images.Thumbnail)}
          >
            <img
              src={DataDetail.Images.Thumbnail}
              className="object-cover w-full h-full rounded-[5px]"
            ></img>
          </div>
        </div>
        <div className="md:w-[10%] flex md:flex-col flex-row gap-3 ">
          {DataDetail.Images.Data.map((image, index) =>
            index == 3 ? (
              <div
                className="relative w-full h-full rounded-[5px]  cursor-pointer"
                onClick={() => setOpenModalAllImages(DataDetail.Images.Data)}
              >
                <div className="absolute w-full h-full rounded-[5px] bg-[#0000009a] cursor-pointer top-0 text-[32px] text-[#ffd34e] flex justify-center items-center">
                  +{DataDetail.Images.Data.length - 4}
                </div>
                <img
                  src={image}
                  className="object-cover w-full  rounded-[5px] h-[100px]"
                ></img>
              </div>
            ) : (
              index < 3 && (
                <div
                  className="w-full h-full rounded-[5px]  cursor-pointer"
                  onClick={() => OpenModalImage(image)}
                >
                  <img
                    src={image}
                    className="object-cover w-full  rounded-[5px] h-[100px]"
                  ></img>
                </div>
              )
            )
          )}
        </div>
      </motion.section>
      <motion.section
        id="Description"
        className={`w-full ${
          ClickedProperty ? "flex flex-col gap-6" : "flex md:flex-row flex-col"
        } gap-4`}
        animate={{ x: "0px", opacity: 1 }}
        initial={{ x: "100px", opacity: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div
          className={`${
            ClickedProperty ? "w-full" : "md:w-[75%] w-full"
          }  flex flex-col gap-10 `}
        >
          <div id="Overview" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Overview</div>
            <div className="text-[16px] font-regular opacity-[0.6] text-justify">
              <div dangerouslySetInnerHTML={{ __html: newDescription }} />
            </div>
          </div>
          <div id="Highlights" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Highlights</div>
            <div className="w-full flex md:flex-row  flex-col md:gap-0 gap-6">
              <div className="md:w-[30%] w-full flex flex-col gap-6">
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
                    <div>{DataDetail.Details.Bathroom}</div>
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
                    <div>{DataDetail.Details.Bedroom}</div>
                  </div>
                </div>
              </div>

              <div className={`md:w-[70%] w-full flex flex-col gap-6`}>
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
                    <div>{DataDetail.Details.AreaSurface}</div>
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
                    <div>{DataDetail.Details.AreaBuilding}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Details" className="flex flex-col gap-3">
            <div className="text-[20px] font-semibold">Details</div>
            <div className="text-[16px] font-light opacity-[0.6] flex flex-col gap-3">
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Alamat</div>
                <div className="md:w-[85%] w-[50%] font-semibold">
                  {DataDetail.Location}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Lokasi</div>
                <div className="md:w-[85%] w-[50%] font-semibold">
                  {DataDetail.Location}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Tipe</div>
                <div className="md:w-[85%] w-[50%] font-semibold">
                  {DataDetail.Details.Tipe}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Transaksi</div>
                <div className="md:w-[85%] w-[50%] font-semibold">
                  {DataDetail.Details.Transaksi}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Luas Bangunan</div>
                <div className="md:w-[85%]  w-[50%] font-semibold">
                  {DataDetail.Details.AreaBuilding}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Luas Tanah</div>
                <div className="md:w-[85%]  w-[50%] font-semibold">
                  {DataDetail.Details.AreaSurface}
                </div>
              </div>
              <div className="flex w-full">
                <div className="md:w-[15%] w-[50%]">Listrik</div>
                <div className="md:w-[85%]  w-[50%] font-semibold">
                  {DataDetail.Details.Electricity}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            ClickedProperty ? "w-full" : "md:w-[25%] w-full md:mt-0 mt-6 p-3"
          } `}
        >
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
                  {DataDetail.Agent.Name}
                </div>
                <div className="text-[14px] opacity-[0.6] text-[#ddb335] font-bold">
                  {DataDetail.Agent.Role}
                </div>
              </div>
            </div>
            <div className="opacity-[0.6] text-[14px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              laudantium voluptatem deserunt consequatur possimus voluptas quis
              fugit sequi accusamus architecto iste excepturi expedita, ducimus
              reiciendis ad aperiam perspiciatis et consequuntur?
            </div>
            <div className="flex md:flex-row flex-col gap-3 mt-3">
              <div className="w-full">
                <ButtonComponent
                  Text="Message"
                  Icon="/email.png"
                  Color="white"
                  Border="border"
                  LinkURL={
                    ENDPOINTWA + DataDetail.Agent.CallNo + `?text=${Message}`
                  }
                />
              </div>
              <div className="w-full">
                <ButtonComponent
                  Text="Call"
                  Icon="/call.png"
                  LinkURL={ENDPOINTWA + DataDetail.Agent.CallNo}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
