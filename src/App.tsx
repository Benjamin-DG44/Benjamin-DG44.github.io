import Home from "./pages/mainPage/home/Home";
import About from "./pages/mainPage/about/About";
import Projects from "./pages/mainPage/projects/Projects";
import Contact from "./pages/mainPage/contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectPage from "./pages/projectPage/ProjectPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* PAGE PROJET */}
                <Route path="/project/:projectId" element={<ProjectPage />} />

                {/* PAGE PRINCIPALE */}
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <About />
                            <Projects />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}

export default App;