import {useParams} from "react-router-dom"
import {getMovieReviews} from "services/fetch"
import { useEffect,useState } from "react"
import Revies from "components/Revies/Revies"

function ReviesViews(params) {
const {movieId} = useParams (null)
const[revies,setRevies]= useState([])
useEffect(()=>{
getMovieReviews(movieId).then(setRevies)
},[movieId])

 return revies.length>1?<Revies array={revies}/>:<h3>We don`t have any revies for his movie</h3>
}
export default ReviesViews