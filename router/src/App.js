import React from 'react';
// import Inicio from'./components/Inicio.js'
// import Base from './components/Base.js'
import Usuarios from'./components/Usuarios.js'
import Usuario from'./components/Usuario.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';


function App() {
  return (
    // <Router>
    //   <Link to="/inicio">Inicio</Link>
    //   <Link to="/">Base</Link>

    //   <Switch>
    //   <Route exact path="/"> 
    //       <Base/>
    //     </Route>
    //     <Route path="/inicio/:nombre"> 
    //       <Inicio/>
    //     </Route>
    //   </Switch>
    // </Router>
    <Router>
      <Link to="/"> Usuarios</Link>

      <Switch>
        <Route exact path="/">
          <Usuarios/>
        </Route>
        <Route path="/usuario/:id">
          <Usuario/>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
