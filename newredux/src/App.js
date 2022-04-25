import logo from './logo.svg';
import './App.css';
import BagContainer from './component/BagContainer';
import { Provider } from 'react-redux';
import store1 from './redux/bagstore';

function App() {

  return (
   <Provider store={store1}>
      <BagContainer/>
      </Provider>

    
   
  
  );
}

export default App;
