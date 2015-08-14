
var control=angular.module('starter.controllers', [])
var findloginornot=0;
var stopforloop=0;
var findbuttonclick=0;
var getparticularbuttonsvar=0;
control.filter('capitalize', function() {
           return function(input, all) {
           return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
           }
           });

control.directive('resize', function () {
           
           return {
           restrict: 'A',
           scope: {},
           link: function(scope, elem, attrs) {
           elem.css('height', '57px');
           }
           };
           })
           
 control.filter('trustUrl', function ($sce) {
           
           return function(url) {
           
           return $sce.trustAsResourceUrl(url);
           
           };
           
           });
control.controller('LoginCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal) {
                  
                   var findapp;
                   $scope.loginvalues={};
                   $scope.loginvalues.username="newuser";
                   $scope.loginvalues.password="passkey123";
                   $scope.toggleLeftSideMenu = function() {
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   $scope.toggleLeftSideMenu();
                   
                   $scope.login = function()
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/login.json", cache: false, params:{"login":$scope.loginvalues.username,"password":$scope.loginvalues.password}})
                   .success(function(data, status){
                            
                            findloginornot=1;
                            $scope.sessionkey=data.api_key;
                            
                            $ionicLoading.hide();
                            
                            
                            
                            
//                            if(localStorage.appkey)
//                            {
//                            $state.go('home');
//                            }
//                            else
//                            {
//                            $scope.modal.show();
//                            }
                            
                            
                        if(localStorage.appkey)
                            {
                            if($rootScope.findpagefromlogin=="Slider with address")
                            {
                            $state.go('home');
                            }
                            else if($rootScope.findpagefromlogin=="Images and Text")
                            {
                            $state.go('imageandtextpage');
                            }
                            else if($rootScope.findpagefromlogin=="Text list")
                            {
                            $state.go('textlistpage');
                            }
                            else if($rootScope.findpagefromlogin=="Images with Description in List")
                            {
                            $state.go('imageswithdescriptionlistpage');
                            }
                            else if($rootScope.findpagefromlogin=="Images")
                            {
                            $state.go('imagespage');
                            }
                            else if($rootScope.findpagefromloginforvideoonly=="Videos with Description")
                            {
                            $state.go('videowithdescriptionpage');
                            }
                            
                            else
                            {
                            $state.go('home');
                            }
                            }
                            
                            else
                            {
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                               animation: 'fade-in',
                                               showBackdrop: true,
                                               maxWidth: 200,
                                               showDelay: 0
                                               });
                            $http({method: "GET", url:'http://build.myappbuilder.com/api/apps.json', cache: false, params:{'api_key':$scope.sessionkey}})
                            
                            .success(function(data, status, headers, config) {
                                     $ionicLoading.hide();
                                     $scope.appdatas=data;
                                     for(i=0;i<$scope.appdatas.length;i++)
                                     {
                                      if($scope.appdatas[i].title=="Church---@App")
                                     {
                                     
                                     findapp="yes";
                                     localStorage.appkey=$scope.appdatas[i].api_key;
                                     break;
                                     }
                                     
                                     else
                                     {
                                     
                                     
                                     }
                                     }
                                     
                                     if(findapp!="yes")
                                     {
                                     findapp="";
                                     $scope.ifnoapp();
                                     }
                                     else
                                     {
                                     $state.go('home');
                                     }
                                     
                                     })
                            .error(function(data, status, headers, config) {
                                   $ionicLoading.hide();
                                   navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                                   });
                            
                            
                            }
                            
                           $scope.ifnoapp=function()
                            {
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                               animation: 'fade-in',
                                               showBackdrop: true,
                                               maxWidth: 200,
                                               showDelay: 0
                                               });
                            $http({method: "POST", url:'http://build.myappbuilder.com/api/apps.json', cache: false, params:{'api_key':$scope.sessionkey,title:"Church---@App",description:"Church---@App"}})
                            
                            .success(function(data, status, headers, config) {
                                     $scope.appkey=data.api_key;
                                     localStorage.appkey=$scope.appkey;
                                     $state.go('home');
                                     $ionicLoading.hide();
                                     })
                            .error(function(data, status, headers, config) {
                                   $ionicLoading.hide();
                                   navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                                   });
                            }
                            
                           
                            
                            
                            })
                   .error(function(data, status) {
                          
                          
                         
                          $ionicLoading.hide();
                          
                          
                          });
                   
                   
                   
                   
                   }
                   

                 
                  
                  
                   
                   
                   
                   });
                   
                   
                   
                   
                   
                   
                   
                   control.controller('appcreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal) {
                   
                   var findapp;
                   $scope.loginvalues={};
                   $scope.loginvalues.username="newuser";
                   $scope.loginvalues.password="passkey123";
                   
                   
                   
                   $scope.login = function()
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/login.json", cache: false, params:{"login":$scope.loginvalues.username,"password":$scope.loginvalues.password}})
                   .success(function(data, status){
                            
                            
                            $scope.sessionkey=data.api_key;
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.ifnoapp();
                        

                            
                            
                            
                            
                            
                            
                            })
                   .error(function(data, status) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          
                          });
                   
                   
                   
                   
                   }
                   
                   
                   $scope.ifnoapp=function()
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   $http({method: "POST", url:'http://build.myappbuilder.com/api/apps.json', cache: false, params:{'api_key':$scope.sessionkey,title:$scope.loginvalues.appname,description:$scope.loginvalues.appname}})
                   
                   .success(function(data, status, headers, config) {
                            $scope.appkey=data.api_key;
                            
                            navigator.notification.alert(data.api_key, function(){$state.go('home');}, 'APP KEY', 'OK' );
                            
                            
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data, status, headers, config) {
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   
                   });
                   
                   
                   


control.controller('HomeCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                  
                   
                   if($rootScope.mainbuttontitle)
                   {
                   
                   }
                   else
                   {
                   $rootScope.mainbuttontitle="Church"
                   }
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
        
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
         
                   }
                   
                   
                  
                   getallbuttons();
                   
                   
                   
                   function getallbuttons()
                   {
                   
                   
                   
                              $http({method: "GET", url:"key.txt", cache: false, params:{}})
                             .success(function(data, status){
                                      
                                      
                                      localStorage.appkey = $.trim(data);
                                      
                         			
                                      
                  $scope.mainmenus=true;
                  $scope.deletemenus=false;
                  $scope.editmenus=false;
                   $scope.ifloginwithreorder=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            $scope.sliderimages="";
                            
                           
                            
//                            if(findbuttonclick==0)
//                            {
//                            
//                            for(i=0;i<$scope.allbuttons.length;i++)
//                            {
//                            
//                            for(j=0;j<$scope.allbuttons[i].elements.length;j++)
//                            {
//                            if(stopforloop==0)
//                            {
//                            if($scope.allbuttons[i].elements[j].additional_field=="Slider with address")
//                            {
//                            stopforloop=1;
//                            $rootScope.buttoncontent=$scope.allbuttons[i];
//                            
//                            alert(JSON.stringify($rootScope.buttoncontent));
//                            
//                            
////                            $rootScope.sliderimages=$scope.allbuttons[i].elements[j].images;
////                            $rootScope.slidertitle=$scope.allbuttons[i].elements[j].title;
////                            $rootScope.slidertext=$scope.allbuttons[i].elements[j].text;
//                            $ionicSlideBoxDelegate.update();
//                            break;
//                            }
//                            }
//                            }
//                            }
//                            
//                        }
                           
                             $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          if(status==401)
                          {
                         
                          $state.go('login');
                          }
                          
                          $ionicLoading.hide();
                          
                          });
                                      
                                      })
                             .error(function(data, status) {
                                    alert(JSON.stringify(data));
                                    $ionicLoading.hide();
                                    });
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                  
                   
                   
                   }
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   

                   $scope.toggleLeftSideMenu = function() {
                   
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                  
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   
                   $scope.editsliderpage = function()
                   {
                   $state.go('sliderpageedit');
                   }
//                   $scope.moveItem = function(items, fromIndex, toIndex) {
//                   $scope.allbuttons.splice(fromIndex, 1);
//                   $scope.allbuttons.splice(toIndex, 0, items);
//                   
//                    $scope.allbuttonsreorderids = $scope.allbuttons.map(function(btn){
//                                         alert(JSON.stringify(btn));
//                                         return btn.id
//                                         });
//                   
//                   alert($scope.allbuttonsreorderids);
//                   
//                   $ionicLoading.show({
//                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
//                                      });
//                   
//                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/reorder.json", cache: false, params:{"api_key":localStorage.appkey,"ids":$scope.allbuttonsreorderids}})
//                   
//                   .success(function(data, status, headers, config) {
//                            
//                            alert(JSON.stringify(data));
//                            
//                            $ionicLoading.hide();
//                            
//                            getallbuttons();
//                            
//                            })
//                   .error(function(data, status, headers, config) {
//                          alert(JSON.stringify(data));
//                          $ionicLoading.hide();
//                          
//                          });
//                   
//                   
//                   };
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                  
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                           
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   $scope.clickmainmenu = function(buttonarray)
                   {
                  // findbuttonclick=1;
                   $rootScope.buttoncontent=buttonarray;
                   
                   $ionicSlideBoxDelegate.update();
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                  
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                    $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                  
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                 /*Add Button */
                  
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   

                   $scope.editthisbutton = function(buttonarray)
                   {
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
    
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                  
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   
                   }
                   });

control.controller('sliderpagecreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                 
                   
                   
                   
                  
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   $scope.slidervalues={};
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                  
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                                      //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.addslideimages = function(){
                   
            
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.slidervalues.title,"text":$scope.slidervalues.address, "additional_field":"Slider with address"}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
//                            $ionicLoading.show({
//                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
//                                               });
//                            
//                            
//                            $ionicLoading.show({template:"Loading"})
//                            $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/images.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.currentelementid,"image":$scope.btn_image}})
//                            .success(function(data, status){
//                                     
//                                     alert(JSON.stringify(data));
//                                     $ionicLoading.hide();
//                                     
//                                     
//                                     
//                                     })
//                            .error(function(data, status) {
//                                   
//                                   alert(JSON.stringify(data));
//                                   $ionicLoading.hide();
//                                   });
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         
                                         $ionicLoading.hide();
                                         $state.go('home');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$scope.currentelementid}]);
                            			 
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }
                   
                   $scope.backslidercreate =function()
                   {
                   $state.go('home');
                   }
                   
                   });




control.controller('imageandtextcreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   $scope.imageandtextcreatevalues={};
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                   
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imageandtextcreate = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.imageandtextcreatevalues.title,"text":$scope.imageandtextcreatevalues.text, "additional_field":"Images and Text"}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
                            //                            $ionicLoading.show({
                            //                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                            //                                               });
                            //
                            //
                            //                            $ionicLoading.show({template:"Loading"})
                            //                            $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/images.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.currentelementid,"image":$scope.btn_image}})
                            //                            .success(function(data, status){
                            //
                            //                                     alert(JSON.stringify(data));
                            //                                     $ionicLoading.hide();
                            //
                            //
                            //
                            //                                     })
                            //                            .error(function(data, status) {
                            //
                            //                                   alert(JSON.stringify(data));
                            //                                   $ionicLoading.hide();
                            //                                   });
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imageandtextpage');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$scope.currentelementid}]);
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }
                   
                   $scope.backimageandtextcreate =function()
                   {
                   $state.go('imageandtextpage');
                   }
                   
                   });



control.controller('imageandtextpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                   
                   
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
                   
                   }
                   
                   
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   //$scope.allbuttons=$rootScope.allbuttons;
                   
                   
                  
                   
                   //getallbuttons();
                   
                   function getallbuttons()
                   {
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            

                            
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          if(status==401)
                          {
                          
                          $state.go('login');
                          }
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   }
                   
                   
                   
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   
                   
                   $scope.toggleLeftSideMenu = function() {
                   
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   $scope.editimageandtextpage = function()
                   {
                   $state.go('imageandtextpageedit');
                   }
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   
                   
                   $scope.clickmainmenu = function(buttonarray)
                   {
                   $rootScope.buttoncontent=buttonarray;
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                   
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                   
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                   $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                   /*Add Button */
                   
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   
                   
                   $scope.editthisbutton = function(buttonarray)
                   {
                  
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                   
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   }
                   });



control.controller('sliderpageeditCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                   
                   $scope.findimageadd=0;
                   $scope.updateslidervalues={};
                   
                   $scope.updateslidervalues.title=$rootScope.buttoncontent.elements[0].title;
                   $scope.updateslidervalues.text=$rootScope.buttoncontent.elements[0].text;;
//                   $rootScope.sliderimages=$scope.allbuttons[i].elements[j].images;
//                   $rootScope.slidertitle=$scope.allbuttons[i].elements[j].title;
//                   $rootScope.slidertext=$scope.allbuttons[i].elements[j].text;
                   
                   
                   
                   
                   $scope.showimages = function()
                   {
                   
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/elements/images.json', cache: false, params:{'api_key':localStorage.appkey,id:$rootScope.buttoncontent.elements[0].id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $ionicLoading.hide();
                            
                            $scope.imagedeletearray=data;
                            
                            if($scope.findimageadd==1)
                            {
                            $scope.findimageadd=0;
                            navigator.notification.alert("Image Added Successfully", function(){}, 'Church', 'OK' );
                            }
                            
                            
                            
                            
                            
                            })
                   .error(function(data, status, headers, config) {
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   
                   }
                   $scope.showimages();
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   
                  
                   
                   
                   
                   
                   $scope.slidervalues={};
                   
                   $scope.showActionsheet = function() {
                  
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,targetWidth: 640,targetHeight: 640,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 100,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,targetWidth: 640,targetHeight: 640,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                  
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.addslideimages = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                 
                          
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         $scope.findimageadd=1;
                                         
                                         $ionicLoading.hide();
                                         $scope.showimages();
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$rootScope.buttoncontent.elements[0].id}]);
                            
                            
                            
                 
                   
                   }
                   }
                   
                   
                   $scope.updateslidertext=function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":localStorage.appkey,"id":$rootScope.buttoncontent.elements[0].id,"title":$scope.updateslidervalues.title,"text":$scope.updateslidervalues.text}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            getparticularbuttonsvar=1;
                           // stopforloop=0;
                            
                            $ionicLoading.hide();
                            
                            $state.go('home');
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                         
                          });
                   }
                   
                   
                   $scope.deletesliderimage = function(sliderid){
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this image?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     console.log('You are sure');
                                     
                                     $ionicLoading.show({
                                                        template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                                        });
                                     $.ajax({
                                            type: "DELETE",
                                            url: "http://build.myappbuilder.com/api/elements/images.json",
                                            data: {"api_key":localStorage.appkey,"element_id":$rootScope.buttoncontent.elements[0].id,"id":sliderid},
                                            cache: false,
                                            success:function(response){
                                            $scope.showimages();
                                            },
                                            error:function(error,status){
                                            $ionicLoading.hide();
                                            var error = JSON.parse(error.responseText);
                                            navigator.notification.alert(error.error, function(){}, 'Church', 'OK' );
                                            }
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   };
                   
                   $scope.backslideredit =function()
                   {
                   getparticularbuttonsvar=1;
                  // stopforloop=0;
                  // findbuttonclick=0;
                   $state.go('home');
                   }
                   
                   });







control.controller('imageandtextpageeditCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                   
                  
                   $scope.updateimageandtextvalues={};
                   
                   $scope.updateimageandtextvalues.title=$rootScope.buttoncontent.elements[0].title;
                   $scope.updateimageandtextvalues.text=$rootScope.buttoncontent.elements[0].text;;
                  
                   
                   
                   
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                 
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.updateimageandtext = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   
                   
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":localStorage.appkey,"id":$rootScope.buttoncontent.elements[0].id,"title":$scope.updateimageandtextvalues.title,"text":$scope.updateimageandtextvalues.text}})
                   
                   .success(function(data, status, headers, config) {
                            
                           
                            
//                            $http({method: "PUT", url:'http://build.myappbuilder.com/api/elements/images.json', cache: false, params:{'api_key':localStorage.appkey,'element_id':$rootScope.buttoncontent.elements[0].id,'id':$rootScope.buttoncontent.elements[0].images[0].id, 'image':$scope.image}})
//                            
//                            .success(function(data, status, headers, config) {
//                                     $ionicLoading.hide();
//                                     getparticularbuttonsvar=1;
//                                     $state.go('imageandtextpage');
//                                     })
//                            .error(function(data, status, headers, config) {
//                                   alert(JSON.stringify(data));
//                                   $ionicLoading.hide();
//                                 
//                                   });
                            
                            
                            
                            cordova.exec(function(response){
                                         
                                         getparticularbuttonsvar=1;
                                         $state.go('imageandtextpage');
                                         
                                         $ionicLoading.hide();
                                         
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "PUT", { api_key: localStorage.appkey,element_id:$rootScope.buttoncontent.elements[0].id,id:$rootScope.buttoncontent.elements[0].images[0].id}]);
                            
                            
                            
                            
                            
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   
                   
                   
                  
                   
                   
                   
                   
                   
                   
                   
                   }
                   }
                   
                   
                  
                   
                   
                   
                   
                   $scope.backimageandtextedit =function()
                   {
                   getparticularbuttonsvar=1;
                   $state.go('imageandtextpage');
                   }
                   
                   });




control.controller('textlistpagecreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   $scope.textlistcreatevalues={};
                   
                   
                   
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   $scope.addtextlistcontent = function(){
                   
                   
                   
                   
                   
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.textlistcreatevalues.title,"text":$scope.textlistcreatevalues.text, "additional_field":"Text list"}})
                   .success(function(data, status){
                           getparticularbuttonsvar=1;
                            $state.go('textlistpage');
                            $ionicLoading.hide();
                            

                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   
                   }
                   
                   $scope.backtextlistpage =function()
                   {
                   $state.go('textlistpage');
                   }
                   
                   });



control.controller('textlistpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                   
                  
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
                   
                   }
                   
                   
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   //$scope.allbuttons=$rootScope.allbuttons;
                   
                   
                  
                   
                   //getallbuttons();
                   
                   function getallbuttons()
                   {
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            
                            
                            
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          if(status==401)
                          {
                          
                          $state.go('login');
                          }
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   }
                   
                   
                   
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.toggleLeftSideMenu = function() {
                   
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   $scope.editimageandtextpage = function()
                   {
                   $state.go('imageandtextpageedit');
                   }
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   $scope.addtextlistpagego = function()
                   {
                   $state.go('textlistaddpage');
                   }
                   $scope.textlists=true;
                   $scope.textlistdeletebutton=false;
                   $scope.textlisteditbutton=false;
                   $scope.deletetextlist = function()
                   {
                   $scope.textlisteditbutton=false;
                   if(!$scope.textlistdeletebutton)
                   {
                   $scope.textlistdeletebutton=true;
                   $scope.textlists=false;
                   }
                   else
                   {
                   $scope.textlistdeletebutton=false;
                   $scope.textlists=true;

                   }
                   
                   }
                   
                   
                   

                   
                   
                   
                   $scope.editthistextlist = function()
                   {
                   $scope.textlistdeletebutton=false;
                   if(!$scope.textlisteditbutton)
                   {
                   $scope.textlisteditbutton=true;
                   $scope.textlists=false;
                   }
                   else
                   {
                   $scope.textlisteditbutton=false;
                   $scope.textlists=true;
                   
                   }
                   
                   }
                   
                   
                   $scope.editthistextcontent = function(elementarry)
                   {
                   
                   $rootScope.textlistelementcontent=elementarry;
                   $state.go('textlisteditpage');
                   }
                   
                  
                   
                   $scope.clickmainmenu = function(buttonarray)
                   {
                   $rootScope.buttoncontent=buttonarray;
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                   
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                   
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                   $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   
                   $scope.deletethistextlist = function(elementarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/elements.json', cache: false, params:{'api_key':localStorage.appkey, 'id':elementarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getparticularbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(data)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                   /*Add Button */
                   
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   
                   
                   $scope.editthisbutton = function(buttonarray)
                   {
                   
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                   
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   }
                   });


control.controller('textlistaddpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                   
                   
                   $scope.textlistaddvalues={};
                   
                   
                   
                   
                   
                   
                   
                   
                  
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   


                   
          
                   
                   
                   $scope.addtextlistcontent = function(){
                 
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.buttoncontent.id,"title":$scope.textlistaddvalues.title,"text":$scope.textlistaddvalues.text}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                           $ionicLoading.hide();
                            
                            getparticularbuttonsvar=1;
                            $state.go('textlistpage');
    
                            
                            
                            
                            
                            
                            
                            })
                   .error(function(data, status, headers, config) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          
                          });

                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.backtextlistaddpage =function()
                   {
                   $state.go('textlistpage');
                   }
                   
                   });



control.controller('textlisteditpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                  
                   
                   $scope.textlisteditvalues={};
                   
                   
                   $scope.textlisteditvalues.title=$rootScope.textlistelementcontent.title;
                   
                   
                   $scope.textlisteditvalues.text=$rootScope.textlistelementcontent.text;
                   
                   
                   
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.edittextlistcontent = function(){
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":localStorage.appkey,"id":$rootScope.textlistelementcontent.id,"title":$scope.textlisteditvalues.title,"text":$scope.textlisteditvalues.text}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            $ionicLoading.hide();
                            
                            getparticularbuttonsvar=1;
                            $state.go('textlistpage');
                            
                            
                            
                            
                            
                            
                            
                            })
                   .error(function(data, status, headers, config) {
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          
                          });
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.backtextlistaddpage =function()
                   {
                   
                   $state.go('textlistpage');
                   }
                   
                   });



control.controller('imageswithdescriptionpagecreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   $scope.imagewithdescriptioncreatevalues={};
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                   
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagewithdescriptionlistcreate = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.imagewithdescriptioncreatevalues.title,"text":$scope.imagewithdescriptioncreatevalues.text, "additional_field":"Images with Description in List"}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
                          
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imageswithdescriptionlistpage');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$scope.currentelementid}]);
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }
                   
                   $scope.backimagewithdescriptioncreate =function()
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   
                   });



control.controller('imageswithdescriptionlistpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                   
                   
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
                   
                   }
                   
                   
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   //$scope.allbuttons=$rootScope.allbuttons;
                   
                   
                   
                   
                   //getallbuttons();
                   
                   function getallbuttons()
                   {
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            
                            
                            
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   }
                   
                   
                   
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.toggleLeftSideMenu = function() {
                   
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   $scope.editimageandtextpage = function()
                   {
                   $state.go('imageandtextpageedit');
                   }
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   $scope.addimagewithdescriptionpagego = function()
                   {
                   $state.go('imageswithdescriptionlistaddpage');
                   }
                   $scope.imageanddescriptionlists=true;
                   $scope.imageanddescriptiondeletebutton=false;
                   $scope.imageanddescriptioneditbutton=false;
                   $scope.deleteimageanddescriptionlist = function()
                   {
                   $scope.imageanddescriptioneditbutton=false;
                   if(!$scope.imageanddescriptiondeletebutton)
                   {
                   $scope.imageanddescriptiondeletebutton=true;
                   $scope.imageanddescriptionlists=false;
                   }
                   else
                   {
                   $scope.imageanddescriptiondeletebutton=false;
                   $scope.imageanddescriptionlists=true;
                   
                   }
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.editthisimageanddescriptionlist = function()
                   {
                   $scope.imageanddescriptiondeletebutton=false;
                   if(!$scope.imageanddescriptioneditbutton)
                   {
                   $scope.imageanddescriptioneditbutton=true;
                   $scope.imageanddescriptionlists=false;
                   }
                   else
                   {
                   $scope.imageanddescriptioneditbutton=false;
                   $scope.imageanddescriptionlists=true;
                   
                   }
                   
                   }
                   
                   
                   $scope.editthisimageanddescriptioncontent = function(elementarry)
                   {
                   
                   $rootScope.textlistelementcontent=elementarry;
                   $state.go('imageswithdescriptionlisteditpage');
                   }
                   
                   
                   
                   $scope.clickmainmenu = function(buttonarray)
                   {
                   $rootScope.buttoncontent=buttonarray;
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                   
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                   
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                   $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   
                   $scope.deletethisimageanddescriptioncontent = function(elementarray)
                   {
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/elements.json', cache: false, params:{'api_key':localStorage.appkey, 'id':elementarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getparticularbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(data)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                   /*Add Button */
                   
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   
                   
                   $scope.editthisbutton = function(buttonarray)
                   {
                   
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                   
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   }
                   });


control.controller('imageswithdescriptionlistpageaddCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                   
                   
                   $scope.imagewithdescriptionaddvalues={};
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                  
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagewithdescriptionlistadd = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.imagewithdescriptionaddvalues.title,"text":$scope.imagewithdescriptionaddvalues.text}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imageswithdescriptionlistpage');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$scope.currentelementid}]);
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }

                   
                   
                   
                   
                   
                   
                   
                   $scope.backimageanddescriptionlistaddpage =function()
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   
                   });


control.controller('imageswithdescriptionlistpageeditCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet,$ionicPopup) {
                   
                   
                   
                   $scope.imagewithdescriptioneditvalues={};
                   
                   
                   
                   $scope.imagewithdescriptioneditvalues.title=$rootScope.textlistelementcontent.title;
                   
                   
                   $scope.imagewithdescriptioneditvalues.text=$rootScope.textlistelementcontent.text;
                   
                   $scope.imagewithdescriptioneditvalues.imageid=$rootScope.textlistelementcontent.images[0].id;
                   
                   
                   
                   
                   
                   
                   $scope.btn_image=$rootScope.textlistelementcontent.images[0].url;
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                  
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagewithdescriptionlistedit = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/elements/update_default.json", cache: false, params:{"api_key":localStorage.appkey,"id":$rootScope.textlistelementcontent.id,"title":$scope.imagewithdescriptioneditvalues.title,"text":$scope.imagewithdescriptioneditvalues.text}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imageswithdescriptionlistpage');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "PUT", { api_key: localStorage.appkey,element_id:$rootScope.textlistelementcontent.id,id:$scope.imagewithdescriptioneditvalues.imageid}]);
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }
                   
                   
                   
                   
                   
                   
                   
                   
                   $scope.backimageanddescriptionlisteditpage =function()
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   
                   });




control.controller('imagespagecreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                   
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagescreate = function(){
                   
                   
                   
                   
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_default.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":"Images","text":"Images", "additional_field":"Images"}})
                   .success(function(data, status){
                            
                            
                            $ionicLoading.hide();
                            
                            
                            $scope.currentelementid=data.id;
                            
                            
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imagespage');
                                         
                                         
                                         }, function(error){
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                         }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$scope.currentelementid}]);
                            
                            
                            })
                   .error(function(data, status) {
                          
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          });
                   
                   }
                   }
                   
                   $scope.backimagescreate =function()
                   {
                   $state.go('imagespage');
                   }
                   
                   });





control.controller('imagespageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                   
                   
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
                   
                   }
                   
                   
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   //$scope.allbuttons=$rootScope.allbuttons;
                   
                   
                   
                   
                   //getallbuttons();
                   
                   function getallbuttons()
                   {
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            
                            
                            
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   }
                   
                   
                   
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.toggleLeftSideMenu = function() {
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   $scope.editimageandtextpage = function()
                   {
                   $state.go('imageandtextpageedit');
                   }
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   $scope.addimagepagego = function(buttonarray)
                   {
                   $rootScope.buttonforimages=buttonarray;
                   $state.go('imagesaddpage');
                   }
                   $scope.imageslists=true;
                   $scope.imagesdeletebutton=false;
                   $scope.imageseditbutton=false;
                   $scope.deleteimageslist = function()
                   {
                   $scope.imageseditbutton=false;
                   if(!$scope.imagesdeletebutton)
                   {
                   $scope.imagesdeletebutton=true;
                   $scope.imageslists=false;
                   }
                   else
                   {
                   $scope.imagesdeletebutton=false;
                   $scope.imageslists=true;
                   
                   }
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   $scope.editthisimageslist = function()
                   {
                   $scope.imagesdeletebutton=false;
                   if(!$scope.imageseditbutton)
                   {
                   $scope.imageseditbutton=true;
                   $scope.imageslists=false;
                   }
                   else
                   {
                   $scope.imageseditbutton=false;
                   $scope.imageslists=true;
                   
                   }
                   
                   }
                   
                   
                   $scope.editthisimages = function(elementarry,buttonarray)
                   {
                   $rootScope.buttonforimages=buttonarray;
                   
                   $rootScope.imageselement=elementarry;
                   
                   $state.go('imageseditpage');
                   }
                   
                   
                   
                   $scope.clickmainmenu = function(buttonarray)
                   {
                   $rootScope.buttoncontent=buttonarray;
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                   
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                   
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                   $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   
                   $scope.deletethisimages = function(elementarray,buttonarray)
                   {
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/elements/images.json', cache: false, params:{'api_key':localStorage.appkey, 'element_id':buttonarray.elements[0].id,'id':elementarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getparticularbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(data)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                   /*Add Button */
                   
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   
                   
                   $scope.editthisbutton = function(buttonarray)
                   {
                   
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                   
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   }
                   });




control.controller('imagesaddpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   
                   
                   
                   $scope.btn_image="img/btn_image.png";
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                 $scope.btn_image=imageURI;
                   
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagesadd = function(){
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                  
                  $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            cordova.exec(function(response){
                                         
                                         
                                         getparticularbuttonsvar=1;
                                         $ionicLoading.hide();
                                         $state.go('imagespage');
                                         
                                         
                                         }, function(error){
                                         alert("err :"+error);
                                         $ionicLoading.hide();
                                         var error = JSON.parse(error.responseText);
                                         navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                            			 }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "POST", { api_key: localStorage.appkey,id:$rootScope.buttonforimages.elements[0].id}]);	
                            
                           
         
                   
                   }
                   }
                   
                   $scope.backimagesadd =function()
                   {
                   $state.go('imagespage');
                   }
                   
                   });



control.controller('imageseditpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   
                   
                   
                   $scope.btn_image=$rootScope.imageselement.url;
                   
                   
                   
                   
                   $scope.showActionsheet = function() {
                   
                   $ionicActionSheet.show({
                                          titleText: 'Choose',
                                          buttons: [
                                                    { text: 'Camera' },
                                                    { text: 'PhotoAlbum' },
                                                    ],
                                          
                                          cancelText: 'Cancel',
                                          cancel: function() {
                                          console.log('CANCELLED');
                                          },
                                          buttonClicked: function(index) {
                                          console.log('BUTTON CLICKED', index);
                                          if(index==0){
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.CAMERA,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          else{
                                          navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                                      destinationType: Camera.DestinationType.FILE_URI,sourceType : Camera.PictureSourceType.PHOTOLIBRARY,saveToPhotoAlbum: false,correctOrientation:true});
                                          return true;
                                          }
                                          
                                          }
                                          
                                          });
                   };
                   
                   function onSuccess(imageURI) {
                   $scope.image = imageURI;
                   $('#selectedimage').attr('src', imageURI);
                   $scope.btn_image=imageURI;
                   
                   
                   //$('.file-input-wrapper6 > .btn-file-input6').css('background-image', 'url('+imageURI+')');
                   //$state.reload();
                   }
                   
                   function onFail(message) {
                   navigator.notification.alert('Failed because: ' + message);
                   }
                   
                   
                   $scope.imagesupdate = function(){
                   if($scope.image==undefined)
                   {
                   
                   }
                   else
                   {
                   
                   
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   cordova.exec(function(response){
                                
                               
                                getparticularbuttonsvar=1;
                                $ionicLoading.hide();
                                $state.go('imagespage');
                                
                                
                                }, function(error){
                                $ionicLoading.hide();
                                var error = JSON.parse(error.responseText);
                                navigator.notification.alert(error.error, function(){}, 'Content', 'OK' );
                                }, "Echo", "echo", ["370", "280", "image", $scope.image, "http://build.myappbuilder.com/api/elements/images.json?", "PUT", { api_key: localStorage.appkey,element_id:$rootScope.buttonforimages.elements[0].id,id:$rootScope.imageselement.id}]);
                   
                   
                   
                   
                   
                   }
                   }
                   
                   $scope.backimagesadd =function()
                   {
                   $state.go('imagespage');
                   }
                   
                   });



control.controller('videowithdescriptionpagecreateCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicActionSheet) {
                   
                   
                   
                   $scope.videowithdescriptioncreatevalues={};
                   
                   
                   
                   
                   $scope.tinymceOptions = {
                   menubar: false,
                   theme: "modern",
                   plugins: [
                             "advlist autolink lists link image charmap print preview anchor",
                             "searchreplace wordcount visualblocks visualchars code fullscreen",
                             "insertdatetime table contextmenu ",
                             "emoticons textcolor"
                             ],
                   toolbar1: "insertfile undo redo | styleselect | bold italic | bullist numlist outdent indent | link image | alignleft aligncenter alignright alignjustify forecolor backcolor"
                   
                   };
                   
                   
                   
                   
                   
//                   $scope.videowithdescriptioncreate = function(){
//                   
//                   
//                   if((($("#video").get(0).files[0].size) / 1024 / 1024) <= 10){
//                   
//                   
//                   
//                   
//                   $scope.videowithdescriptioncreatevalues.video= $("#video").get(0).files[0];
//                   
//                   $ionicLoading.show({
//                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
//                                      });
//                   alert("btn id :"+$rootScope.mainbuttonid)
//                   alert("title :"+$scope.videowithdescriptioncreatevalues.title);
//                   alert("description :"+$scope.videowithdescriptioncreatevalues.text);
//                   alert("video :"+$scope.videowithdescriptioncreatevalues.video);
//                   $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/create_video.json", cache: false, params:{"api_key":localStorage.appkey,"button_id":$rootScope.mainbuttonid,"title":$scope.videowithdescriptioncreatevalues.title,"description":$scope.videowithdescriptioncreatevalues.text,"video":$scope.videowithdescriptioncreatevalues.video, "price":"Videos with Description"}})
//                   .success(function(data, status){
//                            
//                            
//                            $ionicLoading.hide();
//                            
//                            
//                            $scope.currentelementid=data.id;
//                            
//                            
//
//                            
//                            
//                        
//                            
//    
//                            
//                            
//                            })
//                   .error(function(data, status) {
//                          
//                          alert(JSON.stringify(data));
//                          $ionicLoading.hide();
//                          });
//                   
//                   }
//                   else
//                   {
//                   var alertPopup = $ionicPopup.alert({
//                                                      title: 'MAB',
//                                                      template: 'Please choose Video File below 10MB or Video Frame'
//                                                      });
//                   alertPopup.then(function(res) {
//                                   
//                                   });
//                   }
//                 
//                   }
                   
                   
                   
                   
                   
                   
                   $scope.videowithdescriptioncreate = function(){
                   
                   
                   
                   if(((($("#video").get(0).files[0].size) / 1024 / 1024) <= 10)){
                   
                   $ionicLoading.show({
                                      content: '<i class="icon ion-loading-a"></i>&nbsp;Please Wait..',
                                      animation: 'fade-in',
                                      showBackdrop: true,
                                      maxWidth: 200,
                                      showDelay: 0
                                      });
                   
                   var formData = new FormData();
                   formData.append('api_key', localStorage.appkey);
                   formData.append('button_id', $rootScope.mainbuttonid);
                   formData.append('title', $scope.videowithdescriptioncreatevalues.title);
                   formData.append('description',$scope.videowithdescriptioncreatevalues.text);
                   formData.append('video',$("#video").get(0).files[0]);
                   
                   formData.append('video_thumbnail',$('#videothumb').get(0).files[0]);
                   formData.append('additional_field','Videos with Description');
                   formData.append('price','price text');
                   formData.append('video_frame_title','Frame text');
                   
                   $http.post('http://build.myappbuilder.com/api/elements/create_video.json', formData, {
                              transformRequest: angular.identity,
                              headers: {'Content-Type': undefined}
                              })
                   
                   .success(function(data,status, headers, config){
                            $ionicLoading.hide();
                         
                            
                            
                            $ionicLoading.show({
                                               template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                               });
                            
                            
                            
                            $http({method: "POST", url:"http://build.myappbuilder.com/api/elements/tags.json", cache: false, params:{"api_key":localStorage.appkey,"id":data.id,"tags":"Videos with Description"}})
                            .success(function(data, status){
                                     $ionicLoading.hide();
                                     $state.go('videowithdescriptionpage');
                                     
                                     })
                            .error(function(data, status) {
                                   
                                   alert("errput :"+JSON.stringify(data));
                                   $ionicLoading.hide();
                                   });
                            
                            
                            
                            
                            
                            
                            
                            
                            })
                   .error(function(data,status, headers, config){
                          alert("err :"+JSON.stringify(data));
                          var total = JSON.parse(data);        
                          
                          var alertPopup = $ionicPopup.alert({
                                                             title: 'Video',
                                                             template:total.error
                                                             });
                          alertPopup.then(function(res) {
                                          });
                          $ionicLoading.hide();
                          
                          });
                   }  
                   else{
                   var alertPopup = $ionicPopup.alert({
                                                      title: 'MAB',
                                                      template: 'Please choose Video File below 10MB or Video Frame'
                                                      });
                   alertPopup.then(function(res) {
                                   
                                   });
                   }
                   
                   }
                   
                   
                   
                   
                   $scope.backvideowithdescriptioncreate =function()
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   
                   });


control.controller('videowithdescriptionpageCtrl', function($scope, $state, $rootScope, $ionicPopover, $ionicSideMenuDelegate, $sce, $ionicLoading, $http, $location, $ionicModal, $ionicPopup, $ionicActionSheet, $ionicSlideBoxDelegate) {
                   
                   
                   
                   
                   if(findloginornot==1)
                   {
                   $scope.iflogin=true;
                   
                   }
                   else
                   {
                   $scope.ifnotlogin=true;
                   
                   }
                   
                   
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   //$scope.allbuttons=$rootScope.allbuttons;
                   
                   
                               $scope.video = {
                preload: "none",
                sources: [
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm"},
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                ],
                tracks: [
                    {
                        src: "http://www.videogular.com/assets/subs/pale-blue-dot.vtt",
                        kind: "subtitles",
                        srclang: "en",
                        label: "English",
                        default: ""
                    }
                ],
                theme: {
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                }
            };
                   
                   //getallbuttons();
                   
                   function getallbuttons()
                   {
                   $scope.mainmenus=true;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey}})
                   
                   .success(function(data, status, headers, config) {
                            $rootScope.allbuttons=data;
                            
                            
                            
                            
                            
                            
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          if(status==401)
                          {
                          
                          $state.go('login');
                          }
                          
                          $ionicLoading.hide();
                          
                          });
                   
                   
                   }
                   
                   
                   
                   
                   
                   if(getparticularbuttonsvar==1)
                   {
                   getparticularbuttonsvar=0;
                   getparticularbuttons()
                   }
                   
                   function getparticularbuttons()
                   {
                   
                   $ionicLoading.show({template:"Loading"});
                   $http({method: "GET", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey,'id':$rootScope.buttoncontent.id}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $rootScope.buttoncontent=data;
                            $ionicSlideBoxDelegate.update();
                            $ionicLoading.hide();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          
                          
                          $ionicLoading.hide();
                          
                          });
                   }
                   
                   
                   $scope.toggleLeftSideMenu = function() {
                   
                   $ionicSideMenuDelegate.toggleLeft();
                   };
                   
                   
                   
                   
                   $scope.addbutton = function()
                   {
                   $scope.modal.show();
                   }
                   $scope.closeModal = function()
                   {
                   $scope.modal.hide();
                   }
                   
                   $scope.editimageandtextpage = function()
                   {
                   $state.go('imageandtextpageedit');
                   }
                   $scope.gologin = function()
                   {
                   $state.go('login');
                   };
                   $scope.logout = function()
                   {
                   findloginornot=0;
                   $scope.ifnotlogin=true;
                   $scope.iflogin=false;
                   $scope.ifloginwithreorder=false;
                   $scope.deletemenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   };
                   
                   
                   $scope.clickmainmenu = function(buttonarray)
                   {
                   $rootScope.buttoncontent=buttonarray;
                   
                   if(buttonarray.elements.length!=0)
                   {
                   $rootScope.findpagefromlogin=$rootScope.buttoncontent.elements[0].additional_field;
                   $rootScope.findpagefromloginforvideoonly=$rootScope.buttoncontent.elements[0].tag_list[0];
                   }
                   
                   if(buttonarray.elements.length==0)
                   {
                   if(findloginornot==1)
                   {
                   $scope.choose.show();
                   }
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Slider with address")
                   {
                   
                   $state.go('home');
                   }
                   
                   else if(buttonarray.elements[0].additional_field=="Images and Text")
                   {
                   
                   $state.go('imageandtextpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Text list")
                   {
                   
                   $state.go('textlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionlistpage');
                   }
                   else if(buttonarray.elements[0].additional_field=="Images")
                   {
                   $state.go('imagespage');
                   }
                   else if(buttonarray.elements[0].tag_list[0]=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpage');
                   }
                   $rootScope.mainbuttonid=buttonarray.id;
                   $rootScope.mainbuttontitle=buttonarray.title;
                   
                   }
                   
                   
                   
                   
                   
                   $scope.moveItem = function(item, fromIndex, toIndex) {
                   
                   //Move the item in the array
                   $ionicLoading.show({template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'});
                   $scope.allbuttons.splice(fromIndex, 1);
                   $scope.allbuttons.splice(toIndex, 0, item);
                   var ids = $scope.allbuttons.map(function(btn){return btn.id});
                   
                   $http.post('http://build.myappbuilder.com/api/buttons/reorder.json', {api_key: localStorage.appkey, ids: ids})
                   .success(function(data,status,headers,config){
                            
                            $ionicLoading.hide();
                            })
                   .error(function(data,status,headers,config){
                          alert(JSON.stringify(data));
                          $ionicLoading.hide();
                          })
                   //console.log(item, fromIndex, toIndex)
                   };
                   
                   
                   
                   $scope.deletebuttons = function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.ifloginwithreorder=false;
                   if($scope.deletemenus==true)
                   {
                   $scope.deletemenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.deletemenus==false)
                   {
                   $scope.deletemenus=true;
                   }
                   }
                   
                   $scope.editbuttons = function()
                   {
                   
                   $scope.mainmenus=false;
                   $scope.deletemenus=false;
                   
                   
                   
                   
                   if($scope.editmenus==true)
                   {
                   $scope.ifloginwithreorder=false;
                   $scope.editmenus=false;
                   $scope.reordermenus=false;
                   $scope.mainmenus=true;
                   }
                   else if($scope.editmenus==false)
                   {
                   $scope.ifloginwithreorder=true;
                   $scope.editmenus=true;
                   $scope.reordermenus=false;
                   }
                   }
                   
                   $scope.reordermenus=false;
                   $scope.reorder=function()
                   {
                   $scope.mainmenus=false;
                   $scope.editmenus=false;
                   $scope.deletemenus=false;
                   if($scope.reordermenus==true)
                   {
                   $scope.mainmenus=true;
                   $scope.ifloginwithreorder=false;
                   $scope.reordermenus=false;                   }
                   else if($scope.reordermenus==false)
                   {
                   $scope.mainmenus=false;
                   $scope.reordermenus=true;
                   }
                   }
                   
                   
                   
                   $scope.deletethisbutton = function(buttonarray)
                   {
                   
                   
                   
                   var confirmPopup = $ionicPopup.confirm({
                                                          title: 'Church',
                                                          template: 'Are you sure you want to delete this?'
                                                          });
                   confirmPopup.then(function(res) {
                                     if(res) {
                                     $ionicLoading.show({template:"Loading"});
                                     $http({method: "DELETE", url:'http://build.myappbuilder.com/api/buttons.json', cache: false, params:{'api_key':localStorage.appkey, 'id':buttonarray.id}})
                                     
                                     .success(function(data, status, headers, config) {
                                              
                                              getallbuttons();
                                              $ionicLoading.hide();
                                              
                                              })
                                     .error(function(data, status, headers, config) {
                                            
                                            alert(status)
                                            
                                            $ionicLoading.hide();
                                            
                                            });
                                     } else {
                                     console.log('You are not sure');
                                     }
                                     });
                   
                   
                   
                   
                   
                   
                   
                   
                   }
                   
                   
                   $scope.closechoosemodal = function()
                   {
                   $scope.choose.hide();
                   }
                   /*Add Button */
                   
                   
                   
                   
                   $ionicModal.fromTemplateUrl('templates/buttoncreate.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.modal = modal;
                                                       });
                   $scope.buttoncreatevalues={};
                   $scope.createbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   
                   $http({method: "POST", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"title":$scope.buttoncreatevalues.title,"image":"http://s3.amazonaws.com/iPhoneBooks/user/buttons/original/688.png"}})
                   
                   .success(function(data, status, headers, config) {
                            
                            $scope.buttoncreatevalues.title="";
                            
                            $scope.modal.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   
                   
                   /*Edit Button */
                   $ionicModal.fromTemplateUrl('templates/buttonedit.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.editbutton = modal;
                                                       });
                   $scope.buttoneditvalues={};
                   
                   
                   $scope.editthisbutton = function(buttonarray)
                   {
                   
                   $scope.buttoneditvalues.title=buttonarray.title;
                   $scope.buttoneditvalues.buttonid=buttonarray.id;
                   $scope.editbutton.show();
                   }
                   $scope.editbuttonclosemodal = function()
                   {
                   $scope.editbutton.hide();
                   }
                   
                   $scope.updatethisbutton = function()
                   {
                   $ionicLoading.show({
                                      template: '<i class="icon ion-loading-a"></i>&nbsp;Please wait...'
                                      });
                   $http({method: "PUT", url:"http://build.myappbuilder.com/api/buttons/via_url.json", cache: false, params:{"api_key":localStorage.appkey,"id":$scope.buttoneditvalues.buttonid,"title":$scope.buttoneditvalues.title}})
                   
                   .success(function(data, status, headers, config) {
                            
                            
                            
                            $scope.editbutton.hide();
                            
                            $ionicLoading.hide();
                            
                            getallbuttons();
                            
                            })
                   .error(function(data, status, headers, config) {
                          
                          $ionicLoading.hide();
                          navigator.notification.alert(status, function(){}, 'Church', 'OK' );
                          });
                   }
                   
                   
                   /*Choose Page */
                   $ionicModal.fromTemplateUrl('templates/choose.html', {
                                               scope: $scope,
                                               animation: 'slide-in-up'
                                               }).then(function(modal) {
                                                       $scope.choose = modal;
                                                       });
                   $scope.pagesvalue={};
                   
                   $scope.choosepage=function(pagename)
                   {
                   $scope.choose.hide();
                   
                   
                   if(pagename=="Slider with address")
                   {
                   $state.go('sliderpagecreate');
                   }
                   else if(pagename=="Images and Text")
                   {
                   
                   $state.go('imageandtextcreate');
                   }
                   else if(pagename=="Text list")
                   {
                   $state.go('textlistpagecreate');
                   }
                   else if(pagename=="Images with Description in List")
                   {
                   $state.go('imageswithdescriptionpagecreate');
                   }
                   else if(pagename=="Images")
                   {
                   $state.go('imagespagecreate');
                   }
                   else if(pagename=="Videos with Description")
                   {
                   $state.go('videowithdescriptionpagecreate');
                   }
                   }
                   });
