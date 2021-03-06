import { Route,Routes } from "react-router-dom"
import { lazy,Suspense} from "react"
import Navigation from "./Nav/Navigation";

// const Navigation = lazy(()=>import("./Nav/Navigation"))
// const Container = lazy(()=>import("./Container/Container"))

// import HomePageViews from "../views/HomePageViews"
// import MovieDetailsViews from "../views/MovieDetailsViews"
// import CastViews from "../views/CastViews";
// import ReviesViews from "../views/ReviesViews";
// import MoviesViews from "../views/MoviesViews";
const HomePageViews = lazy(()=>import("../views/HomePageViews" /* webpackChunkName: "HomePageViews" */))
const MoviesViews = lazy(()=>import("../views/MoviesViews" /* webpackChunkName: "MoviesViews" */))
const MovieDetailsViews = lazy(()=>import("../views/MovieDetailsViews" /* webpackChunkName: "MovieDetailsViews" */))
const CastViews = lazy(()=>import("../views/CastViews" /* webpackChunkName: "CastViews" */))
const ReviesViews = lazy(()=>import("../views/ReviesViews" /* webpackChunkName: "ReviesViews" */))
const NotFoundPage = lazy(()=>import("../views/NotFoundPage" /* webpackChunkName: "NotFoundPage" */))


export const App = () => {
  return (
    <>
    <Suspense>
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<HomePageViews/>}/>
        <Route path="/moviese" element={<MoviesViews/>}/>
        <Route path="/movies/:movieId/" element={<MovieDetailsViews/>}>
          <Route  path="cast" element={<CastViews/>}/>
          <Route  path="revies" element={<ReviesViews/>}/>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
       </Route>
   </Routes>
   </Suspense>
   </>  
  );
};

