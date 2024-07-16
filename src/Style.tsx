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
  marginBottom: 48,
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
  paddingBottom: 48,
  display: 'flex',
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
})

