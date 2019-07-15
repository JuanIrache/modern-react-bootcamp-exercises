export default {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: 'opacity 500ms ease 0s',
    '&.page-enter': {
      opacity: 0
    },
    '&.page-enter-active': {
      opacity: 1
    },
    '&.page-exit-active': {
      opacity: 0
    }
  }
};
