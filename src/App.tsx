import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import Home from './Home'
import Projects from './Projects';
import BlogPosts from './BlogPosts';
import Certifications from './Certifications';
import PostBlock from './Post';
import { Analytics } from '@vercel/analytics/react';

function App() {

  return (
    <Router>
      <div>
        <Analytics />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/projects/:id' element={<Projects />} />
          <Route path="/posts" element={<BlogPosts />} />
          <Route path='/posts/:id' element={<PostBlock />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  )
}

export default App
