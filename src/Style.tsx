import { Box, makeStyles, styled } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
  },
  container: {
    width: '80%',
    display: 'flex',
    flexWrap: 'wrap',
    // '@media and (min-width: )'
  },
  nav: {
    justifyContent: 'space-between',
    '& img': {
      maxHeight: 80,
      maxWidth: 80
    }
  },
  banner: {
    gap: 24,
    marginTop: 48,
    justifyContent: 'space-between',
  },
  '@media (max-width: 950px)': {
    banner: {
      justifyContent: 'center',
      marginTop: 0,
    },
    nav: {
      justifyContent: 'center',
    }
  },
  bannerTextWrapper: {
    justifyContent: 'center',
  },
  cardTitle: {
    margin: '40px 24px 0px 24px',
    display: 'flex',
    fontSize: 24,
  },
  cardBody: {
    display: 'flex',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    height: '100%',
    flexDirection: 'column',
    color: 'gray',
    fontSize: '18px',
  },
  cardBodyContainer: {
    margin: '8px 24px 48px 24px',
    borderTop: '2px solid maroon',
    paddingTop: 32
  },
  cardTextBody: {
    marginTop: 24
  }
}));

export const MainWraper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
});

export const ComponentWraper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginBottom: 16,
  '@media (max-width: 950px)': {
    marginBottom: 8,
    marginTop: 8
  }
});

export const BannerComponentWraper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  marginBottom: 88,
  '@media (max-width: 950px)': {
    marginBottom: 8,
    marginTop: 8
  }
});

export const CardImageContainer = styled(Box)({
  display: 'flex',
  maxHeight: 450,
  maxWidth: 350,
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
  '& img': {
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: 16,
    objectFit: 'cover'
  },
});

export const ReasonsWrapper = styled(Box)({
  paddingBottom: 48,
  display: 'flex',
  backgroundColor: '#f8f9fa',
  justifyContent: 'center',
  width: '100%'
});

export const StepsWrapper = styled(Box)({
  paddingBottom: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // backgroundColor: '#f8f9fa',
  justifyContent: 'center',
  width: '100%'
});

export const StartWrapper = styled(Box)({
  paddingBottom: 48,
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
});

export const CardTextStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 8,
  maxWidth: 350,
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  maxHeight: 500,
  gap: 24
});

export const ContainerStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  overflow: 'hidden',
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  }
});

export const HowToContainerStyled = styled(Box)({
  display: 'flex',
  width: '80%',
  justifyContent: 'center',
});

export const StepsCardWrapperStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  maxHeight: 500,
  minHeight: 350,
  minWidth: 250,
  maxWidth: 250,
  // width: 300,
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)',
  padding: 16,
  borderRadius: 16,
  margin: '24px 0px 24px',
  '& img': {
    width: 100,
    height: 100,
    objectFit: 'contain',
    borderRadius: '50%',
  },
  '@media (max-width: 650px)': {
    maxWidth: 310,
    minWidth: 310,
    margin: '24px 0px 0px',
  }
});

export const IconHeaderStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '16px 0px 16px'
});

export const TitleStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '16px 0px 16px',
  textAlign: 'center',
});

export const BodyStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  margin: '16px 0px 16px',
  textAlign: 'center',
});

export const StepsCardsContainerStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  overflow: 'hidden',
  gap: 16,
  marginBottom: 48,
  flexWrap: 'wrap',
  '@media (max-width: 650px)': {
    width: '100%',
    gap: 16,
  }
});

export const HeaderContainerStyle = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  overflow: 'hidden',
  gap: 16,
  margin: '64px 0px',
  '@media (max-width: 650px)': {
    margin: '24px 0px',
  }
});

export const FooterWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  background: '#f8f9fa',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: 56
});

export const FooterBodyContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  alignItems: 'center',
  margin: '56px 0px 24px',
});

export const FooterText = styled(Box)({
  fontSize: 16,
  color: 'gray',
  fontWeight: 700
});

