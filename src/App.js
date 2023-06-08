import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Bigimg from './Components/Bigimg';
import dataArr from './data/data'
import SmallImg from './Components/SmallImg';


console.log(dataArr)


function App() {
  return (
    <div className="App">
      <NavBar />
      <Bigimg />
      <div style={{flexDirection: 'row',
    display: 'flex'}}>
      {dataArr.map(data => (
        <SmallImg data={data}/> 
      )) }
      </div>
    </div>
  );
}

export default App;
