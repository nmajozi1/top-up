import { Box } from "@material-ui/core"
import { BannerComponentWraper, MainWraper, useStyles } from "../Style"
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
      <BannerComponentWraper>
        <Box className={`${classes.container} ${classes.banner}`}>
          {bannerImages.map((image, index) => (
            <CardImage  key={index} name={image.name} path={image.path} />
          ))}
        </Box>
      </BannerComponentWraper>
    </MainWraper>
  )
}

export default Banner