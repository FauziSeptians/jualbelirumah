import { Link } from 'react-router-dom'
import { SectionMenu, TitleMenu } from '../data/constant/NavbarMenu'
import { SectionNavbarMobileComponent } from './SectionNavbarMobileComponent'
import TimeCounter from './TimeCounter'

export default function NavbarComponent({ Path }: { Path: string }) {
	return (
		<div className="z-[1000] flex h-[70px] w-full justify-center bg-primary">
			<div className="mx-2 flex h-full w-full max-w-[1800px] items-center justify-between">
				<div className="ml-[20px] w-[12%] cursor-pointer text-white">
					{TitleMenu}
				</div>
				<section className="hidden items-center gap-9 text-sm tracking-wider lg:flex 2xl:hidden">
					{SectionMenu.map((item) => {
						if (item.Title === Path) {
							return (
								<Link to={item.Url}>
									<div className="cursor-pointer rounded-full bg-secondary px-5 py-2 text-primary">
										{item.Title}
									</div>
								</Link>
							)
						} else {
							return (
								<Link to={item.Url}>
									<div className="cursor-pointer text-ternery">
										{item.Title}
									</div>
								</Link>
							)
						}
					})}
				</section>
				<div className="flex items-center gap-5">
					<TimeCounter />
					<SectionNavbarMobileComponent />
				</div>
			</div>
		</div>
	)
}
