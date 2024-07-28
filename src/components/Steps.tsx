import { StepsCardsContainerStyled, StepsWrapper } from "../Style"
import { cardInfo } from "../utils/utils";
import Header from "./Header";
import StepsCard from "./StepsCard"

const Steps = () => {
  return (
    <StepsWrapper>
      <Header />
      <StepsCardsContainerStyled>
        {cardInfo.map((info: any) => (
          <StepsCard body={info.body} icon={info.icon} title={info.title} />
        ))}
      </StepsCardsContainerStyled>
    </StepsWrapper>
  )
}

export default Steps