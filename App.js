import './App.css';
import Headr from './component/headr';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Contakt from './component/contakt/contakt';
import Footer from './component/foter/footer';
import Glavnay from './component/glavnay/glavnay';
import Inttv from './component/glavnay/inttv/inttv';
import Login from './component/login/login';


function App() {
  
  return (
    <div  >

      <BrowserRouter>
    
    <Route path="/contakt" component={Headr}/>
    <Route path="/glavnay" component={Headr}/>
        <Route path="/lc" component={Login} />
        <Route path="/contakt" component={Contakt} />
        <Route path="/glavnay" component={Glavnay} />
        <Route path="/glavnay"  component={Inttv} />

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
