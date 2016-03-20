export const sidenav = (state = {showOverlay: false, showSidenav: false}, {type, payload}) => {
  switch (type) {
    case 'SHOW_SIDENAV':
      return {showSidenav: true, showOverlay: false}
    default:
      return state;
  }
}
