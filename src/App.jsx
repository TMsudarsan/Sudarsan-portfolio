import ContactPage from "./components/Contact";
import Customcursour from "./components/Customcursour";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsPage from "./components/ProjectPage";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
     <Header/>
     <main>
    <Hero/>
    <Customcursour/>
    <Skills/>
    <ProjectsPage/>
    <ContactPage/>
    </main>
    </>
  )
}