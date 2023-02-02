import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from "./components/home";
import Scheme from './components/schemes';
import Grievance from './components/grievance';
import Blogs from './components/blogs';
import Chat from './components/chat';
import Jobs from './components/jobs';
import Footer from "./components/footer";
import background from './assets/bg.jpg'


function App() {
  return (
    <>
    <div style={{backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundImage : 'behind'}}>
      Hello World!
    </div>
    <Router>
      <div className="container ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheme" element={<Scheme />} />
          <Route path="/grievance" element={<Grievance />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>
  );
}

export default App;
