import Testimonials from "../components/Testimonials/Testimonials"
import Download from "../components/Download/Download"
import About from "../components/About/About"
import Hero from "../components/Hero/Hero"
import Faqs from "../components/FAQS/Faqs"
import Why from "../components/Why/Why"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Faqs />
      <Why />
      <Testimonials />
      <Download />
    </div>
  )
}
