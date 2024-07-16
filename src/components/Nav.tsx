import { Box } from "@material-ui/core";
import { ComponentWraper, useStyles } from "../Style";

const Nav = () => {
  const classes = useStyles();

  return (
    <ComponentWraper>
      <Box className={`${classes.container} ${classes.nav}`}>
        <img alt="logo" src="topUpWhiteStripe.svg" />
      </Box>
    </ComponentWraper>
  )
}

export default Nav