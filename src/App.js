import Home from './Components/Home';
import History from './Components/History';
import OperationDetail from './Components/OperationDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/transactions" element={<History />} />
            <Route exact path="/transaction/:id" element={<OperationDetail />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
