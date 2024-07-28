import { Typography } from '@material-ui/core'
import { HeaderContainerStyle } from '../Style'

const Header = () => {
  return (
    <HeaderContainerStyle>
      <Typography variant='h2' style={{fontWeight: 600}}>How Does It Work?</Typography>
    </HeaderContainerStyle>
  )
}

export default Header