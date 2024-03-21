import Animation from "../loading/Animation";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Footer = ()=>{ 

    const [animationsCompleted, setAnimationsCompleted] = useState(false);
  
    const handleAnimationsComplete = () => {
      setAnimationsCompleted(true);
    };
  
    const animationRef = useRef(null);
  
    useEffect(() => {
      if (animationsCompleted) {
        const tl = gsap.timeline();
        tl.to(animationRef.current, {
          yPercent: '100', 
          duration: 2,
          stagger: 1,
        }).set(".footer-animation", {
          display: 'none',
          stagger: 1,
        }).from(".overview", {
          opacity: 0,
          yPercent: '-100', 
          duration: .3,
        })
      }
    }, [animationsCompleted]);

    return (
        <div className="footer-animation flex justify-between items-center bg-gray-950 py-5 "  ref={animationRef}>
            <div>
                <a href="/" className="text-xl text-gray-200 ml-20 mr-4">curriculum</a>
                <a href="/" className="text-xl text-gray-200 ">about me</a>
          </div>
            <h1 id="h1" className="text-gray-200 mr-28 font-bold">juan</h1>
        </div>
    )
}

export default Footer;

