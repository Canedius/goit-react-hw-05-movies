import s from "./FormBar.module.css"
import { useState,} from "react"
import PropTypes from 'prop-types'; // ES6

function FormBar({onSubmit}) {
const [value,setValue] = useState("")

const reset = () => {
    setValue("");
  };
  
const handleSubmit = e => {
 e.preventDefault();
 if (value.trim() === "") {
return alert(`Ведите название запроса`)
 }
 onSubmit(value);
reset();
}

const moviesChange =(e)=>{
 setValue(e.currentTarget.value)
}

    
 return <>
 <form autoComplete="off" className={s.form} onSubmit={handleSubmit}>
<input type="text" value={value} placeholder="Search movies"  onChange={moviesChange}/>
<button type="submit">Search</button>
 </form>
 </>
}
export default FormBar

FormBar.propTypes={
  onSubmit :PropTypes.func.isRequired
    
}