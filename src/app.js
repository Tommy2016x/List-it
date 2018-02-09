export class App {
  constructor() {
    this.message = '';
  }

  configureRouter(config, router) {
     config.title = 'Aurelia';

     config.map([
        { route: ['','home'],  name: 'home', moduleId: './pages/home',  nav: true, title:'Home' },
        // { route: 'home',  name: 'home', moduleId: './pages/home',    nav: true, title:'Home' },
        // { route: 'genList',  name: 'genList', moduleId: './pages/genList',    nav: true, title:'General List' },
        // { route: 'shopList',  name: 'shopList', moduleId: './pages/shopList',    nav: true, title:'Shopping List' }
     ]);

     this.router = router;
  }
}
