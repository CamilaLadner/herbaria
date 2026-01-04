import Navbar from './components/layout/navbar'
import HeroSection from './components/heroSection'
import Separator from './components/layout/separator'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Separator leftText="La tierra sonríe en flores" rightText="Y nosotros aprendemos a mirar" />
    </div>
  )
}

export default page
