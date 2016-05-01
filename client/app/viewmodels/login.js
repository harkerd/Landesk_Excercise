define(function(require) {
    var app = require('durandal/app'), ko = require('knockout'), router = require('plugins/router');
    
    return {
        displayName: 'Login',
        username: ko.observable(),
        password: ko.observable(),
        login: function() {
            app.showMessage('Hello ' + this.username() + '! Nice to meet you.', 'Greetings');
            router.navigate('data_access');
        }
    };
});