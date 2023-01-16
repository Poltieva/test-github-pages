import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route>
                  <Route exact path="/" element={<Resources />} />
                  <Route exact path="/about" element={<About />} />
              </Route>
          </Routes>
      </BrowserRouter>

    </div>
  );
}

function Resources() {
    return(
        <p>Resources</p>
    )
}
function About() {
    return(
        <p>About</p>
    )
}

export default App;
