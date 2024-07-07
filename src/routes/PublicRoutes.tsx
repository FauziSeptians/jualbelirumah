import { Spinner } from '@nextui-org/react'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUsPage from '../pages/UserPub/ContactUsPage'
import ErrorsPages from '../pages/error/ErrorsPages'

const HomePage = lazy(() => import('../pages/UserPub/HomePage'))
const DetailPage = lazy(() => import('../pages/UserPub/DetailPage'))
const AdminHomePage = lazy(() => import('../pages/Admin/AdminHomePage'))
const PropertyPage = lazy(() => import('../pages/UserPub/PropertyPage'))
const AboutUsPage = lazy(() => import('../pages/UserPub/AboutUsPage'))
const NotFoundPages = lazy(() => import('../pages/error/NotFoundPages'))
const Layout = lazy(() => import('../components/layout/Layout'))

export default function PublicRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route
						index
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<HomePage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route path="/admin" element={<AdminHomePage />} />
					<Route
						path="/detail/:id"
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<DetailPage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route
						path="/property"
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<PropertyPage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route
						path="/property/:search?/:page"
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<PropertyPage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route
						path="/about"
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<AboutUsPage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<Suspense
								fallback={
									<div className="items- fixed z-[1000] flex h-screen w-full justify-center bg-[white] text-white">
										<Spinner color="primary" className="text-white" />
									</div>
								}
							>
								<ErrorBoundary FallbackComponent={() => ErrorsPages()}>
									<Layout>
										<ContactUsPage />
									</Layout>
								</ErrorBoundary>
							</Suspense>
						}
					/>
					<Route path="*" element={<NotFoundPages />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
