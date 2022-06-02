import s from "./Cast.module.css"
import PropTypes from 'prop-types'; // ES6
function Cast({actors}) {
    const DeafaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png"
    return<div className={s.wrapp}>
    <ul className={s.list}>
    {actors.map(({profile_path,name,character,id})=>{
     const avatar = profile_path ?`https://image.tmdb.org/t/p/w500${profile_path}`:DeafaultImg
    return  <div className={s.item} key={id}>
              <img src={avatar} alt={name} />
              <div>
               <p>Name Actor : {name}</p>
              <p>Character : {character}</p>
           </div>
           </div> 
    })}
    </ul>
    </div>
}
export default Cast

Cast.propTypes={
    movies:PropTypes.shape(
    PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    }))
  }