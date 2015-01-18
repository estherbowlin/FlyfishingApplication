angular.module('cardApp.services',[])
    .factory('Card',function($resource){
        return {
         cards: $resource('https://flashcardapp-5daily.azure-mobile.net/tables/cards/:id',{id:'@id'},
            {
                'update': { method: 'PATCH' },
                'delete': { method: 'DELETE' }
            }),
        categories: $resource('https://flashcardapp-5daily.azure-mobile.net/tables/categories/')
        }
    })
    .service('popupService',function($window){
        this.showPopup=function(message){
            return $window.confirm(message);
        }
    });