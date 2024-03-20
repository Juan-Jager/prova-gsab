import { useEffect } from "react";
import gsap from "gsap";



const Header = ()=>{

    useEffect(()=>{
        gsap.to("#h1",{
            x: 100,
            duration:3
        })
    },[])
      
    

    return (
        <div>

            <h1 id="h1" className="max-w-min">juaan</h1>
            
        </div>
    )
}

export default Header;