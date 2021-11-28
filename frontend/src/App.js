import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra from './components/Barra.js';
//import Index from './components/Index.jsx';
import RegistrarEstudiante from './components/RegistrarEstudiante.jsx';
import VerEstudiantes from './components/VerEstudiante.jsx';


function App() {
return (
<Router>
<Barra/>
{/* <Route path= ' ' exact component={ }/> */}
<Route path= '/restudiante' exact component={RegistrarEstudiante}/>
{/* <Route path= ' ' exact component={ }/> */}
<Route path= '/verestudiantes' exact component={VerEstudiantes}/>
</Router>
);
}
export default App;