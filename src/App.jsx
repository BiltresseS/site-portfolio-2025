import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToHashElement from './components/ScrollToHashElement';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import ProjectDetails from './sections/ProjectDetails';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css'

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <Projects />
              <Contact />
              <Footer />
            </Layout>
          }
        />
        <Route
          path="/project/:id"
          element={
            <Layout>
              <ProjectDetails />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App
