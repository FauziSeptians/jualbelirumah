import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import kataSemangat  from '../data/positiveWord.json'

export default function PositiveWordComponent() {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % kataSemangat.length)
		}, 5000) // Change interval (in milliseconds) to adjust speed

		return () => clearInterval(intervalId)
	}, [kataSemangat.length]) // Dependency array ensures effect runs only once

	const currentText = kataSemangat[currentIndex]

	return (
		<div className="running-text flex items-center gap-3 text-xs">
			<div>
				<img src={currentText.flag} width={16}></img>
			</div>
			<motion.span
				key={currentText.text} // Key based on current text for reactivity
				animate={{ x: 0, y: 0, opacity: 1 }} // Initial position animation
				transition={{ duration: 1 }} // Adjust animation speed
				initial={{ y: '10px', opacity: 0 }} // Start text off-screen
				whileInView={{ x: 0 }} // Animate to position on scroll
				viewport={{ once: false }} // Animate on every scroll into view
			>
				{currentText.text}
			</motion.span>
		</div>
	)
}
