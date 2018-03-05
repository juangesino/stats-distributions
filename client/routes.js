// Define the template for Iron Router.
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// Create the index route.
Router.map(function() {
  this.route('home', {
    path: '/',
    to: 'main',
    name: 'home',
    template: 'home',
    onBeforeAction: function () {
      this.next();
    }
  });
  this.route('binomial', {
    path: '/binomial',
    to: 'main',
    name: 'binomial',
    template: 'binomial',
    onBeforeAction: function () {
      this.next();
    }
  });
  this.route('normal', {
    path: '/normal',
    to: 'main',
    name: 'normal',
    template: 'normal',
    onBeforeAction: function () {
      this.next();
    }
  });
  this.route('poisson', {
    path: '/poisson',
    to: 'main',
    name: 'poisson',
    template: 'poisson',
    onBeforeAction: function () {
      this.next();
    }
  });
});
