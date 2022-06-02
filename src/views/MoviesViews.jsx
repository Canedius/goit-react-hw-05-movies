import {} from "react-router-dom"
import {useState,useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import { getMovie } from "services/fetch"
import ListMovie from "components/ListMovie/ListMovie"
import FormBar from "components/FormBar/FormBar"

function MoviesPage() {
 const [movies,setMovies] = useState(null)
 const [searchParams, setSearchParams] = useSearchParams();
 const query = searchParams.get('query')

 useEffect(()=>{
     if (!query) {
       return
     }
getMovie(query).then(setMovies)

 },[query])


 const onSubmit=(value)=>{
    setSearchParams({ query: `${value}` });
 }
 
return<>
    <FormBar onSubmit={onSubmit}/>
    {movies && <ListMovie films = {movies}/>}

</>

  

}
export default MoviesPage