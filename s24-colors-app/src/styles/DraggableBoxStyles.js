import chroma from 'chroma-js';
import sizes from './sizes';

const darkColor = col => chroma(col).luminance() < 0.2;

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
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    fontSize: '0.7rem',
    letterSpacing: '0.1rem',
    '& span': {
      margin:'.6rem'
    },
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  deleteIcon: {
    '& svg': {
      transition: 'all .3s ease',
      color: 'rgba(0,0,0,.5)',
      fontSize: '1rem'
    }
  }
};
