import {Outlet,NavLink} from "react-router-dom"
import s from "./DetailsPage.module.css"
import {useLocation,useNavigate} from "react-router-dom"


function DetailsPage({movies}) {
    const location = useLocation()
const navigate = useNavigate()

const goBack=()=>{
    navigate(location?.state?.from ?? '/')
    }

    return(<section>
        <div className={s.wrapp}>
          <button type="button" className={s.backButton} onClick={goBack}>Back</button>
         <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
         <div className={s.moviesInfo}>
             <h2>{movies.title}</h2>
             <p>User score {movies.vote_average}</p>
             <h3>Overviev</h3>
             <p>{movies.overview}</p>
             <h3>Genres</h3>
             <p>{movies.genres.map(genr =>genr.name).join("/")}</p>
         </div>
         </div>
         <div className={s.additional}>
         <p>Additional information</p>
         <ul>
           <li><NavLink to="cast"  >Cast</NavLink></li>
           <li><NavLink to="revies">Revies</NavLink></li>
         </ul>
         </div>
         <Outlet />
         </section>)
}

export default DetailsPage