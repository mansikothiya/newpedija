import UserDetail from './UserDetail';
import './App.css';
import Location from './Location';
import LocationDetail from './LocationDetail';
import SearchLocation from './SearchLocation';
import MiniPedija from './MiniPedija';
import PromoCode from './PromoCode';
import Preference from './Preference';
import {BrowserRouter,Link,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" ><Location /></Route>
      <Route exact path="/location" ><Location /></Route>
      <Route exact path="/searchlocation" ><SearchLocation /></Route>
      <Route exact path="/userdetail" ><UserDetail /></Route>
      <Route exact path="/locationdetail"><LocationDetail /></Route>
      <Route exact path="/minipedija"><MiniPedija /></Route>
      <Route exact path="/promocode"><PromoCode /></Route>
      <Route exact path="/preferences"><Preference /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
