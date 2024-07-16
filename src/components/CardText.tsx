import { CardTextStyled, useStyles } from "../Style";

interface IProps {
  title: string;
  body: string;
}

const CardText = (Props: IProps) => {
  const { title, body } = Props;
  const classes = useStyles();

  return (
    <CardTextStyled>
      <div className={classes.cardTitle}>{title}</div>
        <div className={classes.cardBody}>
          <div className={classes.cardBodyContainer}>
              <span className={classes.cardTextBody}>{body}</span>
          </div>
      </div>
    </CardTextStyled>
  )
}

export default CardText