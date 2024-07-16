import { CardImageContainer } from "../Style";

interface IProps {
  name: string;
  path: string;
}

const CardImage = (Props: IProps) => {
  const {name, path} = Props;

  return (
    <CardImageContainer>
      <img src={path} alt={name} />
    </CardImageContainer>
  )
}

export default CardImage;