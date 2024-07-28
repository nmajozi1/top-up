import { Typography } from "@material-ui/core";
import { BodyStyled, IconHeaderStyled, StepsCardWrapperStyled, TitleStyled } from "../Style"

type StepsCardType = {
  title: string;
  body: string;
  icon: string;
}

const StepsCard = (Props: StepsCardType) => {
  const { title, icon, body } = Props;

  return (
    <StepsCardWrapperStyled>
      <IconHeaderStyled>
        <img alt='why' src={icon} />
      </IconHeaderStyled>
      <TitleStyled>
        <Typography variant="h5">{title}</Typography>
      </TitleStyled>
      <BodyStyled>
        <Typography>{body}</Typography>
      </BodyStyled>
    </StepsCardWrapperStyled>
  )
}

export default StepsCard;