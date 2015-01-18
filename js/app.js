(function(){
    'use strict';

    angular.module('cardApp',['ui.router','ngResource','cardApp.controllers','cardApp.services'])
        .config(function($stateProvider,$httpProvider){
            $stateProvider.state('cards',{
                url:'/cards',
                templateUrl:'partials/cards.html',
                controller:'CardListCtrl as vm'
            })

            .state('viewCard',{
               url:'/card/:id/view',
               templateUrl:'partials/card-view.html',
               controller:'CardViewCtrl as vm'
            })

            .state('newCard',{
                url:'/card/new',
                templateUrl:'partials/card-add.html',
                controller:'CardCreateCtrl as vm'
            })

            .state('editCard',{
                url:'/card/:id/edit',
                templateUrl:'partials/card-edit.html',
                controller:'CardEditCtrl as vm'
            });
        })
        .run(function($state){
           $state.go('cards');
        });
        
}());