import { FooterBodyContainer, FooterText, FooterWrapper } from "../Style"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterBodyContainer>
        <FooterText>Email: info@topup.co.za</FooterText>
        <FooterText>Tel: 069 931-1763 / 071 868-8935</FooterText>
      </FooterBodyContainer>
      <img alt="logo" style={{height:300, width:300}} src="topUpWhiteStripe.svg" />
    </FooterWrapper>
  )
}

export default Footer