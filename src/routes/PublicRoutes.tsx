import { Spinner } from "@nextui-org/react";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorsPages from "../pages/error/ErrorsPages";

const HomePage = lazy(() => import("../pages/UserPub/HomePage"));
const DetailPage = lazy(() => import("../pages/UserPub/DetailPage"));
const AdminHomePage = lazy(() => import("../pages/Admin/AdminHomePage"));
const PropertyPage = lazy(() => import("../pages/UserPub/PropertyPage"));
const AboutUsPage = lazy(() => import("../pages/UserPub/AboutUsPage"));
const NotFoundPages = lazy(() => import("../pages/error/NotFoundPages"));
const Layout = lazy(() => import("../components/layout/Layout"));

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
                  <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
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
                  <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
                    <Spinner color="primary" className="text-white" />
                  </div>
                }
              >
                <Layout>
                  <DetailPage />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/property"
            element={
              <Suspense
                fallback={
                  <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
                    <Spinner color="primary" className="text-white" />
                  </div>
                }
              >
                <Layout>
                  <PropertyPage />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/property/:search"
            element={
              <Suspense
                fallback={
                  <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
                    <Spinner color="primary" className="text-white" />
                  </div>
                }
              >
                <Layout>
                  <PropertyPage />
                </Layout>
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div className="fixed w-full h-screen bg-[white] z-[1000] flex justify-center items- text-white">
                    <Spinner color="primary" className="text-white" />
                  </div>
                }
              >
                <Layout>
                  <AboutUsPage />
                </Layout>
              </Suspense>
            }
          />
          <Route path="*" element={<NotFoundPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
