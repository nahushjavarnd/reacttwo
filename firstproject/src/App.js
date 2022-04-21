import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Component/firstcomponent';
import listofdetails from './Component/listofdetails'
import Rendaringlist from './Component/listofdetails';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">

          <FunctionalComp></FunctionalComp>

        </header>



      </div>
      <div >
        <Rendaringlist></Rendaringlist>
      </div>
    </>
  );
}

export default App;
