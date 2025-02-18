import { ourServices } from '../../data/ourServices'
import { useDataGallery } from '../../hooks/useDataGallery'

export default function AboutUsPage() {
	const { data } = useDataGallery()
	return (
		<div className="flex h-[820px] w-full flex-col gap-14 overflow-x-auto">
			<section className="relative h-[400px] w-full">
				<div className="absolute top-0 h-full w-full bg-black opacity-30"></div>
				<img
					src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
					className="h-full w-full object-cover"
				></img>
				<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse text-nowrap text-5xl font-semibold text-neutral">
					About Us Pages
				</div>
			</section>
			<section id="our-services bg-red-200 " className="p-5">
				<div className="flex h-fit w-full flex-col items-center justify-center gap-14">
					<div className="flex-col gap-6 text-center">
						<div className="text-md font-semibold">Visi & Misi</div>
						<div className="w-full text-center text-sm">
							This is our visi and mission through this company
						</div>
					</div>
					<div className="flex w-full max-w-6xl flex-col gap-6 text-justify md:mx-5 md:flex-row">
						<div className="w-full border-black border-opacity-20 sm:border-r-1 md:p-10">
							<div className="text-sm font-semibold">Visi</div>
							<div className="text-sm">
								Menjadi agen properti terkemuka yang memberikan layanan terbaik,
								inovatif, dan profesional kepada setiap klien, serta menjadi
								mitra terpercaya dalam memenuhi kebutuhan properti mereka.
							</div>
						</div>
						<div className="w-full md:p-10">
							<div className="text-sm font-semibold">Misi</div>
							<div className="text-sm">
								Memberikan layanan yang personal dan berkualitas tinggi kepada
								setiap klien untuk membantu mereka mencapai tujuan properti
								mereka. Menyediakan informasi dan saran yang akurat serta
								terkini tentang pasar properti untuk membantu klien membuat
								keputusan yang tepat. Memastikan transparansi dan kejujuran
								dalam setiap transaksi properti yang kami lakukan.
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="our-services" className="relative">
				<div className="flex h-full w-full flex-col gap-14 rounded-md bg-secondary p-5 sm:h-[400px]">
					<div className="flex h-full w-full justify-center">
						<div className="mt-14 text-center">
							<div className="text-md font-semibold">Our Services</div>
							<div className="text-sm">
								Provide you a nice property for your beloved family
							</div>
						</div>
					</div>
					<div className="mx-5 hidden w-full justify-center sm:absolute sm:bottom-0 sm:left-0 sm:flex">
						<div className="flex w-full max-w-6xl gap-6">
							{ourServices.map((value: any) => {
								return (
									<div className="flex h-[200px] cursor-pointer items-center justify-center rounded-t-md bg-neutral p-4 text-center text-sm transition-all hover:scale-105 hover:bg-primary hover:text-secondary focus:bg-primary">
										<div className="flex-col gap-5">
											<div className="mb-5 flex justify-center">
												<div className="rounded-full bg-secondary p-3">
													{value.icon}
												</div>
											</div>
											<div className="text-xs">{value.text}</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<div className="flex flex-col gap-6 sm:hidden">
						{ourServices.map((value: any) => {
							return (
								<div className="flex h-[200px] items-center justify-center rounded-t-md bg-neutral p-4 text-center text-sm">
									<div className="flex-col gap-5">
										<div className="mb-5 flex justify-start">
											<div className="rounded-full bg-secondary p-3">
												{value.icon}
											</div>
										</div>
										<div className="text-justify text-sm sm:text-xs">
											{value.text}
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>
			<section className="flex w-full flex-col gap-6 p-5">
				<div className="flex items-center justify-center">
					<div className="text-center">
						<div className="text-md font-semibold">Gallery</div>
						<div className="text-sm">
							Search the best residence for your family
						</div>
					</div>
				</div>
				<div className="flex w-full justify-center">
					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
						{data?.additionalData.map((item) => {
							return (
								<img
									src={item}
									className="h-[220px] w-[220px] cursor-pointer rounded-md object-cover hover:scale-105"
								></img>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}
