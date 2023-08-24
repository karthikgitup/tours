
import './App.css';
import Carousel from './Components/Carousel/Carousel';
import Nav from './Components/Nav/Nav';
// import ChennaiImage from './images/Chennai.jpeg';
// import { homePagedatas } from './datas';
import Place from './Components/Places/Place';

function App() {
  return (
    <div className="App">
     
     <Nav />
      <Carousel />
     <Place />


    </div>
  );
}

export default App;
