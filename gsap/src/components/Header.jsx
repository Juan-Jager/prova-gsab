import { useEffect } from "react";
import gsap from "gsap";



const Header = ()=>{

    // useEffect(()=>{
    //     gsap.to("#h1",{
    //         x: 100,
    //         duration:3
    //     })
    // },[])
      
    

    return (
        <div className="flex justify-between items-center bg-gray-950 py-4 px-6">
        <h1 id="h1" className="text-gray-200">juan</h1>
        <div>
      <a href="/" className="text-gray-200 mr-4">fbi</a>
      <a href="/" className="text-gray-200">imigracion</a>
    </div>
  </div>
    )
}

export default Header;

