import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dataPerumahanType } from '../types/CardTypes'

export default function MiniCardPopularComponent({
	data,
}: {
	data: dataPerumahanType
}) {


	return (
		<Link to={`/detail/${data.Id}`} className="w-full">
			
		</Link>
	)
}
