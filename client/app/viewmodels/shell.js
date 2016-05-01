define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title:'Login', moduleId: 'viewmodels/login', nav: false },
                { route: 'data_access', moduleId: 'viewmodels/data_access', nav: false }
            ]).buildNavigationModel();
            
            return router.activate();
        }
    };
});