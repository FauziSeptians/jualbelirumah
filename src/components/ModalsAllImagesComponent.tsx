import { useAtom } from 'jotai'
import { IdxModalAllImage, modalAllImageStore } from '../store/modalImagesStore'
import { cn } from '../utils/cn'

export default function ModalsAllImagesComponent({
	Images,
	lengthData,
}: {
	Images: string
	lengthData: number
}) {
	const [idxModalAllImage, setIdxModalAllImage] = useAtom(IdxModalAllImage)
	const [, setOpenModalAllImages] = useAtom(modalAllImageStore)
	const isMobile =
		/Iphone|iPad|iPod|Android|Opera Mini|Blackberry|webOS|Windows Phone|Samsung|HTC|Micromax|Motorola|诺基亚|索尼|华为|小米|魅族|OPPO|VIVO/i.test(
			navigator.userAgent
		)

	return (
		<div className="fixed z-[1000] flex h-screen w-full cursor-pointer items-center justify-center bg-[#000000c9]">
			<div
				className={cn(
					isMobile ? 'absolute bottom-36' : '',
					'flex w-full justify-between px-[100px] text-white'
				)}
			>
				{idxModalAllImage != 0 ? (
					<div
						className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary"
						onClick={() => setIdxModalAllImage(idxModalAllImage - 1)}
					>
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
								d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
							/>
						</svg>
					</div>
				) : (
					<div></div>
				)}
				{idxModalAllImage != lengthData ? (
					<div
						className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-primary"
						onClick={() => setIdxModalAllImage(idxModalAllImage + 1)}
					>
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
								d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
							/>
						</svg>
					</div>
				) : (
					<div></div>
				)}
			</div>
			<img
				src={Images}
				className="bg-red-300"
				onClick={() => setOpenModalAllImages([])}
			></img>
			<div className=""></div>
		</div>
	)
}
