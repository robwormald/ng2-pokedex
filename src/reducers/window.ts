export const window = (state = {showOverlay: false, showSidenav: false}, {type, payload}) => {
  switch (type) {
    case 'RESIZE':
      return Object.assign({}, payload);
    default:
      return state;
  }
}
