import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MoviePage } from "./components/body/movies-collection/moviecard";
import NavMoviesPopularPage from "./pages/NavMoviesPopularPage";
import NavMoviesNowPlayingPage from "./pages/NavMoviesNowPlayingPage";
import NavMoviesUpcomingPage from "./pages/NavMoviesUpcomingPage";
import NavMoviesTopRatedPage from "./pages/NavMoviesTopRatedPage";
import NavTVShowsPopularPage from "./pages/NavTVShowsPopularPage";
import NavTVShowsAiringTodayPage from "./pages/NavTVShowsAiringTodayPage";
import NavTVShowsOnTVPage from "./pages/NavTVShowsOnTVPage";
import NavTVShowsTopRatedPage from "./pages/NavTVShowsTopRatedPage";
import NavPeoplePopularPeoplePage from "./pages/NavPeoplePopularPeoplePage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/moviespopular",
        element: <NavMoviesPopularPage />,
      },
      {
        path: "/moviesnowplaying",
        element: <NavMoviesNowPlayingPage />,
      },
      {
        path: "/moviesupcoming",
        element: <NavMoviesUpcomingPage />,
      },
      {
        path: "/moviestoprated",
        element: <NavMoviesTopRatedPage />,
      },
      {
        path: "/tvshowspopular",
        element: <NavTVShowsPopularPage />,
      },
      {
        path: "/tvshowsairingtoday",
        element: <NavTVShowsAiringTodayPage />,
      },

      {
        path: "/tvshowsontv",
        element: <NavTVShowsOnTVPage />,
      },
      {
        path: "/tvshowstoprated",
        element: <NavTVShowsTopRatedPage />,
      },
      {
        path: "/peoplepopularpeople",
        element: <NavPeoplePopularPeoplePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
