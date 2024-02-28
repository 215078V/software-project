import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';


function App() {
  return (

    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<PageOne />} /> */}

    //     <Route index element={<PageOne />} />
    //     <Route path="/PageOne" element={<PageOne />} />
    //     <Route path="/PageTwo/:appName" element={<PageTwo />} />
    //   </Routes>
    // </Router>


    // <div>
    <BrowserRouter>
      <Routes>

        <Route index element={<PageOne />} />
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/PageTwo/:appName" element={<PageTwo />} />

      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;