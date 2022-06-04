import s from "./Navigation.module.css"
import {NavLink,Outlet} from "react-router-dom"
import Container from "components/Container/Container"

const Navigation=({children})=>{
return<>
<header className={s.header} >
    <nav >
        <NavLink className={({isActive})=>isActive?s.active:s.link}  to="/" index="true" >Home</NavLink>
        <NavLink className={({isActive})=>isActive?s.active:s.link} to="/moviese">Moviese</NavLink>
    </nav>      
</header>
<Container>
<Outlet/>
</Container>    
</>
}

export default Navigation