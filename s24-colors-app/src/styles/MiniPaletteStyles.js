export default {
  root: {
    display: 'inline-block',
    width: '25%'
  },
  inner: {
    backgroundColor: 'white',
    margin: '.5rem',
    padding: '.5rem',
    display: 'block',
    boxShadow: '.1rem .1rem .3rem rgba(0,0,0,.2)',
    '& :hover': {
      cursor: 'pointer'
    }
  },
  colors: {
    height: '11rem',
    backgroundColor: '#ddd',
    marginBottom: '.5rem',
    fontSize: 0,
    borderRadius: '.2rem',
    overflow: 'hidden'
  },
  smallColor: {
    width: '20%',
    height: '25%',
    display: 'inline-block'
  },
  title: { width: '100%', display: 'flex', justifyContent: 'space-between', '& h3': { fontSize: '.8rem', margin: 0 } }
};
