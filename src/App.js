import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routing from './router/Routing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommanInput from './components/UI/CommanInput';
import Circle from './components/UI/Circle';
import Cards from './components/UI/Cards';
import { Button } from 'react-bootstrap';
import RisHead from './components/UI/RisHead';
import Accord from './components/UI/Accordition';
import Notice from './components/UI/Notice';
import TabSection from './components/UI/TabSection';
import TabNavigation from './Layouts/TabNavigation';



function App() {
  return (
    <div>
      {/* <Notice/> */}
        {/* <Cards/> */}
       
        {/* <RisHead manu={true} /> */}
        {/* <TabNavigation/> */}
        {/* <ViewContainer/> */}
        {/* <Notice/>
        <TabSection/> */}
        <Router>
        <Routing/>
        <TabNavigation/>
        </Router>
       
    </div>
  );
}

export default App;
