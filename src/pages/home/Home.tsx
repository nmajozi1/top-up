import { MainWraper } from "../../Style"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import Reasons from "../../components/Reasons"
import Steps from "../../components/Steps"

const Home = () => {
  return (
    <MainWraper>
      <Nav />
      <Banner />
      <Reasons />
      <Steps />
      <Footer />
    </MainWraper>
  )
}

export default Home