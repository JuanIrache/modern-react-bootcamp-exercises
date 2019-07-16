import sizes from './sizes';
import { darkColor } from '../util/contrast';

export default {
  root: {
    display: 'inline-block',
    width: '20%',
    height: '25%',
    '&:hover': {
      cursor: 'pointer'
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '20%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '10%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%'
    }
  },
  boxContent: {
    textTransform: 'uppercase',
    color: ({ color }) => (darkColor(color) ? 'white' : 'rgb(51, 51, 51)'),
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& div': {
      margin: '.5rem .3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    '&:hover svg': {
      transform: 'scale(1.5)'
    },
    [sizes.down('sm')]: {
      flexDirection: 'row',
      '& .lower': {
        width: '80%'
      }
    }
  },
  icon: {
    '& svg': {
      fontSize: '1rem',
      transition: 'all .3s ease',
      '& MuiSvgIcon-root': {
        margin: '0'
      }
    }
  },
  name: {
    fontSize: '0.6rem',
    letterSpacing: '0.1rem'
  }
};
