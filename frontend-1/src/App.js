import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra from './components/Barra.js';
import RegistrarProyecto from './components/RegistrarProyecto.jsx';
//import Index from './components/Index.jsx';
import VerEstudiantes from './components/VerEstudiante.jsx';
import VerProyectos from './components/VerProyecto';


function App() {
return (
<Router>
<Barra/>
{/* <Route path= ' ' exact component={ }/> */}
<Route path= '/rproyecto' exact component={RegistrarProyecto}/>
{/* <Route path= ' ' exact component={ }/> */}
<Route path= '/verestudiantes' exact component={VerEstudiantes}/>
{/* <Route path= ' ' exact component={ }/> */}
<Route path= '/verproyectos' exact component={VerProyectos}/>
</Router>
);
}
export default App;