import Animation from "./loading/Animation";
import Overview from "./pages/Overview";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
const App = () => {
  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  const handleAnimationsComplete = () => {
    setAnimationsCompleted(true);
  };

  const animationRef = useRef(null);

  useEffect(() => {
    if (animationsCompleted) {
      const tl = gsap.timeline();
      tl.to(animationRef.current, {
        yPercent: '-100', 
        duration: 2,
        stagger: 1,
      }).set(".animation", {
        stagger: 1,
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
    <>
      <div className="animation" ref={animationRef}>
        <Animation onAnimationComplete={handleAnimationsComplete}/>
      </div>
      <div className="overview">

        {animationsCompleted ? <Overview/> : null}
      </div>
    </>
  )
}

export default App;