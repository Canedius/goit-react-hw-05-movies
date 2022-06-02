import s from "./ListMovie.module.css"
import PropTypes from 'prop-types'; // ES6
import {Link,useLocation} from "react-router-dom"
function ListMovie({films}) {
    const location = useLocation()
    const DeafaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    return films && (
        <section>
        <ul className={s.filmCcardList}>
          {films.map(({id,title,poster_path})=>{
            const avatar = poster_path ?`https://image.tmdb.org/t/p/w500${poster_path}`:DeafaultImg
           return <li title={title} className={s.filmCardItem} key={id}>
             <Link to={`/movies/${id}`} state={{from:location}} className={s.link}> 
            <div>
                <img className={s.imgMovie}
                  src={avatar}
                  alt={title}
                />
                <h2 className={s.filmCardTitle}>{title}</h2>
            </div>
            </Link>
        </li>
        }
        
      )}
        </ul>
        </section>
      )
    
} 

export  default ListMovie

ListMovie.propTypes={
  films :PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }))
}