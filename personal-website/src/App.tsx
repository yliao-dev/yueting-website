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

import AboutLayout from "./components/layouts/AboutLayout";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Home */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* about */}
        <Route path="/about" element={<AboutLayout />}>
          <Route index element={<AboutPage />} />
        </Route>

        {/* portfolio */}
        <Route path="/portfolio" element={<PortfolioLayout />}>
          <Route index element={<PortfolioPage />} />
        </Route>
        {/* blog */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route index element={<BlogPage />} />
          {/* <Route path="kendo" element={<KendoBlogPage />} />
          <Route path="workout" element={<WorkoutBlogPage />} /> */}
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
