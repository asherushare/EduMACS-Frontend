import Contact from './components/Contact';
import Signup from './components/Signup';
import Courses from './courses/Courses'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App
