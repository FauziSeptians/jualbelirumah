import { useState } from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import CardComponent from '../../components/CardComponent'
import CardLocationComponent from '../../components/CardLocationComponent'
import CardPopularComponent from '../../components/CardPopularComponent'
import SectionMenuComponent from '../../components/SectionMenuComponent'
import { useDataPerumahanRecomendation } from '../../hooks/useDataPerumahanRecomendation'
import { ourServices } from '../../data/ourServices'
import { motion } from 'framer-motion'
import { useDataGallery } from '../../hooks/useDataGallery'
import { useNavigate } from 'react-router-dom'
import { useRecomendationByCity } from '../../hooks/useRecomendationByCity'
import { useDataPerumahanRecomendationForUser } from '../../hooks/useDataRecomendedForUser'
import { useDataPerumahanRecomendationPopular } from '../../hooks/useDataRecomendedPopular'
import { dataPerumahanType, ServicesType } from '../../types/CardTypes'
import React from 'react'
import { ImagesSlider } from '../../components/ui/images-slider'
import { TextGenerateEffect } from '../../components/ui/text-generate-effect'
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards'
import image from '../../data/image.json'
import sectionMenu from '../../data/sectionMenu.json'
import filterPrice from '../../data/filterPrice.json'

const WORDS_HEADER = `Prestasi Property`

export default function HomePage() {
	const [selectedsectionMenus, setSectionMenu] = useState(sectionMenu[0])
	const [selectedFilterPrice1, setFilterPrice1] = useState(filterPrice[0])
	const { data: dataRecomendation, isLoading } = useDataPerumahanRecomendation()
	const { data: dataRecomendationForUser, refetch: refetchDataRecomendation } =
		useDataPerumahanRecomendationForUser()
	const { data: dataRecomandationPopular } =
		useDataPerumahanRecomendationPopular({
			filter: selectedsectionMenus,
		})
	const { data } = useDataGallery()
	const navigate = useNavigate()
	const [isInputSearchSelected, setIsInputSearchSelected] = useState(false)
	const { data: dataRecomendationByCity } =
		useRecomendationByCity(selectedFilterPrice1)

	function handleSearchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			navigate('/Property?search=' + event.currentTarget.value)
		}
	}

	return (
		<section className="flex h-full w-full">
			<section
				className="custom-scrollbar flex h-[820px] w-[72%] flex-1 flex-col gap-[60px] overflow-y-auto overflow-x-hidden px-4 md:px-5"
				id="scroll"
			>
				<section id="section-top" className="flex flex-col gap-6">
					<section className="relative h-fit sm:h-[400px]">
						<ImagesSlider
							className={`${
								isInputSearchSelected ? 'sm:blur-[1px]' : ''
							} "object-cover rounded-md sm:h-full sm:w-full`}
							images={image}
						>
							<motion.div
								initial={{
									opacity: 0,
									y: -80,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									duration: 0.6,
								}}
								className="flex flex-col items-center justify-center"
							></motion.div>
						</ImagesSlider>
						<div className="hidden sm:flex">
							{isInputSearchSelected ? (
								<motion.div
									className="absolute top-0 h-full w-full rounded-md bg-black opacity-25"
									initial={{ opacity: 0, y: '10px' }}
									animate={{ opacity: 0.25, y: '0px' }}
								></motion.div>
							) : null}
						</div>
						<div className="absolute left-1/2 top-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 transform justify-center px-5 sm:flex">
							<div className="flex w-full max-w-md flex-col gap-3 rounded-md bg-white px-4 py-2">
								<div className="relative flex items-center gap-3">
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
										className="w-full appearance-none border-none text-xs outline-none focus:outline-none"
										onKeyDown={handleSearchSubmit}
										onFocus={() => setIsInputSearchSelected(true)}
										onBlurCapture={() => setIsInputSearchSelected(false)}
									/>
								</div>
							</div>
						</div>
						<div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform justify-center px-5 sm:hidden">
							<TextGenerateEffect words={WORDS_HEADER} />
						</div>
					</section>
					<div className="flex border-spacing-1 items-center gap-3 rounded-md border bg-slate-200 p-2 sm:hidden">
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
							className="w-full appearance-none border-none bg-slate-200 text-xs outline-none focus:outline-none"
							onKeyDown={handleSearchSubmit}
							onFocus={() => setIsInputSearchSelected(true)}
							onBlurCapture={() => setIsInputSearchSelected(false)}
						/>
					</div>
					<div className="flex flex-col gap-3">
						<div className="text-md font-semibold">Explore Your Dream Home</div>
						<div className="flex gap-6 opacity-[0.6]">
							{sectionMenu.map((item: string) => {
								const isSelected = selectedsectionMenus === item

								return (
									<SectionMenuComponent
										Text={item}
										boolHovered={isSelected}
										setHoverText={(val) => setSectionMenu(val)}
									/>
								)
							})}
						</div>
					</div>
					<div className="custom-scrollbar flex w-full gap-3 overflow-x-auto pb-8">
						{dataRecomandationPopular.map((item: any, idx: number) => {
							if (idx < 4) {
								return <CardComponent data={item} />
							}
						})}
					</div>
				</section>
				<section id="section-location1" className="flex flex-col gap-6">
					<div className="flex flex-col gap-3">
						<div className="text-md font-semibold">Padalarang</div>
						<div className="flex gap-6 opacity-[0.6]">
							{filterPrice?.map((item: string) => {
								const isSelected = selectedFilterPrice1 === item

								return (
									<SectionMenuComponent
										Text={item}
										boolHovered={isSelected}
										setHoverText={(val) => setFilterPrice1(val)}
									/>
								)
							})}
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="custom-scrollbar flex w-full flex-row gap-3 overflow-x-auto pb-8 md:w-full">
							{dataRecomendationByCity.map((item: dataPerumahanType) => {
								return (
									<CardLocationComponent
										ID={item.Id}
										key={item.Id}
										Title={item.Title}
										Description={item.Description}
										Images={item.Images.Thumbnail}
									/>
								)
							})}
						</div>
						<div className="flex w-full items-center justify-center">
							<ButtonComponent Text="Show More.." LinkURL="/property" />
						</div>
					</div>
				</section>
				<section id="Banners">
					<div className="flex h-[200px] w-full items-center justify-center bg-green-300">
						<img
							src="/banner.png"
							className="h-full w-full object-cover object-center"
						></img>
					</div>
				</section>
				<section id="our-services" className="relative">
					<div className="flex h-full w-full flex-col gap-6 rounded-md bg-secondary p-5 sm:h-[380px]">
						<div className="sm:mt-12">
							<div className="text-md font-semibold">Our Services</div>
							<div className="text-sm">
								Provide you a nice property for your beloved family
							</div>
						</div>
						<div className="mx-5 hidden gap-6 sm:absolute sm:bottom-0 sm:left-0 sm:flex">
							{ourServices.map((value: ServicesType) => {
								return (
									<div className="flex h-[200px] cursor-pointer items-center justify-center rounded-t-md bg-neutral p-4 text-center text-sm transition-all hover:scale-105 hover:bg-primary hover:text-secondary focus:bg-primary">
										<div className="flex-col gap-5">
											<div className="mb-5 flex justify-center">
												<div className="rounded-full bg-secondary p-3">
													{value.icon}
												</div>
											</div>
											<div className="text-xs">{value.text}</div>
										</div>
									</div>
								)
							})}
						</div>
						<div className="flex flex-col gap-6 sm:hidden">
							{ourServices.map((value: ServicesType) => {
								return (
									<div className="flex h-[200px] items-center justify-center rounded-t-md bg-neutral p-4 text-center text-sm">
										<div className="flex-col gap-5">
											<div className="mb-5 flex justify-start">
												<div className="rounded-full bg-secondary p-3">
													{value.icon}
												</div>
											</div>
											<div className="text-justify text-sm sm:text-xs">
												{value.text}
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</section>
				<section className="flex w-full flex-col gap-6">
					<div className="flex items-center justify-center">
						<div className="text-center">
							<div className="text-md font-semibold">Gallery</div>
							<div className="text-sm">
								Search the best residence for your family
							</div>
						</div>
					</div>
					<div className="flex w-full justify-center">
						<div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-transparent antialiased">
							<InfiniteMovingCards direction="right" speed="slow">
								{data?.additionalData.map((item) => {
									return (
										<div className="h-[220px] w-[420px]" key={item}>
											<img
												src={item}
												className="h-full w-full cursor-pointer rounded-md object-cover hover:scale-105"
											></img>
										</div>
									)
								})}
							</InfiniteMovingCards>
						</div>
					</div>
				</section>

				<section className="flex flex-col gap-6">
					<div className="flex w-full justify-between">
						<div>
							<div className="text-md font-semibold">For You</div>
							<div className="text-sm">Best offer for your future</div>
						</div>
						<div className="flex gap-3">
							<div
								className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-neutral hover:scale-105"
								onClick={refetchDataRecomendation}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 19.5 8.25 12l7.5-7.5"
									/>
								</svg>
							</div>
							<div
								className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-neutral hover:scale-105"
								onClick={refetchDataRecomendation}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m8.25 4.5 7.5 7.5-7.5 7.5"
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className="custom-scrollbar flex w-full flex-row gap-5 overflow-x-auto pb-8 md:w-full">
						{dataRecomendationForUser.map((item) => {
							return (
								<CardLocationComponent
									ID={item.Id}
									Title={item.Title}
									Description={item.Description}
									Images={item.Images.Thumbnail}
								/>
							)
						})}
					</div>
				</section>
			</section>
			<motion.section className="hidden h-full w-[28%] flex-none flex-col gap-6 border-l-2 border-[#13353d04] p-5 2xl:flex">
				{!isLoading && dataRecomendation ? (
					<>
						<div className="w-full">
							<CardPopularComponent data={dataRecomendation[0]!} />
						</div>
						<div className="flex w-full flex-col gap-3 mt-3">
							<div className="w-full">
								<CardLocationComponent
									ID={dataRecomendation[1].Id}
									Title={dataRecomendation[1].Title}
									Description={dataRecomendation[1].Description}
									Images={dataRecomendation[1].Images.Thumbnail}
								/>
							</div>
						</div>
					</>
				) : null}
			</motion.section>
		</section>
	)
}
