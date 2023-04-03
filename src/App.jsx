import { useEffect } from "react";
import imagelist from "./components/Images";
import Slider from "./components/Slider";

function App() {
  useEffect(()=> {
    imagelist
  },[])

  return (
    <div className="App">
      <h1 className="heading">Travel Destinations</h1>
      
      <Slider imagelist={imagelist} />
    </div>
  );
}

export default App;
