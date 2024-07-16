import { Box, Typography } from "@material-ui/core"
import { ComponentWraper, MainWraper, useStyles } from "../Style"
import CardImage from "./CardImage";

const Banner = () => {
  const classes = useStyles();

  const bannerImages = [
    {path: 'pre-plan-three.svg', name: 'pre-plan'}, 
    {path: 'pre-pay-two.svg', name: 'pre-pay'}, 
    {path: 'pre-pared-three.svg', name: 'prepared'}
  ];

  return (
    <MainWraper>
      <ComponentWraper>
        <Box className={`${classes.container} ${classes.banner}`}>
          {bannerImages.map((image, index) => (
            <CardImage  key={index} name={image.name} path={image.path} />
          ))}
        </Box>
      </ComponentWraper>
      {/* <ComponentWraper>
        <Box className={`${classes.container} ${classes.bannerTextWrapper}`}>
          <Typography variant="h1">Unlock the Future of Shopping with Our Pre-payment Solution.</Typography>
        </Box>
      </ComponentWraper> */}
    </MainWraper>
  )
}

export default Banner