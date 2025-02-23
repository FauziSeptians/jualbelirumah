import { Pagination } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import CardComponent from '../../components/CardComponent'
import ErrorDataNotFound from '../../components/ErrorDataNotFound'
import useDataSearch from '../../hooks/useDataSearch'
import DetailPage from './DetailPage'
import usePagination from '../../hooks/usePagination'
import { dataPerumahanType } from '../../types/CardTypes'
import dataFilteringSegmentation from '../../data/dataFilteringSegmentation.json'

export default function PropertyPage() {
	const [clickedDetail, setclickedDetail] = useState('')
	const [page, setPage] = useState(0)
	const [segmentationFilter, setSegmentationFilter] = useState('')
	const [totalPage, setTotalPage] = useState(0)
	const [searchParams, setSearchParams] = useSearchParams()
	const keyValue = searchParams.get('search')
	const isMobile =
		/Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
			navigator.userAgent
		)
	const { dataSearch, datapages } = useDataSearch(keyValue)
	const { data, pages } = usePagination(page)
	const [showData, setShowData] = useState<any>(data)
	const navigate = useNavigate()

	function handleSearchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			navigate('/Property?search=' + event.currentTarget.value)
		}
	}

	useEffect(() => {
		searchParams.set('page', page.toString())
		setSearchParams(searchParams)
	}, [page, searchParams, setSearchParams])

	useEffect(() => {
		if (dataSearch) {
			setShowData(dataSearch)
			setTotalPage(datapages)
			return
		}
		setShowData(data)
		setTotalPage(pages)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams, dataSearch])

	return (
		<div
			className={`h-[840px] w-full overflow-y-scroll px-5 ${
				clickedDetail ? 'flex gap-3' : null
			}`}
		>
			<div
				className={`mb-10 overflow-y-scroll ${
					clickedDetail ? 'w-[50%]' : 'w-full'
				}`}
			>
				<div className="mb-6 flex max-w-md border-spacing-1 items-center gap-3 rounded-md border bg-slate-200 p-2">
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
						className="w-full max-w-md appearance-none border-none bg-slate-200 text-xs outline-none focus:outline-none"
						onKeyDown={handleSearchSubmit}
					/>
				</div>
				<div className="mb-6 flex w-full items-center gap-2 overflow-auto text-center text-sm sm:hidden">
					{dataFilteringSegmentation.map((item) => {
						if (item === segmentationFilter) {
							return (
								<div
									className="!w-[200px] cursor-pointer text-nowrap rounded-full bg-primary px-6 py-2 text-neutral"
									onClick={() => setSegmentationFilter(item)}
								>
									{item}
								</div>
							)
						} else {
							return (
								<div
									className="!w-[200px] cursor-pointer text-nowrap rounded-full border border-slate-200 px-6 py-2 text-primary"
									onClick={() => setSegmentationFilter(item)}
								>
									{item}
								</div>
							)
						}
					})}
				</div>
				{keyValue ? (
					<div className="mb-8 flex w-full items-center justify-between">
						<div>
							<div className="text-sm font-semibold">{keyValue}</div>
							<div className="text-sm">{showData?.length} data</div>
						</div>
						<div className="text-sm">Sort by</div>
					</div>
				) : null}
				<div
					className={`w-full ${
						!clickedDetail
							? 'flex grid-cols-2 flex-col md:mb-0 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
							: 'grid grid-cols-2'
					} gap-11`}
				>
					{showData?.length != 0 &&
						showData?.map((item: dataPerumahanType) => {
							return (
								<div onClick={() => setclickedDetail(item.Id.toString())} key={item?.Id}>
									<CardComponent
										key={item.Id}
										data={item}
										Clicked={isMobile == false ? true : false}
									/>
								</div>
							)
						})}
				</div>
				{showData?.length == 0 && <ErrorDataNotFound />}
				{showData?.length != 0 ? (
					<div
						className={`${
							clickedDetail
								? 'flex w-full justify-center'
								: 'flex w-full justify-end'
						} mt-10 px-5`}
					>
						<Pagination
							total={totalPage}
							initialPage={page + 1}
							onChange={(val) => setPage(() => val - 1)}
							color='primary'
						/>
					</div>
				) : null}
			</div>

			{isMobile == false && clickedDetail && (
				<div className="relative w-[50%]">
					<motion.div
						animate={{ x: '0px', opacity: 1 }}
						initial={{ x: '100px', opacity: 0 }}
						exit={{ x: '100px', opacity: 0 }}
					>
						<DetailPage ClickedProperty={true} Id={clickedDetail} />
					</motion.div>

					<div
						className="absolute right-[2%] top-[2%] cursor-pointer"
						onClick={() => setclickedDetail('')}
					>
						<div className="flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-primary text-center font-semibold text-white">
							X
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
