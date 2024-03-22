import Animation from "./loading/Animation";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const App = () => {
  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  const handleAnimationsComplete = () => {
    setAnimationsCompleted(true);
  };

  const animationRef = useRef(null);

  
  useEffect(() => {
    if (animationsCompleted) {
      const tl = gsap.timeline();

      const bodyAnimation1 = gsap.from(".body-animation", {opacity: 0, duration: 1.3 });
      const headerAnimation1 = gsap.from(".header-animation", {opacity: 0, yPercent: '-100', duration: 1.3,});

      tl.to(animationRef.current, {
        yPercent: '-100', 
        duration: 1,
        stagger: 1,
      }).set(".animation", {
        stagger: 1,
        display: 'none',
      })
      .add(bodyAnimation1)
      .add(headerAnimation1)
      .from(".footer-animation", {
        opacity: 0,
        yPercent: '100', 
        duration: 1,
      })
    }
  }, [animationsCompleted]);

  
  return (
    <>
      <div className="animation" ref={animationRef}>
        <Animation onAnimationComplete={handleAnimationsComplete}/>
      </div>
      
        {animationsCompleted ? <Header/>: null}
     
     
        {animationsCompleted ? <Body/>: null}
      
   

        {animationsCompleted ? <Footer/> : null}
      
    </>
  )
}

export default App;