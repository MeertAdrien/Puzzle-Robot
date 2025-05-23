
import Header from "./components/Header";
import "./App.css";
import PuzzleRobot from './components/Robot-Puzzle';
import Footer from "./components/Footer";


function App (){
   return (
    <>
     <div>
        <Header /> 
        <PuzzleRobot/>
        <Footer/>
       </div>
    </>
   )
}

export default App;
