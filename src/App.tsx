import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./components/layouts/MainLayout";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-loaded pages
const HomePage = lazy(() => import("./pages/HomePage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const ProjectPage = lazy(() => import("./pages/ProjectPage"));
const ThoughtsPage = lazy(() => import("./pages/ThoughtsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const PostPage = lazy(() => import("./pages/PostPage"));

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio">
          <Route index element={<PortfolioPage />} />
          <Route path="project/:id" element={<ProjectPage />} />
        </Route>
        <Route path="gallery/:page?" element={<GalleryPage />} />
        <Route path="thoughts">
          <Route index element={<ThoughtsPage />} />
          <Route path="post/:id" element={<PostPage />} />
        </Route>
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
