import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    margin: '2rem auto auto auto',
    width: '85%',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '30rem'
    }
  },
  avatar: {
    margin: '1rem auto',
    color: '#fff',
    backgroundColor: '#eab543'
  },
  title: {
    margin: theme.spacing(3)
  },
  select: {},
  inputs: {},
  input: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  button: {
    display: 'block',
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));
