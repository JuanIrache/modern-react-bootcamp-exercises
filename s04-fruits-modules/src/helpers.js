const choice = elts => elts[Math.floor(Math.random() * elts.length)];
const remove = (elts, elt) => {
  if (elts.includes(elt)) return elts.splice(elts.indexOf(elt), 1)[0];
};
export { choice, remove };
