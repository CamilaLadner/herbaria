import HeroSection from './components/heroSection'
import Separator from './components/layout/separator'
import HowToChoose from './components/howToChoose'
import NuestroProyecto from './components/aboutUs'
import Propaganda from './components/propaganda'

const page = () => {
  return (
    <div>
      <HeroSection/>
      <Separator leftText="La tierra sonríe en flores" rightText="Y nosotros aprendemos a mirar" />
      <HowToChoose />
      <NuestroProyecto />
      <Propaganda />
      <Separator leftText="Si vas a dar amor" rightText="que tenga raíces" />
    </div>
  )
}

export default page
