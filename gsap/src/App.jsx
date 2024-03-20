import Animation from "./loading/Animation";
import Overview from "./pages/Overview";
import { useState } from "react";
const App = () => {
  const [animationsCompleted, setAnimationsCompleted] = useState(false);

  const handleAnimationsComplete = () => {
    setAnimationsCompleted(true);
  };
  
  return (
    <>
      {/* {animationsCompleted ? null : <Animation onAnimationComplete={handleAnimationsComplete} />}
      {!animationsCompleted ? null :  <Overview/>} */}
      <Overview/>
    </>
  )
}

export default App;