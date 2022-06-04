import {useParams} from "react-router-dom"
import { getMovieCredits } from "services/fetch"
import { useEffect,useState } from "react"
import Cast from "components/Cast/Cast"

function CastViews() {
    
const {movieId} = useParams (null)
const [actors,setActors] = useState()

useEffect(()=>{
getMovieCredits(movieId).then(setActors)
},[movieId])
 
return actors &&<Cast actors={actors}/>


}
export default CastViews