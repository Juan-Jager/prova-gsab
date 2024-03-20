import { useLayoutEffect, useRef } from "react";
import gsap from "gsap"

const Animation = ({ onAnimationComplete }) => {
  const comp = useRef(null);

  useLayoutEffect(()=>{  /* layoutEffect si carica in modo sync dopo che il DOM viene aggiornato ma prima che venga effettuato il rendering a schermo  */

    let ctx = gsap.context(()=>{
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.8,
      }).from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 1,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: .5,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 1.5,
        onComplete: onAnimationComplete,
      })
    }, comp)
    
      
    return () => ctx.revert()
  }, [])
  return (
    <div className="relative" ref={comp}>
      <div  id="intro-slider" className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 justify-center tracking-tighter place-items-center ">
        <h1 className="text-5xl" id="title-1">Web developer</h1>
        <h1 className="text-5xl" id="title-2">web designer</h1>
        <h1 className="text-5xl" id="title-3">hacker</h1>
    
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center ">

        <h1 id="welcome" className="text-9xl font-bold text-gray-100 font-spaceGrotesk">Welcome</h1>

      </div>
    </div>
  )
}

export default Animation;