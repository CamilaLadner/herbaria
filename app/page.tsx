import HeroSection from './components/heroSection'
import Separator from './components/layout/separator'
import Principal from './components/principal'


const page = () => {
  return (
    <div>
      <HeroSection/>
      <Separator leftText="La tierra sonríe en flores" rightText="Y nosotros aprendemos a mirar" />
      <Principal />
    </div>
  )
}

export default page
