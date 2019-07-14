import sizes from './sizes';

export default {
  NavBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '5%',
    '& .rc-slider-track': {
      backgroundColor: 'transparent'
    },

    '& .rc-slider-rail': {
      height: '0.5rem'
    },

    '& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover': {
      backgroundColor: 'rgb(68, 145, 128)',
      outline: 'none',
      border: '2px solid rgb(68, 145, 128)',
      boxShadow: 'none',
      width: '1rem',
      height: '1rem',
      marginLeft: '-11px',
      marginTop: '-4px'
    }
  },
  NavBarLogo: {
    marginRight: '1rem',
    padding: '0 2rem',
    fontSize: '1.2rem',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'rgb(46, 46, 46)',
      fontWeight: 'bold'
    },
    [sizes.down('sm')]: {
      display: 'none'
    }
  },
  NavBarSliderContainer: {
    marginLeft: '1rem',
    '& span': {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: 'rgb(94, 94, 94)'
    }
  },
  NavBarSlider: {
    width: '15rem',
    marginRight: '2rem',
    display: 'inline-block',
    [sizes.down('xs')]: {
      width: '10rem'
    }
  },
  NavBarSelectContainer: {
    margin: '0 2rem 0 auto',
    marginRight: '1rem'
  }
};
