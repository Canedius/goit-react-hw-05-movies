import s from "./Revies.module.css"
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