import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./components/layouts/MainLayout";

import HomePage from "./pages/HomePage";

import BlogPage from "./pages/BlogPage";

import PortfolioPage from "./pages/PortfolioPage";

import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Home */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* portfolio */}
        <Route path="/portfolio" element={<MainLayout />}>
          <Route index element={<PortfolioPage />} />
        </Route>
        {/* gallery */}
        <Route path="/gallery" element={<MainLayout />}>
          <Route index element={<GalleryPage />} />
        </Route>
        {/* blog */}
        <Route path="/blog" element={<MainLayout />}>
          <Route index element={<BlogPage />} />
        </Route>
        {/* contact */}
        <Route path="/contact" element={<MainLayout />}>
          <Route index element={<ContactPage />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
