import { Pagination } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CardComponent from '../../components/CardComponent'
import ErrorDataNotFound from '../../components/ErrorDataNotFound'
import SearchMobileComponent from '../../components/SearchMobileComponent'
import useDataSearch from '../../hooks/useDataSearch'
import DetailPage from './DetailPage'
import usePagination from '../../hooks/usePagination'
import { dataPerumahanType } from '../../types/CardTypes'

export default function PropertyPage() {
	const [clickedDetail, setclickedDetail] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const [page, setPage] = useState(0)
	const [totalPage, setTotalPage] = useState(0)
	const [showData, setShowData] = useState<any>()
	const keyValue = searchParams.get('search')
	const isMobile =
		/Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
			navigator.userAgent
		)

	const { dataSearch, datapages } = useDataSearch(keyValue)

	const { data, pages } = usePagination(page)

	useEffect(() => {
		console.log(page)
		searchParams.set('page', page.toString())
		setSearchParams(searchParams)
	}, [page])

	useEffect(() => {
		console.log('test')
		console.log(keyValue)
		console.log(data)
		console.log(dataSearch)
		if (dataSearch) {
			console.log('test1')
			setShowData(dataSearch)
			setTotalPage(datapages)
			return
		}
		console.log('test2')
		setShowData(data)
		setTotalPage(pages)
	}, [data, dataSearch])

	console.log(pages)
	console.log(page)

	console.log(data)
	console.log(showData)
	console.log(totalPage)

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
				<div className="mb-10 bg-neutral">
					<SearchMobileComponent />
				</div>
				{keyValue ? (
					<div className="mb-8 flex w-full items-center justify-between">
						<div>
							<div className="text-md font-semibold">{keyValue}</div>
							<div className="text-sm">{showData?.length} data</div>
						</div>
						<div>Sort by</div>
					</div>
				) : null}
				<div
					className={`w-full ${
						!clickedDetail
							? 'flex grid-cols-2 flex-col md:mb-0 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'
							: 'grid grid-cols-2'
					} gap-6`}
				>
					{showData?.length != 0 &&
						showData?.map((item: dataPerumahanType) => {
							return (
								<div onClick={() => setclickedDetail(item.Id.toString())}>
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
						<div className="flex h-[50px] w-[50px] items-center justify-center rounded-[25px] bg-primary text-center font-semibold">
							X
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
