import { useEffect } from "react";
import cities from "./components/cities";
import Slider from "./components/slider";

function App() {
  useEffect(()=> {
    cities
  },[])

  return (
    <div className="App">
      <h1 className="heading">Travel Destinations</h1>

      <Slider cities={cities} />
    </div>
  );
}

export default App;
