import { Link } from 'react-router-dom'
import { SectionMenu } from '../data/navbarMenu'

export default function FooterComponent() {
	return (
		<div className="flex h-full w-full justify-center rounded-t-[10px] bg-[#081b36]">
			<div className="m-4 flex h-[300px] w-full max-w-[1800px] flex-col justify-between gap-12 text-neutral sm:flex-row sm:items-center sm:gap-0 sm:px-8">
				<div className="flex font-semibold tracking-wider">
					PRESTASI PROPERTY
				</div>
				<div className="flex flex-1 flex-col gap-3 sm:text-end">
					<div className="font-semibold">Halaman Website</div>
					<div className="flex flex-col gap-3 text-sm justify-end items-end">
						{SectionMenu.map((item: any) => {
							return (
								<Link to={item.Url}>
									<div className="cursor-pointer hover:scale-[1.03] w-fit">
										{item.Title}
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
