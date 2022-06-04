import {Outlet,NavLink} from "react-router-dom"
import s from "./DetailsPage.module.css"
import {useLocation,useNavigate} from "react-router-dom"
import PropTypes from 'prop-types'; // ES6


function DetailsPage({movies}) {
const location = useLocation()
const navigate = useNavigate()
const {poster_path,title,vote_average,overview,genres} = movies
const goBack=()=>{
    navigate(location?.state?.from ?? '/')
    }
    const DeafaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    const avatar = poster_path?`https://image.tmdb.org/t/p/w500${poster_path}`:DeafaultImg
    return(<section>
        <div className={s.wrapp}>
          <button type="button" className={s.backButton} onClick={goBack}>Back</button>
         <img src={avatar} alt={title} />
         <div className={s.moviesInfo}>
             <h2>{title}</h2>
             <p>User score {vote_average}</p>
             <h3>Overviev</h3>
             <p>{overview}</p>
             <h3>Genres</h3>
             <p>{genres.map(genr =>genr.name).join("/")}</p>
         </div>
         </div>
         <div className={s.additional}>
         <p>Additional information</p>
         <ul>
           <li><NavLink state={location.state} to="cast"  >Cast</NavLink></li>
           <li><NavLink state={location.state} to="revies">Revies</NavLink></li>
         </ul>
         </div>
         <Outlet />
         </section>)
}

export default DetailsPage

DetailsPage.propTypes={
  movies:PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }),
}