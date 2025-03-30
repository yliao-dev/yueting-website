import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";

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
          <Route path="project/:id" element={<ProjectPage />} />
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
