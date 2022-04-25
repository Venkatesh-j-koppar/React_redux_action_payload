import logo from './logo.svg';
import './App.css';
//import HookBookcontainer from './component/HookBookcontainer';
// import Bookcontainer from './component/bookcontainer';
import HookPencontainer from './component/HookPenContainer';
import { Provider } from 'react-redux';

import store1 from "./redux/penstore"
function App() {
  console.log(store1)
  return (
    <Provider store={store1}>
    <div className="App">
     <HookPencontainer></HookPencontainer>
    
    </div>
    </Provider>
  );
}

export default App;
