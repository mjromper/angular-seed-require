require.config({
    baseUrl: 'js',
    paths: {
        'domready': '../lib/bower_components/requirejs-domready/domReady',
        'jQuery': '../lib/bower_components/jquery/jquery',
        'angular': '../lib/bower_components/angular/angular',
        'angular-resource': '../lib/bower_components/angular-resource/angular-resource',
        'angular-auth-interceptor': '../lib/bower_components/angular-http-auth/src/http-auth-interceptor',
        'angular-route': '../lib/bower_components/angular-route/angular-route',
        'underscore': '../lib/bower_components/underscore/underscore',
        'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap'
    },
    shim: {
        'angular': {'exports' : 'angular', deps: ['jQuery']},
        'angular-local-storage': { deps:['angular']},
        'angular-resource': { deps:['angular']},
        'angular-route': { deps: ['angular']},
        'angular-auth-interceptor': { deps:['angular']},
        'jQuery': {'exports' : 'jQuery'},
        'bootstrap': { deps:['jQuery']}
    },
    deps: [
        'init',
        'section1/index',
        'section2/index'
    ],

    callback: function() {      
        angular.element(document).scope().$broadcast('event:all_loaded');
    }
});
