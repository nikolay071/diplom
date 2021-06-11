
import { NavLink, Router } from 'react-router-dom';
import './headr.css';

const Headr = (props) => {

  let cnop = [
    { name: 'о компании' },
    { name: 'сервис и помощь ' },
    { name: 'акции' },
    { name: 'оплата' },
    { name: 'Личный кабинет' }

  ]
  return (

    <div className="App">
      <header className="App-header">
<Router></Router>
        <div className="cnop" >
          <div><NavLink to="/glavnay" ><img width="50px" alt="" src="log.png" /></NavLink></div>
          <div className="text"> <NavLink to="/contakt">   {cnop[0].name} </NavLink></div>
          <div className="text" > <NavLink to="/gfg">     {cnop[1].name} </NavLink></div>
          <div className="text"> <NavLink to="/акции">     {cnop[2].name}</NavLink></div>
          <div className="text"> <a href="https://online.sberbank.ru/CSAFront/index.do#/">     {cnop[3].name} </a></div>
          <div className="lc"> <NavLink to="/lc" >{cnop[4].name}</NavLink>  </div>

        </div>

      </header>
    </div>
  );
}

export default Headr;
