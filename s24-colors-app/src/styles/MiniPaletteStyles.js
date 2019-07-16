import sizes from './sizes';

export default {
  root: {
    display: 'inline-block',
    width: '25%',
    [sizes.down('lg')]: {
      width: 100 / 3 + '%'
    },
    [sizes.down('sm')]: {
      width: '50%'
    },
    [sizes.down('xs')]: {
      width: '100%'
    }
  },
  inner: {
    backgroundColor: 'white',
    margin: '.5rem',
    padding: '.5rem',
    display: 'block',
    boxShadow: '.1rem .1rem .3rem rgba(0,0,0,.2)',
    cursor: 'pointer',
    '& :hover': {
      '& $deleteIcon': {
        opacity: 1
      }
    }
  },
  colors: {
    position: 'relative',
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
  title: { width: '100%', display: 'flex', justifyContent: 'space-between', '& h3': { fontSize: '.8rem', margin: 0 } },
  deleteIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: '.4rem',
    zIndex: 1,
    color: 'white',
    backgroundColor: '#c0392b',
    opacity: 0,
    transition: 'all .3s ease'
  }
};
