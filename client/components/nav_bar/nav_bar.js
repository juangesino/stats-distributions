Template.navBar.helpers({
  getClass: function (route_path) {
    if (route_path == Iron.Location.get().path) {
      return 'active';
    } else {
      return '';
    }
  },
  home_path: function () {
    return Router.path("home");
  },
  binomial_path: function () {
    return Router.path("binomial");
  },
  normal_path: function () {
    return Router.path("normal");
  },
  poisson_path: function () {
    return Router.path("poisson");
  },
});
