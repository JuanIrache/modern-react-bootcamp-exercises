import { DRAWER_WIDTH, DRAWER_WIDTH_SMALL } from '../util/constants';
import sizes from './sizes';
import { darkColor } from '../util/contrast';

export default theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    textAlign: 'center',
    [sizes.down('sm')]: {
      width: DRAWER_WIDTH_SMALL
    }
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    [sizes.down('sm')]: {
      width: DRAWER_WIDTH_SMALL
    }
  },
  drawerHeader: {
    padding: '0 8px',
    ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '& h1': {
      fontSize: '1.4rem',
      color: '#5D5D5D',
      [sizes.down('sm')]: {
        fontSize: '1rem'
      }
    },
    '& button': {
      position: 'absolute',
      top: '.5rem',
      right: '1rem'
    }
  },
  picker: {
    margin: '1rem auto'
  },
  lowDrawer: {
    margin: 'auto 0',
    padding: '1rem 0'
  },
  button: {
    margin: '1rem .5rem',
    '&#add-color-button:not(.Mui-disabled)': {
      backgroundColor: ({ color }) => color,
      color: ({ color }) => (darkColor(color) ? 'white' : 'rgb(51, 51, 51)')
    }
  },
  input: {
    height: '3rem',
    '& input': {
      marginTop: '1rem'
    }
  }
});
