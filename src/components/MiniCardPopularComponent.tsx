import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dataPerumahanType } from '../types/CardTypes'

export default function MiniCardPopularComponent({
	data,
}: {
	data: dataPerumahanType
}) {
	const [Hover, setHover] = useState(false)
	return (
		<Link to={`/detail/${data.Id}`}>
			<motion.div
				className="relative flex w-full cursor-pointer items-center gap-3"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				// initial={{ width: '95%' }}
				whileHover={{
					borderRadius: '15px',
					backgroundColor: '#ddebf2',
					width: '100%',
				}}
			>
				{Hover ? (
					<motion.div className="h-[100px] w-[200px]" animate={{ scale: 1.02 }}>
						<img
							src={data.Images.Thumbnail}
							className="h-full w-full rounded-[5px] bg-gray-500 object-cover shadow-lg"
						></img>
					</motion.div>
				) : (
					<div className="h-[100px] w-1/3">
						<img
							src={data.Images.Thumbnail}
							className="h-full w-full rounded-[5px] bg-gray-500 object-cover shadow-lg"
						></img>
					</div>
				)}

				<div className="flex w-2/3 flex-col gap-2">
					{Hover ? (
						<motion.div
							initial={{ y: '10px', opacity: 1 }}
							animate={{ y: '0px', opacity: 1 }}
							className="text-sm"
						>
							{data.Title}
						</motion.div>
					) : (
						<motion.div className="text-sm">{data.Title}</motion.div>
					)}
					<div className="flex flex-col gap-6">
						<div className="flex items-center gap-1 text-xs opacity-[0.6]">
							<div>
								<img src="/placeholder.png" width={16}></img>
							</div>
							{Hover ? (
								<motion.div
									initial={{ y: '10px', opacity: 1 }}
									animate={{ y: '0px', opacity: 1 }}
								>
									{data.Location}
								</motion.div>
							) : (
								<div className="w-full truncate">{data.Location}</div>
							)}
						</div>
					</div>
				</div>
			</motion.div>
		</Link>
	)
}
