import HeroSection from './components/heroSection'
import Separator from './components/layout/separator'
import HowToChoose from './components/howToChoose'
import NuestroProyecto from './components/aboutUs'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Separator leftText="La tierra sonríe en flores" rightText="Y nosotros aprendemos a mirar" />
      <HowToChoose />
      <NuestroProyecto />
    </div>
  )
}

export default page
