export default {
  down: s => {
    const sizes = {
      xs: '575.98px',
      sm: '767.98px',
      md: '991.98px',
      lg: '1199.98px'
    };
    return `@media (max-width: ${sizes[s]})`;
  },
  up: s => {
    const sizes = {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    };
    return `@media (min-width: ${sizes[s]})`;
  }
};
