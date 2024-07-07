import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CardLocationComponent({
	Title,
	Description,
	Images,
	ID,
}: {
	Title: string
	Description: string
	Images: string
	ID: number
}) {
	const [Hover, setHover] = useState(false)
	return (
		<Link to={`/detail/${ID}`} className="h-full w-full">
			<div
				className="relative h-[220px] w-[400px] cursor-pointer md:w-full"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<div className="h-full">
					<img
						className="h-full w-full rounded-lg object-cover"
						src={Images}
					></img>
				</div>
				{Hover && (
					<motion.div
						className="absolute bottom-0 h-[200px] w-[400px] rounded-lg bg-black opacity-[0.6] md:w-full"
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: '100%', opacity: 0.6 }}
					></motion.div>
				)}
				{Hover && (
					<motion.div
						className="absolute bottom-0 flex flex-col gap-1 p-3 text-white"
						initial={{ y: '10px', opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.2 }}
					>
						<div className="text-xs font-semibold">{Title}</div>
						<div className="line-clamp-2 text-xs opacity-[0.8]">
							{Description}
						</div>
					</motion.div>
				)}
			</div>
		</Link>
	)
}
