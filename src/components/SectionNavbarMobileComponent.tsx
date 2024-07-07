import { useAtom } from 'jotai'
import { PopupModals } from '../store/popupModalsNavbar'

export function SectionNavbarMobileComponent() {
	const [, setPopupModal] = useAtom(PopupModals)
	return (
		<div
			className="relative mr-[20px] block h-[20px] w-[25px] rounded-sm bg-white p-4 lg:hidden"
			onClick={() => setPopupModal(true)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-primary"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</div>
	)
}
