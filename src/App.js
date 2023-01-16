import './App.css';
import {HashRouter} from "react-router-dom";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
              <Route>
                  <Route exact path="/" element={<Resources />} />
                  <Route exact path="/about" element={<About />} />
              </Route>
          </Routes>
      </HashRouter>

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
