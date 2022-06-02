import s from "./Revies.module.css"
import PropTypes from 'prop-types'; // ES6
function Revies({array}) {
   return array.map(({author,content,id,updated_at})=>{
        return <article className={s.coment} key={id}>
        <h3>{author}</h3>
        <b>{updated_at}</b>
        <p>{content}</p>
        </article>
        }) 
}

export  default Revies

Revies.propTypes={
  array :PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id:PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
  }))}
  