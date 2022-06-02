import s from "./Navigation.module.css"
import {NavLink} from "react-router-dom"

const Navigation=({children})=>{
return<>
<header className={s.header} >
    <nav >
        <NavLink className={({isActive})=>isActive?s.active:s.link}  to="/" index="true" >Home</NavLink>
        <NavLink className={({isActive})=>isActive?s.active:s.link} to="/moviese">Moviese</NavLink>
    </nav>      
</header>
{children}  
    </>
}

export default Navigation