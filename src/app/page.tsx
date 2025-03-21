import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Articles from '@/components/Articles'
import ScrollToTop from '@/components/ScrollToTop'
import BackgroundWrapper from '@/components/canvas/BackgroundWrapper'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0" />
      <BackgroundWrapper />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <Articles />
        <Experience />
        <Contact />
      </div>

      {/* Utilities */}
      <ScrollToTop />
    </main>
  )
}
