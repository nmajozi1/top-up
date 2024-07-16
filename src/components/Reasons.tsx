// import { Typography } from "@material-ui/core";
import {ContainerStyled, ReasonsWrapper } from "../Style";
// import { CardData } from "../Utils";
// import CardText from "./CardText";

const Reasons = () => {
  // const cardData = CardData();
  return (
    <ReasonsWrapper>
      <ContainerStyled>
        <img alt='why' src="why-choose-us.svg" />
      </ContainerStyled>
        {/* {cardData.map((card, index) => (
          <CardText key={index} title={card.title} body={card.body} />
        ))}
        <img alt='why' src="why-choose-us.svg" />
      </ContainerStyled> */}
    </ReasonsWrapper>
  )
}

export default Reasons;