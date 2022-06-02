import { getMovieDetails } from "services/fetch";
import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import DetailsPage from "components/DetailsPage/DetailsPage";

function MovieDetailsPage() {
const[movies,setMovies] = useState(null)
const {movieId} = useParams()

useEffect(()=>{
  getMovieDetails(movieId).then(setMovies)
},[movieId])


return movies && <DetailsPage movies={movies}/>
}

export default MovieDetailsPage