import { motion } from 'framer-motion'

export default function SectionMenuComponent({
	Text,
	setHoverText,
	boolHovered
}: {
	Text: string
	setHoverText: (text: string) => void
	boolHovered: boolean
}) {
	return (
		<div
			className="flex cursor-pointer flex-col gap-2"
			onClick={() => setHoverText(Text)}
		>
			<div className={`${boolHovered && 'text-primary'} text-sm`}>{Text}</div>

			{boolHovered ? (
				<motion.div
					className="h-[2px] w-[45px] bg-primary"
					initial={{ width: '0px' }}
					animate={{ width: '45px' }}
				></motion.div>
			) : null}
		</div>
	)
}
