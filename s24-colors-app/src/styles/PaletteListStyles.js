export default {
  root: { backgroundColor: 'skyBlue', height: '100vh', overflow: 'auto' },
  container: { width: '65%', margin: 'auto' },
  nav: {
    color: 'white',
    textTransform: 'uppercase',
    letterSpacing: '.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& h1': {
      margin: 0,
      padding: '.5rem',
      fontSize: '1.3rem'
    },
    '& a': {
      textDecoration: 'none',
      color: 'white'
    },
    '& button': {
      background: 'none',
      border: 'none',
      outline: 'none',
      color: 'inherit',
      textTransform: 'inherit',
      letterSpacing: 'inherit',
      fontSize: 'inherit',
      cursor: 'pointer'
    }
  }
};
