import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CodeBackground from './components/CodeBackground'
import { trackPageView } from './utils/analytics'

function App() {
    // Track page view on initial load
    useEffect(() => {
        trackPageView('/');
    }, []);
    return (
        <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary selection:text-white relative">
            <CodeBackground />
            <Navbar />
            <main className="container mx-auto px-4 md:px-6 space-y-24 pb-24 relative z-10">
                <Hero />
                <About />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
