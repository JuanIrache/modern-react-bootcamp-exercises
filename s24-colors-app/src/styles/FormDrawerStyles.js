import chroma from 'chroma-js';
import { DRAWER_WIDTH } from '../constants';

// const lightColor = col => chroma(col).luminance() > 0.75;
const darkColor = col => chroma(col).luminance() < 0.2;

export default theme => ({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    textAlign: 'center'
  },
  drawerPaper: {
    width: DRAWER_WIDTH
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
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
