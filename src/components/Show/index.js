const Show = ({condition, children}) => {
  if (condition) {
    return children;
  }
  return null;
}

export default Show;