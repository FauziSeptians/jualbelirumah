import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import HomePage from "../pages/UserPub/HomePage";
import NotFoundPages from "../pages/error/NotFoundPages";

export default function PublicRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/admin" element={<AdminHomePage />} />
          <Route path="*" element={<NotFoundPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
