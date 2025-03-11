import About from "@/components/About/About";
import Blogs from "@/components/Blogs/Blogs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import TopSection from "@/components/TopSection/TopSection";

export default function Home() {
  return (
    <>
      <TopSection />
      <main className="z-0">
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <div className="bg-[url('/contact-bg-pattern.png')] bg-center bg-cover">
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
