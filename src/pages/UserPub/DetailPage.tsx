import { motion } from 'framer-motion'
import { useAtom } from 'jotai'
import { useParams } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent'
import { useDataDetail } from '../../hooks/useDataDetail'
import {
	modalAllImageStore,
	modalImageStore,
} from '../../store/modalImagesStore'
import { toRupiah } from '../../utils/toRupiah'

export default function DetailPage({
	ClickedProperty,
	Id,
}: {
	ClickedProperty?: boolean
	Id?: string
}) {
	const [, setOpenModalImage] = useAtom(modalImageStore)
	const [, setOpenModalAllImages] = useAtom(modalAllImageStore)

	const OpenModalImage = (stringImages: string) => {
		setOpenModalImage(stringImages)
	}
	const ENDPOINTWA = import.meta.env.VITE_WHATSAPP_ENDPOINT
	const ENDPOINTWEB = import.meta.env.VITE_WEBURL
	const { id } = useParams()

	const { DataDetail } = useDataDetail(parseInt(id! ? id! : Id!))

	const newDescription = DataDetail.Description.replace(/\n/g, '<br>')
	const Message = `Hallo ${
		DataDetail.Agent.Name
	}!, saya mau bertanya perihal perumahan yang ini ${ENDPOINTWEB}/detail/${
		id! ? id! : Id!
	}`

	return (
		<section
			className={`flex w-full flex-col gap-10 p-5 ${
				ClickedProperty ? 'h-[820px] overflow-y-scroll' : null
			}`}
		>
			<motion.section
				id="header"
				className="items-center justify-between md:flex"
				animate={{ y: '0px', opacity: 1 }}
				initial={{ y: '100px', opacity: 0 }}
				transition={{ delay: 0.1 }}
			>
				<div>
					<div className="text-lg font-semibold">{DataDetail.Title}</div>
					<div className="text-sm font-light opacity-[0.6]">
						{DataDetail.Location}
					</div>
				</div>
				<div className="mt-5 text-lg font-semibold md:mt-0">
					{toRupiah(DataDetail.Price.toString())}
				</div>
			</motion.section>
			<motion.section
				id="Gambar"
				className="flex h-fit w-full flex-col gap-4 md:h-[450px] md:flex-row"
				animate={{ y: '0px', opacity: 1 }}
				initial={{ y: '100px', opacity: 0 }}
				transition={{ delay: 0.2 }}
			>
				<div className="w-full md:w-[90%]">
					<div
						className="h-full w-full cursor-pointer rounded-[5px] bg-slate-400"
						onClick={() => OpenModalImage(DataDetail.Images.Thumbnail)}
					>
						<img
							src={DataDetail.Images.Thumbnail}
							className="h-full w-full rounded-[5px] object-cover"
						></img>
					</div>
				</div>
				<div className="flex flex-row gap-3 md:w-[10%] md:flex-col">
					{DataDetail.Images.Data.map((image, index) =>
						index == 3 ? (
							<div
								className="relative h-full w-full cursor-pointer rounded-[5px]"
								onClick={() => setOpenModalAllImages(DataDetail.Images.Data)}
							>
								{DataDetail.Images.Data.length - 4 != 0 ? (
									<div className="absolute top-0 flex h-full w-full cursor-pointer items-center justify-center rounded-[5px] bg-[#0000009a] text-3xl text-secondary">
										+{DataDetail.Images.Data.length - 4}
									</div>
								) : null}

								<img
									src={image}
									className="h-[100px] w-full rounded-[5px] object-cover"
								></img>
							</div>
						) : (
							index < 3 && (
								<div
									className="h-full w-full cursor-pointer rounded-[5px]"
									onClick={() => OpenModalImage(image)}
								>
									<img
										src={image}
										className="h-[100px] w-full rounded-[5px] object-cover"
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
					ClickedProperty ? 'flex flex-col gap-6' : 'flex flex-col md:flex-row'
				} gap-4`}
				animate={{ x: '0px', opacity: 1 }}
				initial={{ x: '100px', opacity: 0 }}
				transition={{ delay: 0.3 }}
			>
				<div
					className={`${
						ClickedProperty ? 'w-full' : 'w-full md:w-[75%]'
					} flex flex-col gap-10`}
				>
					<div id="Overview" className="flex flex-col gap-3">
						<div className="text-md font-semibold">Overview</div>
						<div className="font-regular text-justify text-sm opacity-[0.6]">
							<div dangerouslySetInnerHTML={{ __html: newDescription }} />
						</div>
					</div>
					<div id="Highlights" className="flex flex-col gap-3">
						<div className="text-md font-semibold">Highlights</div>
						<div className="flex w-full flex-col gap-6 text-sm md:flex-row md:gap-0">
							<div className="flex w-full flex-col gap-6 md:w-[30%]">
								<div className="flex gap-3">
									<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
										<img
											src="/bathroom.png"
											width="20"
											className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
										/>
									</div>
									<div>
										<div>Bathroom</div>
										<div>{DataDetail.Details.Bathroom}</div>
									</div>
								</div>
								<div className="flex gap-3">
									<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
										<img
											src="/bedroom.png"
											width="20"
											className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
										/>
									</div>
									<div>
										<div>Bedroom</div>
										<div>{DataDetail.Details.Bedroom}</div>
									</div>
								</div>
							</div>

							<div className={`flex w-full flex-col gap-6 md:w-[70%]`}>
								<div className="flex gap-3">
									<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
										<img
											src="/area-graph.png"
											width="20"
											className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
										/>
									</div>
									<div>
										<div>Area Surface</div>
										<div>{DataDetail.Details.AreaSurface}</div>
									</div>
								</div>
								<div className="flex gap-3">
									<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
										<img
											src="/house.png"
											width="20"
											className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
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
						<div className="text-md font-semibold">Details</div>
						<div className="flex flex-col gap-3 text-sm font-light opacity-[0.6]">
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Lokasi</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Location}
								</div>
							</div>
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Tipe</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Details.Tipe}
								</div>
							</div>
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Transaksi</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Details.Transaksi}
								</div>
							</div>
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Luas Bangunan</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Details.AreaBuilding}
								</div>
							</div>
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Luas Tanah</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Details.AreaSurface}
								</div>
							</div>
							<div className="flex w-full">
								<div className="w-[50%] md:w-[15%]">Listrik</div>
								<div className="w-[50%] font-semibold md:w-[85%]">
									{DataDetail.Details.Electricity}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className={`${
						ClickedProperty ? 'w-full' : 'mt-6 w-full p-3 md:mt-0 md:w-[25%]'
					} `}
				>
					<div className="flex flex-col gap-3 rounded-md border-1 p-6">
						<div className="flex w-full items-center gap-3">
							<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
								<img
									src="/bedroom.png"
									width="20"
									className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
								/>
							</div>
							<div>
								<div className="text-[18px] font-semibold">
									{DataDetail.Agent.Name}
								</div>
								<div className="text-[14px] font-bold text-[#ddb335] opacity-[0.6]">
									{DataDetail.Agent.Role}
								</div>
							</div>
						</div>
						<div className="text-justify text-[14px] opacity-[0.6]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
							laudantium voluptatem deserunt consequatur possimus voluptas quis
							fugit sequi accusamus architecto iste excepturi expedita, ducimus
							reiciendis ad aperiam perspiciatis et consequuntur?
						</div>
						<div className="mt-3 flex flex-col gap-3 md:flex-row">
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
	)
}
