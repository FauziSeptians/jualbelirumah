import { NextUIProvider } from '@nextui-org/react'
import './App.css'
import Routes from './routes/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
	return (
		<>
			<NextUIProvider>
				<QueryClientProvider client={queryClient}>
					<Routes />
				</QueryClientProvider>
			</NextUIProvider>
		</>
	)
}

export default App
