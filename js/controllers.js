(function(){
    'use strict';

    angular.module('cardApp.controllers',[])
        .controller('CardListCtrl',["$state","popupService","$window","Card", function ($state,popupService,$window,Card){
            var vm = this;

            Card.cards.query(function(data){
                vm.cards = data;
            });

            vm.deleteCard = function(card){
                if(popupService.showPopup('Really delete this?')){
                    console.log(card);
                    card.$delete(function(){
                        $window.location.href='';
                    });
                }
            }
        }])

        .controller('CardViewCtrl',function($stateParams,Card){
            var vm = this;
            vm.card = Card.cards.get({id:$stateParams.id});
        })

        .controller('CardCreateCtrl',function($state,$stateParams,Card){
            var vm = this;
            vm.card = new Card.cards();
            /*Card.cards.query(function(data){
                vm.categoriess = data;
            });*/
            vm.categories = [
                { name: "AngularJS"},
                { name: "CSS"},
                { name: "HTML"},
                { name: "Javascript"}
            ];

            vm.addCard = function(){
                //vm.card.category = vm.card.category.name;

                vm.card.$save(function(){
                    $state.go('cards');
                });
            }
        })

        .controller('CardEditCtrl',function($state,$stateParams,Card){
            var vm = this;
            vm.updateCard = function(){
                vm.card.$update(function(){
                    $state.go('cards');
                });
            };

        var vm = this;

        vm.loadCard=function(){
            vm.card = Card.cards.get({id:$stateParams.id});
        };

        vm.loadCard();
    });

}());