import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Edris's Portfolio";

    const baseUrl = 'https://edrisadel.dev';
    let canonicalPath = '/';

    switch (location.pathname) {
      case '/about':
        canonicalPath = '/about';
        break;
      case '/projects':
        canonicalPath = '/projects';
        break;
      case '/contact':
        canonicalPath = '/contact';
        break;
      default:
        canonicalPath = '/';
        break;
    }

    const canonicalUrl = `${baseUrl}${canonicalPath}`;

    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
