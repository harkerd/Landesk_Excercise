define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {

    var model = new Model();
    function Model() {

        this.displayName = 'QueryData';
        this.column_names = ko.observableArray([]);
        this.row_data = ko.observableArray([]);
    };

    var getAjaxRequestObject = function() {
        var ajaxRequest;

        try {
            ajaxRequest = new XMLHttpRequest();
        } catch (e) {
            try {
                ajaxRequest = new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {
                try {
                    ajaxRequest = new ActiveXObject('Microsoft.XMLHTTP');
                } catch (e) {
                    console.log('Error: AjaxRequest type undefined by browser');
                    return false;
                }
            }
        }

        return ajaxRequest;
    }

    var buildTable = function (tableData) {
        model.column_names(tableData.column_names);
        model.row_data(tableData.row_data);
    }

    return {
        displayName: model.displayName,
        column_names: model.column_names,
        row_data: model.row_data,
        activate: function () {
            var ajaxRequest = getAjaxRequestObject();
            if(!ajaxRequest) return;

            ajaxRequest.onreadystatechange = function(){
                if(ajaxRequest.readyState == 4){
                    var tableData = JSON.parse(ajaxRequest.responseText);
                    buildTable(tableData);
                }
            }
            var host = 'localhost';
            var port = 3000;

            ajaxRequest.open('GET', 'http://' + host + ':' + port + '/data', true);
            ajaxRequest.send();
        }
    };
});