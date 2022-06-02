import {getTrending} from "services/fetch"
import { useEffect,useState,} from "react"
import ListMovie from "components/ListMovie/ListMovie"


function HomePage() {
   const [trends,setTrends] = useState(null)
   
    useEffect(()=>{
        getTrending().then(setTrends)   
    },[])

 return trends && <ListMovie films={trends}/>
}
export default HomePage