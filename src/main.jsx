import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Auth0Provider } from "@auth0/auth0-react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { MoviesSubListPage } from "./pages/MoviesSubListPage";
// import NavTVShowsPopularPage from "./pages/NavTVShowsPopularPage";
// import NavTVShowsAiringTodayPage from "./pages/";
// import NavTVShowsOnTVPage from "./pages/NavTVShowsOnTVPage";
// import NavTVShowsTopRatedPage from "./pages/NavTVShowsTopRatedPage";
import NavPeoplePopularPeoplePage from "./pages/NavPeoplePopularPeoplePage";
import MoviePageAccID from "./pages/MoviePageAccID";
import { AuthProvider } from "./context/authContext";
import { FavoritesProvider } from "./context/favorite-movies.context";

import FavoritesMovies from "./pages/FavoritesMovies";
import { MOVIES_QUERY_KEYS } from "./Queries/moviesquery";
import { TvShowsSubListPage } from "./pages/TVShowsSubListPage";
import { TV_SHOWS_QUERY } from "./Queries/tvshowsquery";

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
        element: (
          <MoviesSubListPage
            queryKey={MOVIES_QUERY_KEYS.POPULAR}
            heading="Popular"
          />
        ),
      },
      {
        path: "/moviesnowplaying",
        element: (
          <MoviesSubListPage
            queryKey={MOVIES_QUERY_KEYS.NOW_PLAYING}
            heading="Now Playing"
          />
        ),
      },
      {
        path: "/moviesupcoming",
        element: (
          <MoviesSubListPage
            queryKey={MOVIES_QUERY_KEYS.UPCOMING}
            heading="Upcoming"
          />
        ),
      },
      {
        path: "/moviestoprated",
        element: (
          <MoviesSubListPage
            queryKey={MOVIES_QUERY_KEYS.TOP_RATED}
            heading="Top Rated"
          />
        ),
      },
      {
        path: "/tvshowspopular",
        element: (
          <TvShowsSubListPage
            queryKey={TV_SHOWS_QUERY.POPULAR}
            heading="Popular TvShows"
          />
        ),
      },
      {
        path: "/tvshowsairingtoday",
        element: (
          <TvShowsSubListPage
            queryKey={TV_SHOWS_QUERY.AIRING_TODAY}
            heading="Airing Today"
          />
        ),
      },

      {
        path: "/tvshowsontheair",
        element: (
          <TvShowsSubListPage
            queryKey={TV_SHOWS_QUERY.ON_THE_AIR}
            heading="On The Air"
          />
        ),
      },
      {
        path: "/tvshowstoprated",
        element: (
          <TvShowsSubListPage
            queryKey={TV_SHOWS_QUERY.TOP_RATED}
            heading="Top Rated TVshows"
          />
        ),
      },
      {
        path: "/peoplepopularpeople",
        element: <NavPeoplePopularPeoplePage />,
      },
      {
        path: "/movie/:id",
        element: <MoviePageAccID />,
      },
      {
        path: "/favorites",
        element: <FavoritesMovies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </FavoritesProvider>
    </AuthProvider>
  </React.StrictMode>
);
