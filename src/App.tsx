import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";

import MainLayout from "./components/layouts/MainLayout";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PostPage = lazy(() => import("./pages/PostPage"));

// Test loading
// const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
// const ProjectPage = lazy(() =>
//   delay(2000).then(() => import("./pages/ProjectPage"))
// );

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path="project/:id" element={<ProjectPage />} />
        </Route>
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="blog">
          <Route index element={<BlogPage />} />
          <Route path="post/:id" element={<PostPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    // <Suspense fallback={<h2 className="page-loading">Loading...</h2>}>
    <RouterProvider router={router} />
    // </Suspense>
  );
};

export default App;
