import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Bigimg from "./Components/Bigimg";
import dataArr from "./data/data";
import SmallImg from "./Components/SmallImg";
import Footer from "./Components/Footer";



console.log(dataArr);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Bigimg />
      <div className="flower" >
        {dataArr.map((data) => (
          <SmallImg data={data} />
        ))}
      </div>
      <div className="bottomNav">
      <Footer />
      </div>
    </div>
  );
}

export default App;
