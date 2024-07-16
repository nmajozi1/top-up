import { MainWraper } from "../../Style"
import Banner from "../../components/Banner"
import Nav from "../../components/Nav"
import Reasons from "../../components/Reasons"
import Steps from "../../components/Steps"
// import Start from "../../components/Start"

const Home = () => {
  return (
    <MainWraper>
      <Nav />
      <Banner />
      <Reasons />
      {/* <Start /> */}
      <Steps />
    </MainWraper>
  )
}

export default Home