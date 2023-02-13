import './App.css';
import { Store } from './Components/store/Store';
import {Header} from "./Components/Header";



function App() {
  return (
    <div className="App bg-light">
        <Header/>
        <Store/>
    </div>
  );
}

export default App;
