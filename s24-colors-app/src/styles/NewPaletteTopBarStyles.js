import { DRAWER_WIDTH, DRAWER_WIDTH_SMALL } from '../util/constants';
import sizes from './sizes';

export default theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    '& a': {
      textDecoration: 'none'
    },
    [sizes.down('sm')]: {
      '& button': {
        paddingLeft: '.3rem',
        paddingRight: '.3rem',
        minWidth: '0 !important',
        marginLeft: '.05rem',
        marginRight: 0,
        fontSize: '.6rem'
      }
    },
    [sizes.down('md')]: {
      '& .hideable': {
        display: 'none'
      }
    }
  },
  appBarShift: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    [sizes.down('md')]: {
      width: `calc(100% - ${DRAWER_WIDTH_SMALL}px)`,
      marginLeft: DRAWER_WIDTH_SMALL
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  button: {
    margin: '0 .5rem'
  },
  rightSide: {
    display: 'flex'
  },
  toolbarContent: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
