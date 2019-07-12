import chroma from 'chroma-js';

const darkColor = col => chroma(col).luminance() < 0.2;

export default {
  root: {
    display: 'inline-block',
    width: '20%',
    height: '24%'
  },
  boxContent: {
    textTransform: 'uppercase',
    color: ({ color }) => (darkColor(color) ? 'white' : 'rgb(51, 51, 51)'),
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: '0.3rem',
    fontSize: '0.7rem',
    letterSpacing: '0.1rem',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)'
    }
  },
  deleteIcon: {
    '& svg': {
      transition: 'all .3s ease',
      color: 'rgba(0,0,0,.5)',
      fontSize: '1rem',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }
};
