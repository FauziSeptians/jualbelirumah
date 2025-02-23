import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { dataPerumahanType } from '../types/CardTypes'

export default function CardComponent({
	data,
	Clicked,
}: {
	data: dataPerumahanType
	Clicked?: boolean
}) {
	const [HoveredImages, setHoveredImages] = useState(false)
	const isMobile =
		/Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
			navigator.userAgent
		)
	const { pathname } = useLocation()

	const isHomePage = pathname === '/' ? true : false

	return (
		<>
			{!Clicked ? (
				<Link to={`/detail/${data.Id}`} className="h-full w-full">
					<div
						className={`cursor-pointer md:w-full ${isMobile && !isHomePage ? 'w-full' : 'w-[300px]'}`}
						onMouseOver={() => setHoveredImages(true)}
						onMouseLeave={() => setHoveredImages(false)}
					>
						<div
							className={`relative h-[400px] md:w-full ${isMobile && !isHomePage ? 'w-full' : 'w-[300px]'}`}
						>
							<img
								src={data.Images.Thumbnail}
								className="h-full w-full rounded-lg bg-gray-500 object-cover shadow-lg"
							></img>

							{HoveredImages && (
								<motion.div
									className="absolute bottom-0 h-full w-full rounded-lg bg-black opacity-[0.6]"
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: '100%', opacity: 0.6 }}
								></motion.div>
							)}
							<div className="absolute bottom-0 flex w-full gap-3 p-5 text-white">
								{HoveredImages && (
									<motion.div
										className="flex w-full flex-col gap-6"
										initial={{ x: '10px', opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										<motion.div className="flex items-center gap-3">
											<div className="">
												<img src="/bathroom.png" width={30}></img>
											</div>
											<div>{data.Details.Bathroom}</div>
										</motion.div>
										<motion.div className="flex items-center gap-3">
											<div className="">
												<img src="/bedroom.png" width={30}></img>
											</div>
											<div>{data.Details.Bedroom}</div>
										</motion.div>
									</motion.div>
								)}
								{HoveredImages && (
									<motion.div
										className="flex w-full flex-col gap-6"
										initial={{ x: '10px', opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.6 }}
									>
										<motion.div className="flex items-center gap-3">
											<div className="">
												<img src="/area-graph.png" width={30}></img>
											</div>
											<div>{data.Details.AreaSurface}</div>
										</motion.div>
										<motion.div className="flex items-center gap-3">
											<div className="">
												<img src="/house.png" width={30}></img>
											</div>
											<div>{data.Details.AreaBuilding}</div>
										</motion.div>
									</motion.div>
								)}
							</div>
							<div className="absolute right-3 top-3 rounded-full bg-neutral px-5 py-1 text-xs font-medium text-primary">
								Rumah
							</div>
						</div>
						<div className="mt-3 flex flex-col gap-1">
							<div className="line-clamp-1">{data.Title}</div>
							<div className="flex flex-col gap-6 text-sm opacity-[0.6]">
								<div className="flex w-full items-center gap-3">
									<div className="w-[20px]">
										<img src="/placeholder.png" width={20} height={20}></img>
									</div>
									<div className="line-clamp-1 w-5/6">{data.Location}</div>
								</div>
							</div>
						</div>
					</div>
				</Link>
			) : (
				<div
					className="w-[350px] cursor-pointer md:w-full"
					onMouseOver={() => setHoveredImages(true)}
					onMouseLeave={() => setHoveredImages(false)}
				>
					<div className="relative h-[400px]">
						<div className="h-full w-full rounded-lg bg-gray-500 object-cover shadow-lg">
							<img
								src={data.Images.Thumbnail}
								className="h-full w-full rounded-lg bg-gray-500 object-cover shadow-lg"
							></img>
						</div>
						{HoveredImages && (
							<motion.div
								className="absolute bottom-0 h-full w-full rounded-lg bg-black opacity-[0.6]"
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: '100%', opacity: 0.6 }}
							></motion.div>
						)}
						<div className="absolute bottom-0 flex w-full gap-3 p-5 text-white">
							{HoveredImages && (
								<motion.div
									className="flex w-full flex-col gap-6"
									initial={{ x: '10px', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.2 }}
								>
									<motion.div className="flex items-center gap-3">
										<div className="">
											<img src="/bathroom.png" width={30}></img>
										</div>
										<div>{data.Details.Bathroom}</div>
									</motion.div>
									<motion.div className="flex items-center gap-3">
										<div className="">
											<img src="/bedroom.png" width={30}></img>
										</div>
										<div>{data.Details.Bedroom}</div>
									</motion.div>
								</motion.div>
							)}
							{HoveredImages && (
								<motion.div
									className="flex w-full flex-col gap-6"
									initial={{ x: '10px', opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ delay: 0.6 }}
								>
									<motion.div className="flex items-center gap-3">
										<div className="">
											<img src="/area-graph.png" width={30}></img>
										</div>
										<div>{data.Details.AreaSurface}</div>
									</motion.div>
									<motion.div className="flex items-center gap-3">
										<div className="">
											<img src="/house.png" width={30}></img>
										</div>
										<div>{data.Details.AreaBuilding}</div>
									</motion.div>
								</motion.div>
							)}
						</div>
					</div>
					<div className="mt-3 w-full flex flex-col gap-1">
						<div>{data.Title}</div>
						<div className="flex w-full flex-col items-center gap-6 text-sm opacity-[0.6]">
							<div className="flex w-full gap-3 items-center">
								<div className="w-[20px]">
									<img src="/placeholder.png" width={20} height={20}></img>
								</div>
								<div className="line-clamp-1 w-5/6">{data.Location}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
