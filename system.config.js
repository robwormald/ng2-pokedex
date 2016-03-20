System.config({
  map: {
    'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    angular2: 'node_modules/angular2',
    rxjs: 'node_modules/rxjs',
    app: 'build',
    'parse5': 'node_modules/parse5',
    '@ngrx/store': 'node_modules/@ngrx/store'
  },
  packages: {
    angular2: {
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    app: {
      defaultExtension: 'js'
    },
    'parse5': {
      defaultExtension: 'js',
      main: 'index.js',
      format: 'cjs'
    },
    '@ngrx/store': {
      defaultExtension: 'js',
      main: 'dist/index'
    }
  }
});
