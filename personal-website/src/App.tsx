import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./components/layouts/MainLayout";

import HomePage from "./pages/HomePage";

import BlogLayout from "./components/layouts/BlogLayout";
import BlogPage from "./pages/BlogPage";

import PortfolioLayout from "./components/layouts/PortfolioLayout";
import PortfolioPage from "./pages/PortfolioPage";

import ContactLayout from "./components/layouts/ContactLayout";
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
        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route index element={<PortfolioPage />} />
        </Route>
        {/* gallery */}
        <Route path="/gallery" element={<MainLayout />}>
          <Route index element={<GalleryPage />} />
        </Route>
        {/* blog */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPage />} />
        </Route>
        {/* contact */}
        <Route path="/contact" element={<ContactLayout />}>
          <Route index element={<ContactPage />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
