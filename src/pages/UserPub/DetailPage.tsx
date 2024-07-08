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
import { useState } from 'react'
import { dataSegment } from '../../data/dummy/dataSegmentDetail'

export default function DetailPage({
	ClickedProperty,
	Id,
}: {
	ClickedProperty?: boolean
	Id?: string
}) {
	const [, setOpenModalImage] = useAtom(modalImageStore)
	const [, setOpenModalAllImages] = useAtom(modalAllImageStore)
	const [isShowMore, setIsShowMore] = useState(false)
	const [segmentDetail, setSegmentDetail] = useState('Overview')
	const isMobile =
		/Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
			navigator.userAgent
		)

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
			<div
				className={`flex w-full max-w-xl items-center gap-2 text-center text-sm ${isMobile ? 'overflow-auto' : ''}`}
			>
				{dataSegment.map((item) => {
					if (item === segmentDetail) {
						return (
							<div
								className="!w-[200px] cursor-pointer rounded-full bg-primary px-6 py-2 text-neutral"
								onClick={() => setSegmentDetail(item)}
							>
								{item}
							</div>
						)
					} else {
						return (
							<div
								className="!w-[200px] cursor-pointer rounded-full border border-slate-200 px-6 py-2 text-primary"
								onClick={() => setSegmentDetail(item)}
							>
								{item}
							</div>
						)
					}
				})}
			</div>
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
					{segmentDetail === 'Overview' ? (
						<div id="Overview" className="flex flex-col gap-3">
							<div className="text-md font-semibold">Overview</div>
							<div className="font-regular text-justify text-sm opacity-[0.6]">
								{newDescription?.length >= 1000 ? (
									<div>
										<div
											dangerouslySetInnerHTML={{
												__html: !isShowMore
													? newDescription.slice(0, 1000) + '....'
													: newDescription,
											}}
										/>
										<div
											className="cursor-pointer text-sm text-primary"
											onClick={() => setIsShowMore(!isShowMore)}
										>
											{!isShowMore && newDescription.length >= 1000
												? 'Show more..'
												: 'Show less..'}
										</div>
									</div>
								) : (
									<div>
										<div
											dangerouslySetInnerHTML={{
												__html: newDescription,
											}}
										/>
									</div>
								)}
							</div>
						</div>
					) : null}
					{segmentDetail === 'Highlights' ? (
						<div id="Highlights" className="flex flex-col gap-3">
							<div className="text-md font-semibold">Highlights</div>
							<div className="flex w-full gap-6 text-sm md:gap-0">
								<div className="grid w-full grid-cols-2 gap-6 sm:flex">
									<div className="flex w-full cursor-pointer flex-col gap-3 rounded-md border border-slate-100 bg-slate-100 p-4 hover:bg-primary hover:text-neutral sm:w-[250px] sm:flex-row sm:items-center">
										<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
											<img
												src="/bathroom.png"
												width="20"
												className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
											/>
										</div>
										<div className="flex flex-row gap-3 sm:flex-col sm:gap-0">
											<div>Bathroom</div>
											<div>{DataDetail.Details.Bathroom}</div>
										</div>
									</div>
									<div className="flex w-full cursor-pointer flex-col gap-3 rounded-md border border-slate-100 bg-slate-100 p-4 hover:bg-primary hover:text-neutral sm:w-[250px] sm:flex-row sm:items-center">
										<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
											<img
												src="/bedroom.png"
												width="20"
												className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
											/>
										</div>
										<div className="flex flex-row gap-3 sm:flex-col sm:gap-0">
											<div>Bedroom</div>
											<div>{DataDetail.Details.Bedroom}</div>
										</div>
									</div>
									<div className="flex w-full cursor-pointer flex-col gap-3 rounded-md border border-slate-100 bg-slate-100 p-4 hover:bg-primary hover:text-neutral sm:w-[250px] sm:flex-row sm:items-center">
										<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
											<img
												src="/area-graph.png"
												width="20"
												className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
											/>
										</div>
										<div className="flex flex-col gap-3 sm:gap-0">
											<div>Area Surface</div>
											<div>{DataDetail.Details.AreaSurface} m2</div>
										</div>
									</div>
									<div className="flex w-full cursor-pointer flex-col gap-3 rounded-md border border-slate-100 bg-slate-100 p-4 hover:bg-primary hover:text-neutral sm:w-[250px] sm:flex-row sm:items-center">
										<div className="relative h-[50px] w-[50px] rounded-[25px] bg-white">
											<img
												src="/house.png"
												width="20"
												className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
											/>
										</div>
										<div className="flex flex-col gap-3 sm:gap-0">
											<div>Area Building</div>
											<div>{DataDetail.Details.AreaBuilding} m2</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					) : null}
					{segmentDetail === 'Details' ? (
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
					) : null}
					{segmentDetail === 'Contact' ? (
						<div id="Details" className="flex flex-col gap-5">
							<div className="flex items-center gap-3 text-sm font-light">
								<div className="relative h-[100px] w-[100px] rounded-full bg-white">
									<img
										src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg"
										width="20"
										className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform rounded-full object-cover"
									/>
								</div>
								<div>
									<div className="text-[18px] font-semibold">
										{DataDetail.Agent.Name}
									</div>
									<div className="text-[14px] font-bold text-primary opacity-[0.6]">
										{DataDetail.Agent.Role}
									</div>
								</div>
							</div>
							<div className="text-justify text-[14px] opacity-[0.6]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								laudantium voluptatem deserunt consequatur possimus voluptas
								quis fugit sequi accusamus architecto iste excepturi expedita,
								ducimus reiciendis ad aperiam perspiciatis et consequuntur?
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
									<motion.a
										className="flex items-center justify-center gap-2 rounded-md bg-primary py-2"
										href={ENDPOINTWA + DataDetail.Agent.CallNo}
										target="_blank"
										whileHover={{ scale: 1.02 }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="size-4 text-neutral"
										>
											<path
												fillRule="evenodd"
												d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
												clipRule="evenodd"
											/>
										</svg>
										<div className="text-sm text-white">Call</div>
									</motion.a>
								</div>
							</div>
						</div>
					) : null}
				</div>
			</motion.section>
		</section>
	)
}
