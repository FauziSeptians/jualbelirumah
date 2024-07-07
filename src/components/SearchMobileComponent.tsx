import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function SearchMobileComponent() {
	const [searchVal, setSearchVal] = useState('')
	const [searchparams, setSearchParams] = useSearchParams()
	const navigate = useNavigate()
	function handleSearchSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			if (searchVal) return navigate('/Property?search=' + searchVal)
			searchparams.delete('search')
			setSearchParams(searchparams)
		}
	}

	useEffect(() => {
		const value = searchparams.get('search')
		if (value) {
			setSearchVal(value)
		}
	}, [searchparams])

	console.log(searchVal)

	return (
		<div className="flex w-full max-w-md flex-col gap-3 rounded-md bg-white px-4 py-2 shadow-sm">
			<div className="relative flex items-center gap-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="size-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
				<input
					type="text"
					placeholder="Cari property"
					className="w-full appearance-none text-xs outline-none focus:outline-none"
					onChange={(e) => setSearchVal(e.target.value)}
					onKeyDown={handleSearchSubmit}
					value={searchVal ?? ''}
				/>
			</div>
		</div>
	)
}
