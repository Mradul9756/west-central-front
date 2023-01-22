//import {BrowserRouter, Switch, Routes, Route} from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// use react toastify - https://www.npmjs.com/package/react-toastify
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home.js";
import View from "./pages/View.js"

// register the route to home (use switch)
function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addContact" element={<AddEdit/>} />
            <Route path="/update/:Fname" element={<AddEdit/>} />
            <Route path="/view/:Fname" element={<View/>} />
         </Routes>
      </div>
    </Router>
  );
}
export default App;