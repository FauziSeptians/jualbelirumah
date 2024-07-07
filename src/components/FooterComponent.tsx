import { Link } from 'react-router-dom'
import { SectionMenu } from '../data/constant/NavbarMenu'

export default function FooterComponent() {
	return (
		<div className="flex h-[300px] w-full justify-center rounded-t-[10px] bg-[#081b36]">
			<div className="flex h-full w-full max-w-[1800px] items-center justify-between text-neutral">
				<div className="flex font-semibold tracking-wider">
					PRESTASI PROPERTY
				</div>
				<div className="flex flex-col gap-3 text-end">
					<div className="font-semibold">Halaman Website</div>
					<div className="flex flex-col gap-3 text-sm">
						{SectionMenu.map((item: any) => {
							return (
								<Link to={item.Url}>
									<div className="cursor-pointer hover:scale-105">
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
