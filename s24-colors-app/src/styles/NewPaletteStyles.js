import { DRAWER_WIDTH, DRAWER_WIDTH_SMALL } from '../util/constants';
import sizes from './sizes';

export default theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -DRAWER_WIDTH,
    height: '100vh',
    fontSize: 0,
    [sizes.down('sm')]: {
      marginLeft: -DRAWER_WIDTH_SMALL
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});
