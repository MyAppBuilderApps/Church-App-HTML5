// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app=angular.module('starter', ['ionic', 'starter.controllers', 'ui.tinymce','ngSanitize',
            'com.2fdevs.videogular'])

app.run(function($ionicPlatform, $ionicPopup, $interval, $rootScope, $location, $ionicLoading) {
			
			$ionicPlatform.registerBackButtonAction(function () {
			
                                            navigator.notification.confirm('Are you sure you want to Exit?', function (button) {
                                            if (button == 1) {
          									ionic.Platform.exitApp();
                                            }else{
                                            }
                                            },'Please Confirm',["OK","CANCEL"]);
                                            
                                            }, 100);
                                                           
                                                      
                                                           
	})




app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
    $ionicConfigProvider.views.transition('none');
    $ionicConfigProvider.navBar.alignTitle("center");
  $stateProvider.state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'LoginCtrl'
  })
  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: 'HomeCtrl'
            })
   $stateProvider.state('sliderpagecreate', {
     url: "/sliderpagecreate",
     templateUrl: "templates/sliderpagecreate.html",
     controller: 'sliderpagecreateCtrl'
                                })
           
   $stateProvider.state('imageandtextcreate', {
      url: "/mageandtextcreate",
      templateUrl: "templates/imageandtextcreate.html",
      controller: 'imageandtextcreateCtrl'
                                })
   $stateProvider.state('imageandtextpage', {
        url: "/imageandtextpage",
        templateUrl: "templates/imageandtextpage.html",
        controller: 'imageandtextpageCtrl'
                                })
   $stateProvider.state('sliderpageedit', {
         url: "/sliderpageedit",
         templateUrl: "templates/sliderpageedit.html",
         controller: 'sliderpageeditCtrl'
                                })
  $stateProvider.state('imageandtextpageedit', {
         url: "/imageandtextpageedit",
         templateUrl: "templates/imageandtextpageedit.html",
         controller: 'imageandtextpageeditCtrl'
                                })
  $stateProvider.state('textlistpagecreate', {
          url: "/textlistpagecreate",
          templateUrl: "templates/textlistpagecreate.html",
          controller: 'textlistpagecreateCtrl'
                                })
  $stateProvider.state('textlistpage', {
           url: "/textlistpage",
           templateUrl: "templates/textlistpage.html",
           controller: 'textlistpageCtrl'
                                })
  $stateProvider.state('textlistaddpage', {
          url: "/textlistaddpage",
          templateUrl: "templates/textlistaddpage.html",
          controller: 'textlistaddpageCtrl'
                                })
   $stateProvider.state('textlisteditpage', {
           url: "/textlisteditpage",
           templateUrl: "templates/textlisteditpage.html",
           controller: 'textlisteditpageCtrl'
                                })
  $stateProvider.state('imageswithdescriptionpagecreate', {
          url: "/imageswithdescriptionpagecreate",
          templateUrl: "templates/imageswithdescriptionpagecreate.html",
          controller: 'imageswithdescriptionpagecreateCtrl'
                                })
  $stateProvider.state('imageswithdescriptionlistpage', {
          url: "/imageswithdescriptionlistpage",
          templateUrl: "templates/imageswithdescriptionlistpage.html",
          controller: 'imageswithdescriptionlistpageCtrl'
                                })
           
  $stateProvider.state('imageswithdescriptionlistaddpage', {
          url: "/imageswithdescriptionlistaddpage",
          templateUrl: "templates/imageswithdescriptionlistaddpage.html",
          controller: 'imageswithdescriptionlistpageaddCtrl'
                                })
           
 $stateProvider.state('imageswithdescriptionlisteditpage', {
          url: "/imageswithdescriptionlisteditpage",
          templateUrl: "templates/imageswithdescriptionlisteditpage.html",
          controller: 'imageswithdescriptionlistpageeditCtrl'
                                })
 $stateProvider.state('imagespagecreate', {
          url: "/imagespagecreate",
          templateUrl: "templates/imagespagecreate.html",
          controller: 'imagespagecreateCtrl'
                                })
 $stateProvider.state('imagespage', {
         url: "/imagespage",
         templateUrl: "templates/imagespage.html",
         controller: 'imagespageCtrl'
                                })
$stateProvider.state('imagesaddpage', {
       url: "/imagesaddpage",
       templateUrl: "templates/imagesaddpage.html",
       controller: 'imagesaddpageCtrl'
                                })
$stateProvider.state('imageseditpage', {
       url: "/imageseditpage",
       templateUrl: "templates/imageseditpage.html",
       controller: 'imageseditpageCtrl'
                                })
           
 $stateProvider.state('videowithdescriptionpagecreate', {
       url: "/videowithdescriptionpagecreate",
       templateUrl: "templates/videowithdescriptionpagecreate.html",
       controller: 'videowithdescriptionpagecreateCtrl'
                                })
$stateProvider.state('videowithdescriptionpage', {
      url: "/videowithdescriptionpage",
      templateUrl: "templates/videowithdescriptionpage.html",
      controller: 'videowithdescriptionpageCtrl'
                                })
$stateProvider.state('appcreate', {
      url: "/appcreate",
      templateUrl: "templates/appcreate.html",
      controller: 'appcreateCtrl'
                                })                                
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
