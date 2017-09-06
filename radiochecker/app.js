angular.module('RadioCheckerApp', ['ngRoute', 'ngAnimate'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                title: 'RadioChecker.com \u2014 Und was läuft bei dir so?',
                description: 'RadioChecker.com zeigt dir die meistgespielten Songs deines Lieblings-Radiosenders. ' +
                'Und was läuft bei dir so?',
                controller: 'StartController',
                templateUrl: 'radiochecker/start/startView.html'
            })

            .when('/toptracks', {
                title: 'set in topTracksController',
                description: 'set in topTracksController',
                controller: 'TopTracksController',
                templateUrl: 'radiochecker/toptracks/topTracksView.html'
            })

            .when('/search', {
                title: 'set in searchController',
                description: 'set in searchController',
                controller: 'SearchController',
                templateUrl: 'radiochecker/search/searchView.html'
            })

            .when('/about/wtf', {
                title: 'About RadioChecker \u2014 RadioChecker.com',
                description: 'RadioChecker.com ist ein kostenloser Online-Service, der dir die meistgespielten Songs ' +
                'deiner Lieblings-Radiosender präsentiert. Erfahre mehr darüber ...',
                templateUrl: 'radiochecker/meta/aboutView.html'
            })

            .when('/about/impressum', {
                title: 'Impressum \u2014 RadioChecker.com',
                description: 'Impressum und rechtliche Hinweise zu RadioChecker.com.',
                templateUrl: 'radiochecker/meta/imprintView.html'
            })

            .when('/about/datenschutz', {
                title: 'Datenschutz \u2014 RadioChecker.com',
                description: 'Erfahre mehr über den Datenschutz bei RadioChecker.com.',
                templateUrl: 'radiochecker/meta/privacyView.html'
            })

            .otherwise({ redirectTo: '/' });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    })


    .run(['$rootScope', '$route', '$location', '$window', function($rootScope, $route, $location, $window) {
        // intitialize Google Analytics
        $window.ga('create', 'UA-72083509-2', 'auto');
        $window.ga('set', 'anonymizeIp', true);

        $rootScope.$on('$routeChangeSuccess', function() {
            document.title = $route.current.title;
            document.head.querySelector("[name=description]").content = $route.current.description;
            document.head.querySelector("[rel=canonical]").href = $location.$$absUrl;

            // track pageview on route change
            $window.ga('send', 'pageview', $location.path());
        });
    }]
);